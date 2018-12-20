

tinymce.PluginManager.add('gallery', function( editor, url ) {

    function insert_or_replace( content ) {
        editor.focus( );
        if ( editor.selection )
            editor.selection.setContent( content );
        else
            editor.insertContent( content );
    };

    function buildListItems(inputList, itemCallback, startItems) {
        function appendItems(values, output) {
            output = output || [];

            tinymce.each(values, function(item) {
                var menuItem = {text: item.text || item.title, value: ""};
                itemCallback(menuItem, item);
                output.push(menuItem);
            });

            return output;
        }

        return appendItems(inputList, startItems || []);
    }

    function ajax( ajaxurl, cb ) {
        return function( ) {
            editor.setProgressState( 1 ); // Show progress
            tinymce.util.XHR.send({
                url: ajaxurl,
                success: function( res ) {
                    editor.setProgressState( 0 ); // Hide progress
                    cb( !!res ? tinymce.util.JSON.parse( res ) : res );
                }
            });
        };
    };

    function popup( data ) {
        var listBox, win = editor.windowManager.open({
            title: 'Insert',
            resizable : true,
            maximizable : true,
            width: 400,
            height: 300,
            body: [
                {
                    type: 'listbox',
                    name: 'my_control',
                    label: 'Insert',
                    tooltip: 'Select item',
                    values: buildListItems(data, function( item, datum ) {
                        item.value = datum;
                        item.text = datum.title;
                    }),
                    onPostRender: function( ){
                        listBox = this;
                    }
                }
            ],
            buttons: [
                { text: 'Insert', subtype: 'primary', onclick: function( ){
                    var selected = listBox.value( );
                    if ( !!selected )
                        insert_or_replace( '[my-shortcode id="'+selected.id+'" title="'+selected.title+'"]' )
                    win.close( );
                }},
                { text: 'Cancel', onclick: 'close' }
            ]
        });
    };

    editor.addButton('my_button', {
        title: 'Sample Button',
        icon: 'my-icon',
        onclick: ajax(editor.settings.my_plugin.ajaxurl, popup)
    });

    editor.addMenuItem('my_menu', {
        icon: 'my-icon',
        text: 'Sample Menu',
        context: 'insert',
        onclick: ajax(editor.settings.my_plugin.ajaxurl, popup)
    });
});