/**
 * SVGCoordinates
 * @date 2022-01-07
 */
export class SVGCoordinates {

    public static toSVG(screenX: number, screenY: number, svgMainElement: SVGElement): DOMPoint {
        try {
            //@ts-ignore
            var p = svgMainElement.createSVGPoint();
            p.x = screenX;
            p.y = screenY;
            //@ts-ignore
            return p.matrixTransform(svgMainElement.getScreenCTM().inverse());
        } catch (e) { throw ("Invalid SVG element provided to SVGCoordinates.toSVG"); }
    }

    public static toScreen(svgX: number, svgY: number, svgMainElement: SVGElement): DOMPoint {
        try {
            //@ts-ignore
            var p = svgMainElement.createSVGPoint();
            p.x = svgX;
            p.y = svgY;
            //@ts-ignore
            return p.matrixTransform(svgMainElement.getScreenCTM());
        } catch (e) { throw ("Invalid SVG element provided to SVGCoordinates.toSVG"); }
    }

    public static getRectUsingUserCoordinates(el: Element): DOMRect | undefined {
        // although this returns the bounding box in user coordinates, it does NOT take into account transforms!
        return (el as SVGGraphicsElement).getBBox();
    }
    public static getRectUsingViewportCoordinates(el: Element): DOMRect | undefined {
        return (el as SVGGraphicsElement).getBoundingClientRect();
    }

    public static getCenter(el: Element, svgMainElement?: SVGElement): DOMPoint {
        let domRect: DOMRect | undefined = SVGCoordinates.getRectUsingViewportCoordinates(el);
        // if (domRect) console.log(`Element #${el.id} ${domRect.x} x ${domRect.y}`);
        if (domRect && svgMainElement) {
            let svgPoint: DOMPoint = SVGCoordinates.toSVG(domRect.x + (domRect.width / 2), domRect.y + (domRect.height / 2), svgMainElement);
            // console.log(`Element #${el.id} ${svgPoint.x} x ${svgPoint.y}\n`);
            return svgPoint;
        } else return new DOMPoint(0, 0);
    }

    public static connectLineBetween(lineSelector: string, el1Selector: string, el2Selector: string, svgMainElement: SVGElement) {
        let line: Element | null | undefined = svgMainElement ? svgMainElement.querySelector(lineSelector) : undefined,
            el1: Element | null | undefined = svgMainElement ? svgMainElement.querySelector(el1Selector) : undefined,
            el2: Element | null | undefined = svgMainElement ? svgMainElement.querySelector(el2Selector) : undefined;
        if (el1 && el2 && line) {
            line.setAttribute("x1", SVGCoordinates.getCenter(el1, svgMainElement).x.toString());
            line.setAttribute("y1", SVGCoordinates.getCenter(el1, svgMainElement).y.toString());
            line.setAttribute("x2", SVGCoordinates.getCenter(el2, svgMainElement).x.toString());
            line.setAttribute("y2", SVGCoordinates.getCenter(el2, svgMainElement).y.toString());
        }
    }
}
