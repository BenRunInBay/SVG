<script lang="ts">
import { defineComponent, PropType } from "vue";
import * as d3 from "d3";
import { ResizeSVGViewBox } from "../../lib/ui/ResizeSVGViewBox";

interface IComponentData {
    sampleData: any;
    svgResizer: ResizeSVGViewBox;
}
export default defineComponent({
    data() {
        return {
            sampleData: {
                "name": "Circle Pack", "children": [
                    {
                        "name": "analytics", "children": [{
                            "name": "Projects", "children": []
                        }, {
                            "name": "Data", "children": []
                        }, {
                            "name": "Methods", "children": []
                        }]
                    }, {
                        "name": "util", "children": [
                            { "name": "Bootcamp", "size": 8258 }, { "name": "Dev", "size": 10001 }, { "name": "Service", "size": 335 }]
                    }, {
                        "name": "Mediums", "children": [{
                            "name": "Software", "children": [{ "name": "Speaker", "size": 1302 },
                            { "name": "Physics", "size": 24593 }, { "name": "Grid", "size": 652 }, { "name": "Java", "size": 636 },
                            { "name": "Community", "size": 6703 }]
                        }]
                    }
                ]
            },
            svgResizer: new ResizeSVGViewBox()
        } as IComponentData
    },
    mounted() {
        if (this.$refs.graphic) {
            let svgElement: SVGElement = this.$refs.graphic as SVGElement;
            this.svgResizer.observeSizeUsingEventModel(svgElement, this.renderDiagram);
        }
    },
    methods: {
        renderDiagram(svgElement: SVGElement, viewBoxWidth: number, viewBoxHeight: number) {
            let svgD3: any = d3.select(svgElement);
            svgD3.selectAll("a").remove();
            //@ts-ignore
            this.pack(svgD3, this.sampleData, { label: (d) => d.name, width: viewBoxWidth, height: viewBoxHeight });
        },
        //@ts-ignore
        pack(svg: SVGElement, data, { label, value, children, width, height } = {}) {

            const root = d3.hierarchy(data, children);

            // Compute the values of internal nodes by aggregating from the leaves.
            value == null ? root.count() : root.sum(d => Math.max(0, value(d)));

            // Compute labels and titles.
            const descendants = root.descendants();
            const leaves = descendants.filter(d => !d.children);
            //@ts-ignore
            leaves.forEach((d, i) => d.index = i);
            const L = label == null ? null : leaves.map(d => label(d.data, d));


            // Compute the layout.
            d3.pack()
                .size([width - 2, height - 2])
                .padding(3)
                (root);

            //@ts-ignore
            const node = svg.selectAll("a")
                .data(descendants)
                .join("a")
                .attr("transform", (d: any) => `translate(${d.x},${d.y})`);

            node.append("circle")
                .attr("fill", "#fff")
                .attr("fill-opacity", "0.5")
                .attr("stroke", "#444")
                .attr("r", (d: any) => d.r);

            if (L) {
                // A unique identifier for clip paths (to avoid conflicts).
                const uid = `O-${Math.random().toString(16).slice(2)}`;

                const leaf = node
                    .filter((d: any) => !d.children && d.r > 10 && L[d.index] != null);

                leaf.append("clipPath")
                    .attr("id", (d: any) => `${uid}-clip-${d.index}`)
                    .append("circle")
                    .attr("r", (d: any) => d.r);

                leaf.append("text")
                    .selectAll("tspan")
                    .data((d: any) => `${L[d.index]}`.split(/\n/g))
                    .join("tspan")
                    .attr("x", 0)
                    .attr("y", (d: any, i: any, D: any) => `${(i - D.length / 2) + 0.85}em`)
                    .attr("fill-opacity", (d: any, i: any, D: any) => i === D.length - 1 ? 0.7 : null)
                    .attr("font-size", "calc(16px + 6 * ((100vw - 320px) / 680))")
                    .text((d: any) => d);
            }

            //@ts-ignore
            svg.attr("id", "circlepack");
        }
    },
    beforeUnmount() {
        if (this.svgResizer) this.svgResizer.stopObserving();
    }
});
</script>

<template>
    <h1>Technique 3: D3 Circle Pack</h1>
    <div class="web-example">
        <svg ref="graphic" viewBox="0 0 1000 1000" class="outline" text-anchor="middle">
            <text
                x="10"
                y="50"
                text-anchor="start"
                font-family="Arial"
                font-size="40"
                fill="#ffe600"
            >D3 layout</text>
        </svg>
    </div>
</template>
