(function($, window, document) {

    'use strict';

    $('head').append('<style type="text/css">#wrapper { display: none; } #fade, #loader { display: block; }</style>');
    $.event.add(window, 'load', function() {
        var height = $('#wrapper').height();

        $('#fade').css('height', height).delay(400).fadeOut(600);
        $('#loader').delay(300).fadeOut(400);
        $('#wrapper').css('display', 'block')
    });

    function generateQRCode() {
        var text = $.trim($('#url').val());

        $('#qrcode').empty();

        if (text.length) {
            new QRCode(document.getElementById('qrcode'), {
                text: text,
                width: 250,
                height: 250,
                correctLevel: QRCode.CorrectLevel.L
            });
        }
        return false;
    }

    $(function() {
        $('#button').on('click', function() {
            generateQRCode();
        });
        $('#url').keypress(function(e) {
            if (e.which == 13) {
                generateQRCode();
                return false;
            }
        });
    });

    $(function() {
        $('.dialogBtn').on('click', function() {
            var data = $(this).data('imgurl'),
                img = new Image(),
                width,
                height,
                $dialog = $('#dialog');

            var $container = $dialog.find('.dialog_container');

            $container.append('<img src="" id="dialog_img">');
            img.onload = function() {
                $container.children('img').attr({
                    src: data,
                    height: height,
                    width: width
                })
            };
            img.src = data;
            width = img.width;
            height = img.height;

            $('body').append('<div id="mask"></div>');
            $('#mask').show();
            $dialog.css({
                top: $(window).height() / 2 - height / 2,
                left: $(window).width() / 2 - width / 2
            }).show();
            showDialog();
            return false;
        });

        function showDialog() {
            var $dialog = $('#dialog'),
                $mask = $('#mask'),
                $button = $('.dialogBtn'),
                $img = $('#dialog_img');

            $dialog.on('click', '.dialog_close', function(e) {
                e.preventDefault();

                $mask.remove();
                $dialog.fadeOut();
                $img.remove()
            });
            $mask.on('click', function(e) {
                e.preventDefault();

                $mask.remove();
                $dialog.fadeOut();
                $img.remove()
            });
        }
    });
})(jQuery, window, document);