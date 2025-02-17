import arrowState from '../state/tool/arrow'
import { useDragSVGLine } from './dragSvg'
import { useUndo } from './undo'

export function useDrawSVGArrow(canvas: HTMLCanvasElement, svg: SVGElement) {
    let svgArrow = document.createElementNS('http://www.w3.org/2000/svg', 'line')

    let IDRandom = 0

    const undo = useUndo(canvas, svg)
    const rect = canvas.getBoundingClientRect()!

    let start = { x: 0, y: 0 }

    // 定义箭头区域
    defineDefs()

    function defineDefs() {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs')
        svg.appendChild(defs)
    }

    function defineMarker(id: number) {
        const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker')
        marker.setAttribute('id', `svgArrowhead${id}`)
        marker.setAttribute('markerWidth', '6')
        marker.setAttribute('markerHeight', '4')
        marker.setAttribute('refX', '0')
        marker.setAttribute('refY', '2')
        marker.setAttribute('orient', 'auto')

        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon')
        polygon.setAttribute('points', '0 0, 6 2, 0 4')
        polygon.setAttribute('fill', `${getColor()}`)

        marker.appendChild(polygon)
        const defs = document.querySelector('defs')!
        defs.appendChild(marker)
    }

    function startDrawArrow() {
        svg.addEventListener('mousedown', mousedownHandler)
    }

    function stopDrawArrow() {
        svg.removeEventListener('mousedown', mousedownHandler)
    }

    function mousedownHandler(event: MouseEvent) {
        undo.track()

        document.addEventListener('mousemove', mousemoveHandler)
        document.addEventListener('mouseup', mouseupHandler)

        IDRandom = Math.floor(Date.now())
        defineMarker(IDRandom)

        const { pageX, pageY } = event
        const x = pageX - rect.left
        const y = pageY - rect.top
        start = { x, y }

        svgArrow = document.createElementNS('http://www.w3.org/2000/svg', 'line')
        svgArrow.setAttribute('stroke', `${getColor()}`)
        svgArrow.setAttribute('stroke-width', '4')
        svgArrow.setAttribute('marker-end', `url(#svgArrowhead${IDRandom})`)
        svgArrow.setAttribute('x1', `${start.x}`)
        svgArrow.setAttribute('y1', `${start.y}`)
        svgArrow.setAttribute('x2', `${x}`)
        svgArrow.setAttribute('y2', `${y}`)

        svg.appendChild(svgArrow)
    }

    function mousemoveHandler(event: MouseEvent) {
        const { pageX, pageY } = event
        const x = pageX - rect.left
        const y = pageY - rect.top

        svgArrow.setAttribute('x2', `${x}`)
        svgArrow.setAttribute('y2', `${y}`)
    }

    function mouseupHandler() {
        document.removeEventListener('mousemove', mousemoveHandler)
        document.removeEventListener('mouseup', mouseupHandler)

        // 添加拖拽
        useDragSVGLine(svgArrow, svg, undo)
    }

    function getColor() {
        return arrowState.arrowColor
    }

    return {
        startDrawArrow,
        stopDrawArrow,
    }
}
