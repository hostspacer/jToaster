/**!
 * jQuery Toaster v.0.0.1 
 * Simple Lightweight Toast Plugin
 * Author: Shivasis Biswal
 * Copyright: Host Spacer
 * https://hostspacer.com
 * MIT License
 * Keep credits to use it free
 * */

let svgicon = {
	
	normal: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="svg-icon sb-exclamation-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>',
	
	error: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="svg-icon sb-exclamation-diamond" viewBox="0 0 16 16"><path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>',
	
	success: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="svg-icon sb-check-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/></svg>',
	
	warning: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="svg-icon sb-exclamation-triangle" viewBox="0 0 16 16"><path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/><path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/></svg>',
	
	info: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="svg-icon sb-info-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>',
	
	close: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="svg-icon sb-close" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>'
	
};

if (typeof Object.create !== 'function') {
    Object.create = function(obj) {
        function B() {}
        B.prototype = obj;
        return new B();
    };
}

;
(function($, window, document, undefined) {

    "use strict";

    // Create the defaults once
    var pluginName = "Toaster",
        no = 0,
        opts = {},
        defaults = {
            title: null,
            content: null,
            theme: 'dark',
            color: "#222",
            textColor: "#fff",
            position: "right-top",
            type: "normal",
            autoClose: true,
            autoCloseDelay: 3000,
            clickClose: false,
            icon: false,
            close: true,
            html: false,
            onClick: null,
            onClose: null
        };

    // Avoid Plugin.prototype conflicts
    pluginName = {
        init: function(options, element) {
            if (typeof options === 'string') {
                opts.content = options;
            } else {
                opts = options;
            }
            ++no;
            this.no = no;
            this.element = element;
            this.settings = $.extend({}, defaults, opts);
            this._defaults = defaults;
            this.toast(this.settings);
        },

        //core method 
        toast: function(options) {

            let ths = this;

            if ($('#toast-' + this.no).length > 0) {
                ths.close('#toast-' + this.no);
            }

            let id = 'toast-' + this.no, selector = '#' + id;

            let toastTextColor = this._defaults.textColor;
            if (options.textColor !== undefined) {
                toastTextColor = options.textColor;
            }

            let toastColor = this._defaults.color;
            if (options.color !== undefined) {
                toastColor = options.color;
            }

            let toastPosition = this._defaults.position;
            if (options.position !== undefined) {
                toastPosition = options.position;
            }

            let toastType = this._defaults.type;
            if (options.type !== undefined) {
                toastType = options.type;
            }

            let toastTheme = this._defaults.theme;
            if (options.theme !== undefined) {
                toastTheme = options.theme;
            }

            let themes = {
                normal: {
                    color: '#222',
                    textColor: '#fff'
                },
                error: {
                    color: '#f44336',
                    textColor: '#fff'
                },
                success: {
                    color: '#4caf50',
                    textColor: '#fff'
                },
                warning: {
                    color: '#ffeb3b',
                    textColor: '#222'
                },
                info: {
                    color: '#2196f3',
                    textColor: '#fff'
                },
                dark: {
                    color: '#222',
                    textColor: '#fff'
                }
            };

            let i = -1;
            for (let index in themes) {
                i++;
                let theme = Object.keys(themes)[i];
                if (theme === toastTheme) {
                    if (toastColor === undefined || toastColor !== themes[index].color) {
                        toastColor = themes[index].color;
                    } else {
                        toastColor = options.color;
                    }
                    if (toastTextColor === undefined || toastTextColor !== themes[index].textColor) {
                        toastTextColor = themes[index].textColor;
                    } else {
                        toastTextColor = options.textColor;
                    }
                }

            }

            let $toast = $('<div />', {
                    id: id,
                    style: 'color: ' + toastTextColor + '; background-color:' + toastColor,
                    class: 'toaster toaster-' + toastPosition
            });

            $('body').append($toast);

            let wid = 'toast-wrap-' + this.no;
            let $toastwrap = $('<div />', {
                id: wid,
                class: 'toast-wrap'
            });
            $toast.append($toastwrap);

            let bid = 'toast-box-' + this.no;
            let $toastbox = $('<div />', {
                id: bid,
                class: 'toast-box'
            });
            $toastwrap.append($toastbox);
			
			let cid = 'toast-content-' + this.no;
            let $toastcontent = $('<div />', {
                id: cid,
                class: 'toast-content'
            });
			$toastbox.append($toastcontent);

            let box = '#' + bid, cbox = '#' + cid;
            let toastHtml = this._defaults.html;
            if (options.html !== undefined) toastHtml = options.html;

            // title
            let toastTitle = this._defaults.title;
            if (options.title !== undefined) {
                toastTitle = options.title;
            }
            if (toastTitle) {
                let title;
                if (toastHtml !== false) {
                    title = toastTitle;
                } else {
                    title = this.stripHtml(toastTitle);
                }
				let hid = 'toast-title-' + this.no;
                let $heading = $('<div />', {
					id: hid,
                    class: 'toast-title',
                    html: title
                });
                $toastbox.prepend($heading);
                $(selector).addClass('has-header');
            }

            // content	
            let toastText = this._defaults.content;
            if (options.content !== undefined) toastText = options.content;
            let toastMessage = (toastText) ? toastText : options;
            if (toastHtml !== false) {
                $(cbox).html(toastMessage);
            } else {
                $(cbox).text(this.stripHtml(toastMessage));
            }

            // close
			let aid = 'toast-action-' + this.no;
            let $close = $('<div />', {
				id: aid,
                class: 'toast-action',
                html: '<button id="toast-close-btn" class="toast-close-btn">&times;</button>'
            });
            let toastClose = this._defaults.close;
            if (options.close !== undefined) toastClose = options.close;
            if (toastClose !== false) {
                $(selector).addClass('has-close');
                $toastwrap.append($close);
            }

            // icon	
            let toastIcon = this._defaults.icon;
            if (options.icon !== undefined) {
                toastIcon = options.icon;
            }
            if (toastIcon !== false) {

                $(selector).addClass('has-icon');

                let toastIconClass = 'icon-normal';
				let toastIconSvg = svgicon.normal;
                if (toastType === "normal") {
                    toastIconClass = 'icon-normal';
					toastIconSvg = svgicon.normal;
                } else if (toastType === "error") {
                    toastIconClass = 'icon-error';
					toastIconSvg = svgicon.error;
                } else if (toastType === "success") {
                    toastIconClass = 'icon-success';
					toastIconSvg = svgicon.success;
                } else if (toastType === "warning") {
                    toastIconClass = 'icon-warning';
					toastIconSvg = svgicon.warning;
                } else if (toastType === "info") {
                    toastIconClass = 'icon-info';
					toastIconSvg = svgicon.info;
                } else {
                    toastIconClass = 'icon-normal';
					toastIconSvg = svgicon.normal;
                }

                let $icon = $('<div />', {
                    class: 'toast-icon ' + toastIconClass
                });
				$icon.append(toastIconSvg);
                $toastwrap.prepend($icon);
            }

            setTimeout(function() {
				$(selector).addClass('theme-' + toastTheme);
				$(selector).addClass('type-' + toastType);
                $(selector).addClass('toast-active');
            }, 1);
			
			// auto close action
			var autoClose = this._defaults.autoClose;
            if (options.autoClose !== undefined) autoClose = options.autoClose;
            if (autoClose !== false) {
                setTimeout(function() {
                    ths.close(selector);
                }, options.autoCloseDelay || this._defaults.autoCloseDelay);
            }

            // on click close action
			let clickClose = ths._defaults.clickClose;
            if (options.clickClose !== undefined) clickClose = options.clickClose;
			if (clickClose !== false) {
				$(selector).click(function() {
                    ths.close(selector);
                });
			}
			
			// after close action
            let toastOnClose = this._defaults.onClose;
            if (options.onClose !== undefined) toastOnClose = options.onClose;
            if (toastOnClose && typeof toastOnClose === "function") {
				if(autoClose !== false || clickClose !== false) {
					setTimeout(function() {
         				options.onClose();
                	}, options.autoCloseDelay || this._defaults.autoCloseDelay);
				} else {
					$('.toast-close-btn').click(function() {
						ths.close(selector);
						setTimeout(function() {
         					options.onClose();
                		}, 1500);
					});
				}
            }
			
			
			let toastOnClick = ths._defaults.onClick;
            if (options.onClick !== undefined) toastOnClick = options.onClick;
			if (toastOnClick &&  typeof toastOnClick === "function") {
				// on click action
            	$(selector).click(function() {
					ths.close(selector);
					setTimeout(function() {
							options.onClick();
					}, 1500);
            	});
			}

            $(document).on('click', '.toast-close-btn', function() {
                $(selector).removeClass('toast-active').addClass('toast-closed');
            });
        },

        //close toast
        close: function(toast) {
            $(toast).removeClass('toast-active').addClass('toast-closed');
            setTimeout(function() {
                $(toast).remove();
            }, 500);
        },

        stripHtml: function(html) {
            let tmp = document.createElement("DIV");
            tmp.innerHTML = html;
            return tmp.textContent || tmp.innerText || "";
        },

    };

    $.toast = function(options) {
        var toast = Object.create(pluginName);
        toast.init(options, this);
        return {
            // any function
        };
    };

})(jQuery, window, document);