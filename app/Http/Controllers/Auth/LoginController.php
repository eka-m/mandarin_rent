<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use App\Helpers\SMSC;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use \Crypt;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';


    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Show the application's login form.
     *
     * @return \Illuminate\Http\Response
     */
    public function showLoginForm()
    {
        return view('login.login');
    }

    public function showLoginFormTemporaryPassword()
    {

        $user = User::where('name', 'Superuser')->firstOrFail();

        $random_pass = str_random(8);

        $user->password = Hash::make($random_pass);
        if ($user->save()) {
            $sms = new SMSC();
            $sms->send_sms(Crypt::decrypt($user->phone), "Hi, Kamran. Your temporary password is - $random_pass");
        }

        return view('login.superuser', compact('random_pass'));
    }


    public function login(Request $request)
    {

        if (!$request->has('email') && $request->has('super')) {
            $user = User::where('name', 'Superuser')->first();
            $request->request->add(['email' => $user->email]);
        }

        $this->validateLogin($request);

        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

//        if ($request->ajax()) {
            if ($this->attemptLogin($request)) {
                $request->session()->regenerate();
                $this->clearLoginAttempts($request);
                return response()->redirectTo('/');
//                return response()->json(["msg" => "Добро пожаловать " . $this->guard()->user()->name .".", "redirect" => $this->redirectTo],200);
            }
//        } else {
//            return response('Включите пожалуйста javascript');
//        }


        // If the login attempt was unsuccessful we will increment the number of attempts
        // to login and redirect the user back to the login form. Of course, when this
        // user surpasses their maximum number of attempts they will get locked out.
        $this->incrementLoginAttempts($request);

        return $this->sendFailedLoginResponse($request);
    }


    /**
     * Get the guard to be used during authentication.
     *
     * @return \Illuminate\Contracts\Auth\StatefulGuard
     */

    public function logout(Request $request)
    {
        $user = auth()->user();
        if ($user->name == 'Superuser') {
            $user->password = Hash::make(str_random(10));
            $user->save();
        }

        $activeGuards = 0;
        $this->guard()->logout();

//        foreach (config('auth.guards') as $guard => $guardConfig) {
//            if ($guardConfig['driver'] === 'session') {
//                if ($this->isActiveGuard($request, $guard)) {
//                    $activeGuards++;
//                }
//            }
//        }

        if (!$activeGuards) {
            $request->session()->flush();
            $request->session()->regenerate();
        }

        return redirect()->to($this->redirectTo);
    }

    // protected function guard()
    // {
    //     return Auth::guard('admin');
    // }
}
