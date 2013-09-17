(function ($) {
    $.fn.scrolld = function (options) {

        var scrolldCustom = 0; // Set scrolldCustom value here

        // DO NOT TOUCH // MOVE DOWN TO DEFAULTS //
        // Set Scrolld Heavily Used Variables //
        var $win = $(window);
        var doc = document;
        var y = $win.scrollTop();
        var h = $win.height();
        var x = $win.width();
        var htmlBody = $('html, body');
        // Trigger Win Scroll Function
        $win.scroll(function (e) {
            y = $win.scrollTop(); // Update y value dynamically   
            e.stopImmediatePropagation() // Kill For Next Click
            return false;
        });
        // Trigger Win Resize Function
        $win.resize(function (e) {
            h = $win.height(); // Update h value dynamically
            x = $win.width(); // Update x value dynamically
            e.stopImmediatePropagation() // Kill For Next Click
            return false;
        });
        // Custom Easing Function | Slow & Smooth
        $.easing.scrolldEasing1 = function (x, t, b, c, d) {
            var ts = (t /= d) * t;
            var tc = ts * t;
            return b + c * (-3.6 * tc * ts + 4.3 * ts * ts + 0.2 * tc + 0.1 * ts);
        };
        // Custom Easing Function | Elastic
        $.easing.scrolldEasing2 = function (x, t, b, c, d) {
            var ts = (t /= d) * t;
            var tc = ts * t;
            return b + c * (18.9925 * tc * ts + -45.23 * ts * ts + 40.28 * tc + -19.89 * ts + 6.8475 * t);
        };
        // Custom Easing Function | Bouncy
        $.easing.scrolldEasing3 = function (x, t, b, c, d) {
            if ((t /= d) < (1.25 / 3)) {
                return c * (9.5625 * t * t) + b;
            } else if (t < (2.25 / 3)) {
                return c * (8.5625 * (t -= (1.5 / 2.75)) * t + .85) + b;
            } else if (t < (2.75 / 3)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (5.5625 * (t -= (2.625 / 2.75)) * t + 1) + b;
            }
        };
        // Set Speed Vars For Easy Customization
        var speed1 = 100;
        var speed2 = 200;
        var speed3 = 300;
        var speed4 = 400;
        var speed5 = 500;
        var speed6 = 600;
        var speed7 = 700;
        var speed8 = 800;
        var speed9 = 900;
        var speed10 = 1000;
        var speed11 = 1100;
        var speed12 = 1200;
        var speed13 = 1300;
        var speed14 = 1400;
        var speed15 = 1500;
        var speed16 = 1600;
        var speed17 = 1700;
        var speed18 = 1800;
        var speed19 = 1900;
        var speed20 = 2000;
        var speedX = 3000;
        // Define scrolling functions / Maths             
        var idScroll = $(this).attr('id');
        var scrolldNavBar = 'fixedNavBar';
        var scrolldMobileNavBar = 'fixedNavBar';               
        var scrolldFixed = $("#" + scrolldNavBar).outerHeight();
        var scrolldMobileFixed = $("#" + scrolldMobileNavBar).outerHeight();
        var idScrollElement = $("#" + idScroll);
        var idScrollString = idScroll.substr(0, idScroll.length - 3);
        var idScrollDiv = document.getElementById(idScrollString).id;
        var idScrollDivElement = $("#" + idScrollDiv);
        var offsetDivElementTop = Math.round(idScrollDivElement.offset().top);
        var idScrollDivElementHeight = Math.round(idScrollDivElement.height());
        var scrolldTop = offsetDivElementTop + scrolldCustom;
        var scrolldTopFixed = Math.round(offsetDivElementTop - scrolldFixed) + scrolldCustom;
        var scrolldPre = offsetDivElementTop - Math.round(h / 15) + scrolldCustom;
        var scrolldPreFixed = offsetDivElementTop - scrolldFixed - Math.round(h / 20) + scrolldCustom;
        var scrolldCenter = offsetDivElementTop - Math.round(h / 2 - idScrollDivElementHeight / 2);
        var scrolldMobileTopFixed = Math.round(offsetDivElementTop - scrolldMobileFixed) + scrolldCustom;
        var scrolldMobilePreFixed = offsetDivElementTop - scrolldMobileFixed - Math.round(h / 20) + scrolldCustom;
        // Set Vars For Customization
        var scrolldDistance = scrolldTop;
        var scrolldDistanceMin = scrolldTop;
        var scrolldSpeed = 500;
        var scrolldEasing = 'scrolldEasing1';
        var scrolldFixed = true;
        var scrolldMobile = true;
        var scrolldMobileWidth = 979;
        var scrolldMobileDistance = scrolldTop;
        var scrolldMobileDistanceMin = scrolldTop;
        var scrolldMobileSpeed = 500;
        var scrolldMobileEasing = 'scrolldEasing1';
        var scrolldMobileFixed = true;
        var // Set Custom Scrolld.js Settings Here:
		defaults = {
		    /// Set Web Settings
		    scrolldDistance: scrolldTop,
		    scrolldDistanceMin: scrolldTop,
		    scrolldSpeed: 900,
		    scrolldEasing: 'easeOutBounce',
		    scrolldFixed: true,
		    scrolldNavBar: fixedNavBar,
		    /// Set Mobile Settings
		    scrolldMobile: true,
		    scrolldMobileWidth: 979,
		    scrolldMobileDistance: scrolldTop,
		    scrolldMobileDistanceMin: scrolldTop,
		    scrolldMobileSpeed: speed9,
		    scrolldMobileEasing: 'easeOutElastic',
		    scrolldMobileFixed: true,
		    scrolldMobileNavBar: fixedNavBar
		},
			settings = $.extend({}, defaults, options);
        this.each(function () {
            if ($(this).attr('id') != '') {
                var $this = $(this);
                // Multiple IF's For Easy Customization         
                if (settings.scrolldDistance) {
                    scrolldDistance = settings.scrolldDistance;
                }
                if (settings.scrolldDistanceMin) {
                    scrolldDistanceMin = settings.scrolldDistanceMin;
                }
                if (settings.scrolldSpeed) {
                    scrolldSpeed = settings.scrolldSpeed;
                }
                if (settings.scrolldEasing) {
                    scrolldEasing = settings.scrolldEasing;
                }
                if (settings.scrolldFixed) {
                    scrolldFixed = settings.scrolldFixed;
                }
                if (settings.scrolldNavBar) {
                    scrolldNavBar = settings.scrolldNavBar;
                }
                if (settings.scrolldMobileNavBar) {
                    scrolldMobileNavBar = settings.scrolldMobileNavBar;
                }
                if (settings.scrolldMobile) {
                    scrolldMobile = settings.scrolldMobile;
                }
                if (settings.scrolldMobileWidth) {
                    scrolldMobileWidth = settings.scrolldMobileWidth;
                }
                if (settings.scrolldMobileDistance) {
                    scrolldMobileDistance = settings.scrolldMobileDistance;
                }
                if (settings.scrolldMobileDistanceMin) {
                    scrolldMobileDistanceMin = settings.scrolldMobileDistanceMin;
                }
                if (settings.scrolldMobileSpeed) {
                    scrolldMobileSpeed = settings.scrolldMobileSpeed;
                }
                if (settings.scrolldMobileEasing) {
                    scrolldMobileEasing = settings.scrolldMobileEasing;
                }
                if (settings.scrolldMobileFixed) {
                    scrolldMobileFixed = settings.scrolldMobileFixed;
                }
                // Trigger Default Override W/ Individual Element In Line Class Easing Settings
                if ($this.hasClass('linear')) {
                    scrolldEasing = 'linear';
                }
                if ($this.hasClass('linearMobile')) {
                    scrolldMobileEasing = 'linear';
                }
                if ($this.hasClass('swing')) {
                    scrolldEasing = 'swing';
                }
                if ($this.hasClass('swingMobile')) {
                    scrolldMobileEasing = 'swing';
                }
                if ($this.hasClass('jswing')) {
                    scrolldEasing = 'jswing';
                }
                if ($this.hasClass('jswingMobile')) {
                    scrolldMobileEasing = 'jswing';
                }
                if ($this.hasClass('easeInQuad')) {
                    scrolldEasing = 'easeInQuad';
                }
                if ($this.hasClass('easeInQuadMobile')) {
                    scrolldMobileEasing = 'easeInQuad';
                }
                if ($this.hasClass('easeOutQuad')) {
                    scrolldEasing = 'easeOutQuad';
                }
                if ($this.hasClass('easeOutQuadMobile')) {
                    scrolldMobileEasing = 'easeOutQuad';
                }
                if ($this.hasClass('easeInOutQuad')) {
                    scrolldEasing = 'easeInOutQuad';
                }
                if ($this.hasClass('easeInOutQuadMobile')) {
                    scrolldMobileEasing = 'easeInOutQuad';
                }
                if ($this.hasClass('easeInCubic')) {
                    scrolldEasing = 'easeInCubic';
                }
                if ($this.hasClass('easeInCubicMobile')) {
                    scrolldMobileEasing = 'easeInCubic';
                }
                if ($this.hasClass('easeOutCubic')) {
                    scrolldEasing = 'easeOutCubic';
                }
                if ($this.hasClass('easeOutCubicMobile')) {
                    scrolldMobileEasing = 'easeOutCubic';
                }
                if ($this.hasClass('easeInOutCubic')) {
                    scrolldEasing = 'easeInOutCubic';
                }
                if ($this.hasClass('easeInOutCubicMobile')) {
                    scrolldMobileEasing = 'easeInOutCubic';
                }
                if ($this.hasClass('easeInQuart')) {
                    scrolldEasing = 'easeInQuart';
                }
                if ($this.hasClass('easeInQuartMobile')) {
                    scrolldMobileEasing = 'easeInQuart';
                }
                if ($this.hasClass('easeOutQuart')) {
                    scrolldEasing = 'easeOutQuart';
                }
                if ($this.hasClass('easeOutQuartMobile')) {
                    scrolldMobileEasing = 'easeOutQuart';
                }
                if ($this.hasClass('easeInOutQuart')) {
                    scrolldEasing = 'easeInOutQuart';
                }
                if ($this.hasClass('easeInOutQuartMobile')) {
                    scrolldMobileEasing = 'easeInOutQuart';
                }
                if ($this.hasClass('easeInQuint')) {
                    scrolldEasing = 'easeInQuint';
                }
                if ($this.hasClass('easeInQuintMobile')) {
                    scrolldMobileEasing = 'easeInQuint';
                }
                if ($this.hasClass('easeOutQuint')) {
                    scrolldEasing = 'easeOutQuint';
                }
                if ($this.hasClass('easeOutQuintMobile')) {
                    scrolldMobileEasing = 'easeOutQuint';
                }
                if ($this.hasClass('easeInOutQuint')) {
                    scrolldEasing = 'easeInOutQuint';
                }
                if ($this.hasClass('easeInOutQuintMobile')) {
                    scrolldMobileEasing = 'easeInOutQuint';
                }
                if ($this.hasClass('easeInSine')) {
                    scrolldEasing = 'easeInSine';
                }
                if ($this.hasClass('easeInSineMobile')) {
                    scrolldMobileEasing = 'easeInSine';
                }
                if ($this.hasClass('easeOutSine')) {
                    scrolldEasing = 'easeOutSine';
                }
                if ($this.hasClass('easeOutSineMobile')) {
                    scrolldMobileEasing = 'easeOutSine';
                }
                if ($this.hasClass('easeInOutSine')) {
                    scrolldEasing = 'easeInOutSine';
                }
                if ($this.hasClass('easeInOutSineMobile')) {
                    scrolldMobileEasing = 'easeInOutSine';
                }
                if ($this.hasClass('easeInExpo')) {
                    scrolldEasing = 'easeInExpo';
                }
                if ($this.hasClass('easeInExpoMobile')) {
                    scrolldMobileEasing = 'easeInExpo';
                }
                if ($this.hasClass('easeOutExpo')) {
                    scrolldEasing = 'easeOutExpo';
                }
                if ($this.hasClass('easeOutExpoMobile')) {
                    scrolldMobileEasing = 'easeOutExpo';
                }
                if ($this.hasClass('easeInOutExpo')) {
                    scrolldEasing = 'easeInOutExpo';
                }
                if ($this.hasClass('easeInOutExpoMobile')) {
                    scrolldMobileEasing = 'easeInOutExpo';
                }
                if ($this.hasClass('easeInCirc')) {
                    scrolldEasing = 'easeInCirc';
                }
                if ($this.hasClass('easeInCircMobile')) {
                    scrolldMobileEasing = 'easeInCirc';
                }
                if ($this.hasClass('easeOutCirc')) {
                    scrolldEasing = 'easeOutCirc';
                }
                if ($this.hasClass('easeOutCircMobile')) {
                    scrolldMobileEasing = 'easeOutCirc';
                }
                if ($this.hasClass('easeInOutCirc')) {
                    scrolldEasing = 'easeInOutCirc';
                }
                if ($this.hasClass('easeInOutCircMobile')) {
                    scrolldMobileEasing = 'easeInOutCirc';
                }
                if ($this.hasClass('easeInElastic')) {
                    scrolldEasing = 'easeInElastic';
                }
                if ($this.hasClass('easeInElasticMobile')) {
                    scrolldMobileEasing = 'easeInElastic';
                }
                if ($this.hasClass('easeOutElastic')) {
                    scrolldEasing = 'easeOutElastic';
                }
                if ($this.hasClass('easeOutElasticMobile')) {
                    scrolldMobileEasing = 'easeOutElastic';
                }
                if ($this.hasClass('easeInOutElastic')) {
                    scrolldEasing = 'easeInOutElastic';
                }
                if ($this.hasClass('easeInOutElasticMobile')) {
                    scrolldMobileEasing = 'easeInOutElastic';
                }
                if ($this.hasClass('easeInBack')) {
                    scrolldEasing = 'easeInBack';
                }
                if ($this.hasClass('easeInBackMobile')) {
                    scrolldMobileEasing = 'easeInBack';
                }
                if ($this.hasClass('easeOutBack')) {
                    scrolldEasing = 'easeOutBack';
                }
                if ($this.hasClass('easeOutBackMobile')) {
                    scrolldMobileEasing = 'easeOutBack';
                }
                if ($this.hasClass('easeInOutBack')) {
                    scrolldEasing = 'easeInOutBack';
                }
                if ($this.hasClass('easeInOutBackMobile')) {
                    scrolldMobileEasing = 'easeInOutBack';
                }
                if ($this.hasClass('easeInBounce')) {
                    scrolldEasing = 'easeInBounce';
                }
                if ($this.hasClass('easeInBounceMobile')) {
                    scrolldMobileEasing = 'easeInBounce';
                }
                if ($this.hasClass('easeOutBounce')) {
                    scrolldEasing = 'easeOutBounce';
                }
                if ($this.hasClass('easeOutBounceMobile')) {
                    scrolldMobileEasing = 'easeOutBounce';
                }
                if ($this.hasClass('easeInOutBounce')) {
                    scrolldEasing = 'easeInOutBounce';
                }
                if ($this.hasClass('easeInOutBounceMobile')) {
                    scrolldMobileEasing = 'easeInOutBounce';
                }
                if ($this.hasClass('scrolldEasing1')) {
                    scrolldEasing = 'scrolldEasing1';
                }
                if ($this.hasClass('scrolldEasing1Mobile')) {
                    scrolldMobileEasing = 'scrolldEasing1';
                }
                if ($this.hasClass('scrolldEasing2')) {
                    scrolldEasing = 'scrolldEasing2';
                }
                if ($this.hasClass('scrolldEasing2Mobile')) {
                    scrolldMobileEasing = 'scrolldEasing2';
                }
                if ($this.hasClass('scrolldEasing3')) {
                    scrolldEasing = 'scrolldEasing3';
                }
                if ($this.hasClass('scrolldEasing3Mobile')) {
                    scrolldMobileEasing = 'scrolldEasing3';
                }
                /// Dynamic Scrolling / Set Animation
                // Mobile Only
                if (x < scrolldMobileWidth) {
                    if (scrolldMobile === true && scrolldMobileFixed === false) {
                        if (h <= idScrollDivElementHeight) {
                            htmlBody.stop(true).animate({
                                scrollTop: scrolldMobileDistanceMin
                            },
								scrolldMobileSpeed,
								scrolldMobileEasing)
                        } else {
                            htmlBody.stop(true).animate({
                                scrollTop: scrolldMobileDistance
                            },
								scrolldMobileSpeed,
								scrolldMobileEasing)
                        }
                    } else if (scrolldMobile === true && scrolldMobileFixed === true) {
                        if (h <= (idScrollDivElementHeight + (scrolldMobileFixed * 2)) && scrolldMobileDistanceMin === scrolldTop) {
                            htmlBody.stop(true).animate({
                                scrollTop: scrolldTopFixed
                            },
								scrolldMobileSpeed,
								scrolldMobileEasing)
                        } else if (h <= (idScrollDivElementHeight + (scrolldMobileFixed * 2)) && scrolldMobileDistanceMin === scrolldPre) {
                            htmlBody.stop(true).animate({
                                scrollTop: scrolldPreFixed
                            },
								scrolldMobileSpeed,
								scrolldMobileEasing)
                        } else if (h <= (idScrollDivElementHeight + (scrolldMobileFixed * 2)) && scrolldMobileDistanceMin === scrolldCenter) {
                            htmlBody.stop(true).animate({
                                scrollTop: scrolldCenter
                            },
								scrolldMobileSpeed,
								scrolldMobileEasing)
                        } else if (h > (idScrollDivElementHeight + (scrolldMobileFixed * 2)) && scrolldMobileDistance === scrolldTop) {
                            htmlBody.stop(true).animate({
                                scrollTop: scrolldTopFixed
                            },
								scrolldMobileSpeed,
								scrolldMobileEasing)
                        } else if (h > (idScrollDivElementHeight + (scrolldMobileFixed * 2)) && scrolldMobileDistance === scrolldPre) {
                            htmlBody.stop(true).animate({
                                scrollTop: scrolldPreFixed
                            },
								scrolldMobileSpeed,
								scrolldMobileEasing)
                        } else if (h > (idScrollDivElementHeight + (scrolldMobileFixed * 2)) && scrolldMobileDistance === scrolldCenter) {
                            htmlBody.stop(true).animate({
                                scrollTop: scrolldCenter
                            },
								scrolldMobileSpeed,
								scrolldMobileEasing)
                        } else {
                            htmlBody.stop(true).animate({
                                scrollTop: scrolldMobileDistance
                            },
								scrolldMobileSpeed,
								scrolldMobileEasing)
                        }
                    }
                }
                // Web Only
                if (x >= scrolldMobileWidth) {
                    if (scrolldFixed === false) {
                        if (h <= idScrollDivElementHeight) {
                            htmlBody.stop(true).animate({
                                scrollTop: scrolldDistanceMin
                            },
								scrolldSpeed,
								scrolldEasing)
                        } else {
                            htmlBody.stop(true).animate({
                                scrollTop: scrolldDistance
                            },
								scrolldMobileSpeed,
								scrolldMobileEasing)
                        }
                    } else if (scrolldFixed === true) {
                        if (h <= (idScrollDivElementHeight + scrolldFixed) && scrolldDistanceMin === scrolldTop) {
                            htmlBody.stop(true).animate({
                                scrollTop: scrolldTopFixed
                            },
								scrolldSpeed,
								scrolldEasing)
                        } else if (h <= (idScrollDivElementHeight + scrolldFixed) && scrolldDistanceMin === scrolldPre) {
                            htmlBody.stop(true).animate({
                                scrollTop: scrolldPreFixed
                            },
								scrolldSpeed,
								scrolldEasing)
                        } else if (h <= (idScrollDivElementHeight + scrolldFixed * 2) && scrolldDistanceMin === scrolldCenter) {
                            htmlBody.stop(true).animate({
                                scrollTop: scrolldCenter
                            },
								scrolldSpeed,
								scrolldEasing)
                        } else if (h > (idScrollDivElementHeight + scrolldFixed) && scrolldDistance === scrolldTop) {
                            htmlBody.stop(true).animate({
                                scrollTop: scrolldTopFixed
                            },
								scrolldSpeed,
								scrolldEasing)
                        } else if (h > (idScrollDivElementHeight + scrolldFixed) && scrolldDistance === scrolldPre) {
                            htmlBody.stop(true).animate({
                                scrollTop: scrolldPreFixed
                            },
								scrolldSpeed,
								scrolldEasing)
                        } else if (h > (idScrollDivElementHeight + scrolldFixed * 2) && scrolldDistance === scrolldCenter) {
                            htmlBody.stop(true).animate({
                                scrollTop: scrolldCenter
                            },
								scrolldSpeed,
								scrolldEasing)
                        } else {
                            htmlBody.stop(true).animate({
                                scrollTop: scrolldDistance
                            },
								scrolldSpeed,
								scrolldEasing)
                        }
                    }
                }
            }
        });
        return this;
    }
})(jQuery);