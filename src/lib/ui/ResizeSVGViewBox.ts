/**
 * ResizeSVGViewBox
 * @date 2022-01-07
 * Purpose: resize the SVG viewBox
 */

interface EventFunctionInterface {
    (this: Window, evt: UIEvent): void;
};

/*
    Create an instance of this class and use to observe resizing of the window or SVG element.

    let svgMain: SVGElement = document.querySelector("svg");
    let resizer = new ResizeSVGViewBox();
    resizer.observeSizeUsingEventModel(svgMain, () => {
        // do something after viewBox has been resized
    });
    ...
    // call before unloading page:
    resizer.stopObserving();
*/
export class ResizeSVGViewBox {
    public timeDelay: number = 500;

    private resizeObserver: ResizeObserver | undefined = undefined;
    private svgEl: SVGElement | undefined = undefined;
    private resizeCallback: Function | undefined = undefined;
    private previousViewBox: string = "";
    private listenTimer: any = undefined;
    private listenerEvent: EventFunctionInterface | undefined = undefined;
    private redraw: Function | undefined = undefined;

    // observe resize using ResizeObserver API (does not work reliably in Edge)
    public observeSize(svgEl?: SVGElement, resizeCallback?: Function) {
        if (svgEl && 'ResizeObserver' in window) {
            this.svgEl = svgEl;
            this.resizeCallback = resizeCallback;
            this.resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
                this.adjustViewBox();
            });
            this.resizeObserver.observe(svgEl);
        }
    }

    // observe resize using window.resize event
    public observeSizeUsingEventModel(svgEl?: SVGElement, resizeCallback?: Function) {
        if (svgEl) {
            this.svgEl = svgEl;
            this.resizeCallback = resizeCallback;
            this.adjustViewBox();
            this.listenerEvent = () => {
                this.lazyResizeWatcher();
            }
            window.addEventListener("resize", this.listenerEvent as EventFunctionInterface);
        }
    }

    private lazyResizeWatcher() {
        if (this.listenTimer) {
            clearTimeout(this.listenTimer);
            this.listenTimer = undefined;
        }
        this.redraw = () => {
            this.adjustViewBox();
            this.listenTimer = undefined;
        };
        this.listenTimer = setTimeout(this.redraw, this.timeDelay)
    }

    private adjustViewBox() {
        if (this.svgEl) {
            let w = this.svgEl?.getBoundingClientRect().width,
                h = this.svgEl?.getBoundingClientRect().height;
            let viewBox = this.svgEl.getAttribute("viewBox");
            if (viewBox) {
                viewBox = `0 0 ${w} ${h}`;
                if (viewBox != this.previousViewBox) {
                    this.svgEl.setAttribute("viewBox", viewBox);
                    this.previousViewBox = viewBox;
                    if (this.resizeCallback) this.resizeCallback(this.svgEl, w, h);
                }
            }
        }
    }

    public stopObserving() {
        if (this.resizeObserver && this.svgEl) this.resizeObserver.unobserve(this.svgEl);
        if (this.listenTimer) {
            clearTimeout(this.listenTimer);
            this.listenTimer = undefined;
        }
        if (this.listenerEvent) window.removeEventListener("resize", this.listenerEvent);
    }
}
