/**
 * ElementShifter
 * @date 2022-01-07
 * Purpose: horizontally shift designated elements of an SVG to fit within a resized viewBox
 */
import { SVGCoordinates } from "./SVGCoordinates";

// This class is used to capture the original size and position of the designated elements within the SVG
class ShiftableElement {
    public id: string = "";
    public originalX: number = 0;
    public originalY: number = 0;
    public originalWidth: number = 0;
    public originalHeight: number = 0;
    public element: SVGElement | undefined = undefined;

    constructor(el: SVGElement) {
        this.id = el.id;
        this.element = el;
        let rect: DOMRect | undefined = SVGCoordinates.getRectUsingUserCoordinates(el);
        if (rect) {
            this.originalX = rect.x ? rect.x : rect.left;
            this.originalY = rect.y ? rect.y : rect.top;
            this.originalWidth = rect.width;
            this.originalHeight = rect.height;
        }
    }

    public verticallyIntersectsWith(comparison: ShiftableElement): boolean {
        return this.originalY + this.originalHeight > comparison.originalY && this.originalY < comparison.originalY + comparison.originalHeight;
    }
}

// Store each "row" of designated elements in the SVG to act on them together
interface ShiftableRowInterface {
    shiftableElements: ShiftableElement[];
}

/*
    Create an instance of this class and provide the selector for the elements to designate for "horizontal shifting".
    
    let svgMain: SVGElement = document.querySelector("svg");
    let shifter = new ElementShifter(svgMain, "g");
    ...
    // after resize:
    shifter.adjustLayout(newWidthOfSVG);
*/
export class ElementShifter {
    private rows: ShiftableRowInterface[] = [];
    private svgMainElement: SVGElement | undefined = undefined;
    private originalWidth: number = 0;

    constructor(svgMainElement: SVGElement, elementSelector: string = "g[id*='group']") {
        this.svgMainElement = svgMainElement;
        let rect: DOMRect | undefined = SVGCoordinates.getRectUsingUserCoordinates(svgMainElement);
        if (rect) this.originalWidth = rect.width;
        this.findShiftableElements(elementSelector);
    }

    public findShiftableElements(elementSelector: string = "g[id*='group']") {
        let elements = this.svgMainElement?.querySelectorAll(elementSelector),
            shiftableElements: ShiftableElement[] = [];
        elements?.forEach((el: Element) => {
            let shiftableElement: ShiftableElement = new ShiftableElement(el as SVGElement);
            shiftableElements.push(shiftableElement);
        });
        shiftableElements.forEach((shiftableElement: ShiftableElement) => {
            let alignedRow: ShiftableRowInterface | undefined = this.rows.find((row: ShiftableRowInterface) => {
                let s: ShiftableElement | undefined = row.shiftableElements.find((comparison: ShiftableElement) => shiftableElement.verticallyIntersectsWith(comparison));
                return s != undefined;
            });
            if (alignedRow) alignedRow.shiftableElements.push(shiftableElement);
            else this.rows.push({
                shiftableElements: [shiftableElement]
            });
        });
    }

    public adjustLayout(newWidthOfSVG: number): void {
        if (this.originalWidth) {
            this.rows.forEach((row: ShiftableRowInterface) => {
                // act on each row separately
                if (row.shiftableElements.length > 0) {
                    let widthNeeded: number = row.shiftableElements.map((s: ShiftableElement) => s.originalWidth).reduce((p, c) => p + c),
                        widthAvailable: number = newWidthOfSVG - widthNeeded,
                        widthBetween: number = widthAvailable > 0 ? widthAvailable / (row.shiftableElements.length - 1) : 0,
                        scaleAmount: number = 1;
                    if (row.shiftableElements.length > 1) {
                        // for each element, adjust x so that is not left of left edge, and not to the right of 'newWidthOfSVG'
                        row.shiftableElements.forEach((shiftableElement: ShiftableElement, index: number) => {
                            let newX = Math.min(newWidthOfSVG, shiftableElement.originalX + shiftableElement.originalWidth) - shiftableElement.originalWidth;
                            newX = Math.max(0, newX);
                            shiftableElement.element?.setAttribute("transform", `translate(${(newX - shiftableElement.originalX)}) scale(${scaleAmount})`);
                        });
                    } else if (row.shiftableElements.length == 1) {
                        let shiftableElement: ShiftableElement = row.shiftableElements[0];
                        let newX = newWidthOfSVG < this.originalWidth ? (newWidthOfSVG - shiftableElement.originalWidth) / 2 : shiftableElement.originalX;
                        shiftableElement.element?.setAttribute("transform", `translate(${(newX - shiftableElement.originalX)}) scale(${scaleAmount})`);
                    }
                }
            });
        }
    }
}