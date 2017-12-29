import React, {Component} from 'react';
import $ from 'jquery';
import Form from '../components/Form';
import SVGInline from "react-svg-inline";

export const showModal = () => $("#feedback").modal("show");

export default class Modal extends Component {
    componentDidMount(){
        this.intModal();
    }
    intModal = () =>{
        const Modal = function (element, options) {
            this.options             = options;
            this.$body               = $(document.body);
            this.$element            = $(element);
            this.$dialog             = this.$element.find('.modal-dialog');
            this.$backdrop           = null;
            this.isShown             = null;
            this.originalBodyPad     = null;
            this.scrollbarWidth      = 0;
            this.ignoreBackdropClick = false;
            if (this.options.remote) {
                this.$element
                    .find('.modal-content')
                    .load(this.options.remote, $.proxy(function () {
                        this.$element.trigger('loaded.bs.modal')
                    }, this))
            }
        };
        Modal.VERSION  = '3.3.7';
        Modal.TRANSITION_DURATION = 300;
        Modal.BACKDROP_TRANSITION_DURATION = 150;
        Modal.DEFAULTS = {
            backdrop: true,
            keyboard: true,
            show: true
        };
        Modal.prototype.toggle = function (_relatedTarget) {
            return this.isShown ? this.hide() : this.show(_relatedTarget)
        };
        Modal.prototype.show = function (_relatedTarget) {
            var that = this;
            var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

            this.$element.trigger(e);

            if (this.isShown || e.isDefaultPrevented()) return;

            this.isShown = true;

            this.checkScrollbar();
            this.setScrollbar();
            this.$body.addClass('modal-open');

            this.escape();
            this.resize();

            this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));

            this.$dialog.on('mousedown.dismiss.bs.modal', function () {
                that.$element.one('mouseup.dismiss.bs.modal', function (e) {
                    if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
                })
            });

            this.backdrop(function () {
                var transition = $.support.transition && that.$element.hasClass('fade');

                if (!that.$element.parent().length) {
                    that.$element.appendTo(that.$body) // don't move modals dom position
                }

                that.$element
                    .show()
                    .scrollTop(0);

                that.adjustDialog();

                if (transition) {
                    that.$element[0].offsetWidth // force reflow
                }

                that.$element.addClass('in');

                that.enforceFocus();

                var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget });

                transition ?
                    that.$dialog // wait for modal to slide in
                        .one('bsTransitionEnd', function () {
                            that.$element.trigger('focus').trigger(e)
                        })
                        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
                    that.$element.trigger('focus').trigger(e)
            })
        };
        Modal.prototype.hide = function (e) {
            if (e) e.preventDefault()

            e = $.Event('hide.bs.modal')

            this.$element.trigger(e)

            if (!this.isShown || e.isDefaultPrevented()) return

            this.isShown = false

            this.escape()
            this.resize()

            $(document).off('focusin.bs.modal')

            this.$element
                .removeClass('in')
                .off('click.dismiss.bs.modal')
                .off('mouseup.dismiss.bs.modal')

            this.$dialog.off('mousedown.dismiss.bs.modal')

            $.support.transition && this.$element.hasClass('fade') ?
                this.$element
                    .one('bsTransitionEnd', $.proxy(this.hideModal, this))
                    .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
                this.hideModal()
        };
        Modal.prototype.enforceFocus = function () {
            $(document)
                .off('focusin.bs.modal') // guard against infinite focus loop
                .on('focusin.bs.modal', $.proxy(function (e) {
                    if (document !== e.target &&
                        this.$element[0] !== e.target &&
                        !this.$element.has(e.target).length) {
                        this.$element.trigger('focus')
                    }
                }, this))
        };
        Modal.prototype.escape = function () {
            if (this.isShown && this.options.keyboard) {
                this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
                    e.which === 27 && this.hide()
                }, this))
            } else if (!this.isShown) {
                this.$element.off('keydown.dismiss.bs.modal')
            }
        };
        Modal.prototype.resize = function () {
            if (this.isShown) {
                $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
            } else {
                $(window).off('resize.bs.modal')
            }
        };
        Modal.prototype.hideModal = function () {
            var that = this
            this.$element.hide()
            this.backdrop(function () {
                that.$body.removeClass('modal-open')
                that.resetAdjustments()
                that.resetScrollbar()
                that.$element.trigger('hidden.bs.modal')
            })
        };
        Modal.prototype.removeBackdrop = function () {
            this.$backdrop && this.$backdrop.remove()
            this.$backdrop = null
        };
        Modal.prototype.backdrop = function (callback) {
            var that = this
            var animate = this.$element.hasClass('fade') ? 'fade' : ''

            if (this.isShown && this.options.backdrop) {
                var doAnimate = $.support.transition && animate

                this.$backdrop = $(document.createElement('div'))
                    .addClass('modal-backdrop ' + animate)
                    .appendTo(this.$body)

                this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
                    if (this.ignoreBackdropClick) {
                        this.ignoreBackdropClick = false
                        return
                    }
                    if (e.target !== e.currentTarget) return
                    this.options.backdrop === 'static'
                        ? this.$element[0].focus()
                        : this.hide()
                }, this))

                if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

                this.$backdrop.addClass('in')

                if (!callback) return

                doAnimate ?
                    this.$backdrop
                        .one('bsTransitionEnd', callback)
                        .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
                    callback()

            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass('in')

                var callbackRemove = function () {
                    that.removeBackdrop()
                    callback && callback()
                }
                $.support.transition && this.$element.hasClass('fade') ?
                    this.$backdrop
                        .one('bsTransitionEnd', callbackRemove)
                        .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
                    callbackRemove()

            } else if (callback) {
                callback()
            }
        };
        Modal.prototype.handleUpdate = function () {
            this.adjustDialog()
        };
        Modal.prototype.adjustDialog = function () {
            var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight
            this.$element.css({
                paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
                paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
            })
        };
        Modal.prototype.resetAdjustments = function () {
            this.$element.css({
                paddingLeft: '',
                paddingRight: ''
            })
        };
        Modal.prototype.checkScrollbar = function () {
            var fullWindowWidth = window.innerWidth
            if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
                var documentElementRect = document.documentElement.getBoundingClientRect()
                fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
            this.scrollbarWidth = this.measureScrollbar()
        };
        Modal.prototype.setScrollbar = function () {
            var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
            this.originalBodyPad = document.body.style.paddingRight || ''
            if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
        };
        Modal.prototype.resetScrollbar = function () {
            this.$body.css('padding-right', this.originalBodyPad)
        };
        Modal.prototype.measureScrollbar = function () { // thx walsh
            var scrollDiv = document.createElement('div')
            scrollDiv.className = 'modal-scrollbar-measure'
            this.$body.append(scrollDiv)
            var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
            this.$body[0].removeChild(scrollDiv)
            return scrollbarWidth
        };
        function Plugin(option, _relatedTarget) {
            return this.each(function () {
                var $this   = $(this)
                var data    = $this.data('bs.modal')
                var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option === 'object' && option)

                if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
                if (typeof option === 'string') data[option](_relatedTarget)
                else if (options.show) data.show(_relatedTarget)
            })
        }
        var old = $.fn.modal;
        $.fn.modal             = Plugin;
        $.fn.modal.Constructor = Modal;
        // MODAL NO CONFLICT
        // =================
        $.fn.modal.noConflict = function () {
            $.fn.modal = old;
            return this
        };
        // MODAL DATA-API
        // ==============
        $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
            var $this   = $(this)
            var href    = $this.attr('href')
            var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
            var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

            if ($this.is('a')) e.preventDefault()

            $target.one('show.bs.modal', function (showEvent) {
                if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
                $target.one('hidden.bs.modal', function () {
                    $this.is(':visible') && $this.trigger('focus')
                })
            })
            Plugin.call($target, option, this)
        })
    };
    render() {
        return (
            <div id="feedback" className="modal fade feedback-modal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="head-modal">
                            <div className="icon-air">
                                <SVGInline svg={"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
                                "\t viewBox=\"0 0 334.5 334.5\" style=\"enable-background:new 0 0 334.5 334.5;\" xml:space=\"preserve\">\n" +
                                "\t<path d=\"M332.797,13.699c-1.489-1.306-3.608-1.609-5.404-0.776L2.893,163.695c-1.747,0.812-2.872,2.555-2.893,4.481\n" +
                                "\ts1.067,3.693,2.797,4.542l91.833,45.068c1.684,0.827,3.692,0.64,5.196-0.484l89.287-66.734l-70.094,72.1\n" +
                                "\tc-1,1.029-1.51,2.438-1.4,3.868l6.979,90.889c0.155,2.014,1.505,3.736,3.424,4.367c0.513,0.168,1.04,0.25,1.561,0.25\n" +
                                "\tc1.429,0,2.819-0.613,3.786-1.733l48.742-56.482l60.255,28.79c1.308,0.625,2.822,0.651,4.151,0.073\n" +
                                "\tc1.329-0.579,2.341-1.705,2.775-3.087L334.27,18.956C334.864,17.066,334.285,15.005,332.797,13.699z\"/>\n" +
                                "</svg>\n"} />
                            </div>
                            <h4 className="title-modal">for ShadeDesigGroup</h4>
                            <a role="button" rel="noopener noreferrer" data-dismiss="modal" className="close-modal">
                                <SVGInline svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 371.23 371.23\"  xml:space=\"preserve\">\n" +
                                "<polygon points=\"371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23   185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615\"/>\n" +
                                "</svg>\n"}/>
                            </a>
                        </div>
                        <div className="modal-body">
                           <Form/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}