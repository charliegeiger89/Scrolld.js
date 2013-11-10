(function ($) {
    $.fn.scrolld = function (options) {
        var scrolldCustom = 0; // Set 'scrolldCustom' value here | Additional distance (+-) on scrolldTop & scrolldPre  
        var scrolldNavBar = ''; // Set id name of fixed web navbar
        var scrolldMobileNavBar = ''; // Set id name of fixed mobile navbar

        // DO NOT TOUCH // MOVE DOWN TO DEFAULTS //
        // Set Scrolld Heavily Used Variables //
        var $win = $(window);
        var doc = document;
        var y = $win.scrollTop();
        var h = $win.height();
        var x = $win.width();
        var htmlBody = $('html, body');
        classList = [];
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
        // Store easing methods
        jQuery.easing['jswing'] = jQuery.easing['swing'];
        jQuery.extend(jQuery.easing, {
            def: 'easeOutQuad',
            swing: function (x, t, b, c, d) {
                //alert(jQuery.easing.default);
                return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
            },
            easeInQuad: function (x, t, b, c, d) {
                return c * (t /= d) * t + b;
            },
            easeOutQuad: function (x, t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b;
            },
            easeInOutQuad: function (x, t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t + b;
                return -c / 2 * ((--t) * (t - 2) - 1) + b;
            },
            easeInCubic: function (x, t, b, c, d) {
                return c * (t /= d) * t * t + b;
            },
            easeOutCubic: function (x, t, b, c, d) {
                return c * ((t = t / d - 1) * t * t + 1) + b;
            },
            easeInOutCubic: function (x, t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t + 2) + b;
            },
            easeInQuart: function (x, t, b, c, d) {
                return c * (t /= d) * t * t * t + b;
            },
            easeOutQuart: function (x, t, b, c, d) {
                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
            },
            easeInOutQuart: function (x, t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
                return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
            },
            easeInQuint: function (x, t, b, c, d) {
                return c * (t /= d) * t * t * t * t + b;
            },
            easeOutQuint: function (x, t, b, c, d) {
                return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
            },
            easeInOutQuint: function (x, t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
            },
            easeInSine: function (x, t, b, c, d) {
                return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
            },
            easeOutSine: function (x, t, b, c, d) {
                return c * Math.sin(t / d * (Math.PI / 2)) + b;
            },
            easeInOutSine: function (x, t, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
            },
            easeInExpo: function (x, t, b, c, d) {
                return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
            },
            easeOutExpo: function (x, t, b, c, d) {
                return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
            },
            easeInOutExpo: function (x, t, b, c, d) {
                if (t == 0) return b;
                if (t == d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            },
            easeInCirc: function (x, t, b, c, d) {
                return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
            },
            easeOutCirc: function (x, t, b, c, d) {
                return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
            },
            easeInOutCirc: function (x, t, b, c, d) {
                if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
            },
            easeInElastic: function (x, t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t == 0) return b;
                if ((t /= d) == 1) return b + c;
                if (!p) p = d * .3;
                if (a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                } else var s = p / (2 * Math.PI) * Math.asin(c / a);
                return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            },
            easeOutElastic: function (x, t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t == 0) return b;
                if ((t /= d) == 1) return b + c;
                if (!p) p = d * .3;
                if (a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                } else var s = p / (2 * Math.PI) * Math.asin(c / a);
                return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
            },
            easeInOutElastic: function (x, t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t == 0) return b;
                if ((t /= d / 2) == 2) return b + c;
                if (!p) p = d * (.3 * 1.5);
                if (a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                } else var s = p / (2 * Math.PI) * Math.asin(c / a);
                if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
            },
            easeInBack: function (x, t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c * (t /= d) * t * ((s + 1) * t - s) + b;
            },
            easeOutBack: function (x, t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            },
            easeInOutBack: function (x, t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
            },
            easeInBounce: function (x, t, b, c, d) {
                return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
            },
            easeOutBounce: function (x, t, b, c, d) {
                if ((t /= d) < (1 / 2.75)) {
                    return c * (7.5625 * t * t) + b;
                } else if (t < (2 / 2.75)) {
                    return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                } else if (t < (2.5 / 2.75)) {
                    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                } else {
                    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                }
            },
            easeInOutBounce: function (x, t, b, c, d) {
                if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
                return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }, // Custom Easing Function | Slow & Smooth
            scrolldEasing1: function (x, t, b, c, d) {
                var ts = (t /= d) * t;
                var tc = ts * t;
                return b + c * (-3.6 * tc * ts + 4.3 * ts * ts + 0.2 * tc + 0.1 * ts);
            }, // Custom Easing Function | Elastic
            scrolldEasing2: function (x, t, b, c, d) {
                var ts = (t /= d) * t;
                var tc = ts * t;
                return b + c * (18.9925 * tc * ts + -45.23 * ts * ts + 40.28 * tc + -19.89 * ts + 6.8475 * t);
            }, // Custom Easing Function | Bouncy
            scrolldEasing3: function (x, t, b, c, d) {
                if ((t /= d) < (1.25 / 3)) {
                    return c * (9.5625 * t * t) + b;
                } else if (t < (2.25 / 3)) {
                    return c * (8.5625 * (t -= (1.5 / 2.75)) * t + .85) + b;
                } else if (t < (2.75 / 3)) {
                    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                } else {
                    return c * (5.5625 * (t -= (2.625 / 2.75)) * t + 1) + b;
                }
            }
        });
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
        var scrolldSpeed = speed15;
        var scrolldEasing = 'scrolldEasing1';
        var scrolldFixed = true;
        var scrolldMobile = true;
        var scrolldMobileWidth = 979;
        var scrolldMobileDistance = scrolldTop;
        var scrolldMobileDistanceMin = scrolldTop;
        var scrolldMobileSpeed = speed15;
        var scrolldMobileEasing = 'scrolldEasing1';
        var scrolldMobileFixed = true;

        // SET CUSTOM SETTINGS HERE //
        var
        defaults = {
            /// Set Web Settings
            scrolldDistance: scrolldPre,
            scrolldDistanceMin: scrolldPre,
            scrolldSpeed: speed11,
            scrolldEasing: 'scrolldEasing1',
            scrolldFixed: 'true',
            /// Set Mobile Settings
            scrolldMobile: 'true',
            scrolldMobileWidth: 979,
            scrolldMobileDistance: scrolldPre,
            scrolldMobileDistanceMin: scrolldPre,
            scrolldMobileSpeed: speed11,
            scrolldMobileEasing: 'scrolldEasing1',
            scrolldMobileFixed: 'true'
        },
            // DO NOT TOUCH // NO OTHER INPUTS NEEDED //
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
                if (settings.scrolldFixed === 'false') {
                    scrolldFixed = false;
                }
                if (settings.scrolldMobile === 'false') {
                    scrolldMobile = false;
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
                if (settings.scrolldMobileFixed === 'false') {
                    scrolldMobileFixed = false;
                }
                // Trigger Default Override W/ Individual Element In Line Class Easing Settings


                if (this.className != '') {

                    var classes = (this.className || '').split(/\s+/);
                    $.each(classes, function (i, a) {
                        if ($.inArray(a, classList) == -1) {
                            classList.push(a);
                        }
                    });
                    //  @Zauberfisch fix for class switch
                    easings = {
                        linear: 'linear',
                        swing: 'swing',
                        jswing: 'jswing',
                        easeInQuad: 'easeInQuad',
                        easeOutQuad: 'easeOutQuad',
                        easeInOutQuad: 'easeInOutQuad',
                        easeInCubic: 'easeInCubic',
                        easeOutCubic: 'easeOutCubic',
                        easeInOutCubic: 'easeInOutCubic',
                        easeInQuart: 'easeInQuart',
                        easeOutQuart: 'easeOutQuart',
                        easeInOutQuart: 'easeInOutQuart',
                        easeInQuint: 'easeInQuint',
                        easeOutQuint: 'easeOutQuint',
                        easeInOutQuint: 'easeInOutQuint',
                        easeInSine: 'easeInSine',
                        easeOutSine: 'easeOutSine',
                        easeInOutSine: 'easeInOutSine',
                        easeInExpo: 'easeInExpo',
                        easeOutExpo: 'easeOutExpo',
                        easeInOutExpo: 'easeInOutExpo',
                        easeInCirc: 'easeInCirc',
                        easeOutCirc: 'easeOutCirc',
                        easeInOutCirc: 'easeInOutCirc',
                        easeInElastic: 'easeInElastic',
                        easeOutElastic: 'easeOutElastic',
                        easeInOutElastic: 'easeInOutElastic',
                        easeInBack: 'easeInBack',
                        easeOutBack: 'easeOutBack',
                        easeInOutBack: 'easeInOutBack',
                        easeInBounce: 'easeInBounce',
                        easeOutBounce: 'easeOutBounce',
                        easeInOutBounce: 'easeInOutBounce',
                        scrolldEasing1: 'scrolldEasing1',
                        scrolldEasing2: 'scrolldEasing2',
                        scrolldEasing3: 'scrolldEasing3'
                    },
                    mobileEasings = {
                        linearMobile: 'linear',
                        swingMobile: 'swing',
                        jswingMobile: 'jswing',
                        easeInQuadMobile: 'easeInQuad',
                        easeOutQuadMobile: 'easeOutQuad',
                        easeInOutQuadMobile: 'easeInOutQuad',
                        easeInCubicMobile: 'easeInCubic',
                        easeOutCubicMobile: 'easeOutCubic',
                        easeInOutCubicMobile: 'easeInOutCubic',
                        easeInQuartMobile: 'easeInQuart',
                        easeOutQuartMobile: 'easeOutQuart',
                        easeInOutQuartMobile: 'easeInOutQuart',
                        easeInQuintMobile: 'easeInQuint',
                        easeOutQuintMobile: 'easeOutQuint',
                        easeInOutQuintMobile: 'easeInOutQuint',
                        easeInSineMobile: 'easeInSine',
                        easeOutSineMobile: 'easeOutSine',
                        easeInOutSineMobile: 'easeInOutSine',
                        easeInExpoMobile: 'easeInExpo',
                        easeOutExpoMobile: 'easeOutExpo',
                        easeInOutExpoMobile: 'easeInOutExpo',
                        easeInCircMobile: 'easeInCirc',
                        easeOutCircMobile: 'easeOutCirc',
                        easeInOutCircMobile: 'easeInOutCirc',
                        easeInElasticMobile: 'easeInElastic',
                        easeOutElasticMobile: 'easeOutElastic',
                        easeInOutElasticMobile: 'easeInOutElastic',
                        easeInBackMobile: 'easeInBack',
                        easeOutBackMobile: 'easeOutBack',
                        easeInOutBackMobile: 'easeInOutBack',
                        easeInBounceMobile: 'easeInBounce',
                        easeOutBounceMobile: 'easeOutBounce',
                        easeInOutBounceMobile: 'easeInOutBounce',
                        scrolldEasing1Mobile: 'scrolldEasing1',
                        scrolldEasing2Mobile: 'scrolldEasing2',
                        scrolldEasing3Mobile: 'scrolldEasing3'
                    };
                    for (var i = 0; i < classList.length; i++) {
                        var cssClass = classList[i];
                        if (easings[cssClass]) {
                            scrolldEasing = easings[cssClass];
                            break;
                        }
                    }
                    for (var i = 0; i < classList.length; i++) {
                        var cssClass = classList[i];
                        if (mobileEasings[cssClass]) {
                            scrolldMobileEasing = mobileEasings[cssClass];
                            break;
                        }
                    }
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
                    } else if (scrolldMobile === false) {
                        scrolldMobileWidth = 1;
                    }
                }
                // Web Only
                else if (x >= scrolldMobileWidth) {
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
        // Trigger function on animation end
        $(":animated").promise().done(function () {
            // Write function here
        });
        return this;
    }
})(jQuery);
