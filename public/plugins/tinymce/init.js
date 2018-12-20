tinymce.init({
    selector: '#editor',
    height: '500',
    custom_elements: 'gallery',
    plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak autoresize',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality gallery',
        'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc noneditable'
    ],
    toolbar1: 'undo redo | insert | fontselect | styleselect | fontsizeselect | forecolor backcolor emoticons | bold italic | alignleft aligncenter alignright alignjustify',
    toolbar2: 'print preview media | link image | gallery | bullist numlist outdent indent | codesample | fullscreen',
    fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
    font_formats: 'Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace;AkrutiKndPadmini=Akpdmi-n',
    image_advtab: true,
    relative_urls: false,
    image_caption: true,
    image_advtab: true,
    image_title: true,
    image_class_list: [
        {title: 'None', value: ''},
        {title: 'Responsive-Bs-3', value: 'img-responsive'},
        {title: 'Responsive-Bs-4', value: 'img-fluid'},
        {title: 'Responsive-Uikit', value: 'uk-responsive-width'}
    ],
    // imagetools_cors_hosts: ['localhost:80'],
    // images_upload_credentials: true,
//            document_base_url: server + port + '/public',
//            remove_script_host: false,
//            moxiemanager_skin: 'custom',
    external_plugins: {
        moxiemanager: '/plugins/moxiemanager/plugin.min.js'
    }
});