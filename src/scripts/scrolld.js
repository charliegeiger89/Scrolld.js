(function($) {
    'use strict';
    $.fn.scrolld = function(options) {

        var buttons = this;
        var win = $(window);
        var html = $('html');
        var body = $('body');
        var winHeight = win.height();
        var animateTarget;

        var settings = $.extend({
            position: 'top',
            speed: 1100,
            offset: 0,
            easing: 'scrolldEasing', // Requires jQuery easing plugin for additional easing methods
            callback: null
        }, options);

        // Recalculate var
        function update() {
            winHeight = win.height();
        };

        // Debounce window resize, run update
        (function windowResizeWatcher() {
            var resizeTimeout;
            win.on('resize', function() {
                resizeTimeout ? clearTimeout(resizeTimeout) : 0;
                resizeTimeout = setTimeout(update, 150);
            });
        })();

        // Switch animation target based on browser
        // FireFox requires html to animate
        // Chrome requires body to animate
        (function browserCheck() {
            var firefox = typeof InstallTrigger !== 'undefined';
            if (firefox) {
                animateTarget = html;
            } else {
                animateTarget = body;
            }
        })();

        // Bind click handler to each element with scrolld data attribute
        (function bindClicks() {
            var buttonsLength = buttons.length;
            for (var i = 0; i < buttonsLength; i++) {
                $(buttons[i]).on('click', function() {
                    update();
                    var targetID = $(this).data('scrolld');
                    var target = $('#' + targetID);
                    var targetOffset = target.offset().top;
                    var targetHeight = target.outerHeight();
                    var animateOffset = ~~ (targetOffset + settings.offset);
                    // Updates animateOffset for position center option
                    // If window is taller than div, scroll div to center of view
                    if (settings.position === 'center' && winHeight > targetHeight) {
                        animateOffset = ~~ (targetOffset - ((winHeight / 2) - (targetHeight / 2)))
                    }
                    // Animate using settings
                    animateTarget.stop(true).animate({
                            scrollTop: animateOffset
                        },
                        settings.speed,
                        settings.easing,
                        function() {
                            if (typeof(settings.callback) == 'function') {
                                // Run callback after animation has ended
                                settings.callback();
                            }
                        }
                    )
                })
            }
        })();

        jQuery.extend(jQuery.easing, {
            // Custom Easing Function
            scrolldEasing: function(x, t, b, c, d) {
                var ts = (t /= d) * t;
                var tc = ts * t;
                return b + c * (-0.749999 * tc * ts + 2.5 * ts * ts + -2 * tc + -1.5 * ts + 2.75 * t);
            }
        });

        return this;

    }
})(jQuery);
