import type { Ref } from 'vue'
import type { Mode } from '../types'
import { ref } from 'vue'
import screenState from './state/screen'
import { useCanvas } from './utils'

export function useDragRect(
    rectDOM: HTMLElement,
    screenshot: HTMLCanvasElement,
    mode: Ref<Mode>,
) {
    const startFlag = ref(false)
    let start = { x: 0, y: 0 }

    function startDrag() {
        rectDOM.addEventListener('mousedown', mousedownHandler)
    }

    function mousedownHandler(e: MouseEvent) {
        startFlag.value = true
        document.addEventListener('mousemove', mousemoveHandler)
        document.addEventListener('mouseup', mouseupHandler)
        start = { x: e.pageX, y: e.pageY }
    }

    function mousemoveHandler(e: MouseEvent) {
        if (!startFlag.value)
            return
        if (mode.value !== 'drag')
            return

        const { pageX, pageY } = e
        const { x, y } = start
        const deltaX = pageX - x
        const deltaY = pageY - y

        const rect = rectDOM.getBoundingClientRect()
        let newX = rect.x + deltaX
        let newY = rect.y + deltaY

        // 限制拖动范围
        newX = newX < 0 ? 0 : newX
        newY = newY < 0 ? 0 : newY
        newX = newX + rect.width > window.innerWidth ? window.innerWidth - rect.width : newX
        newY = newY + rect.height > window.innerHeight ? window.innerHeight - rect.height : newY

        // 改变位置
        rectDOM.style.left = `${newX}px`
        rectDOM.style.top = `${newY}px`

        start = { x: pageX, y: pageY }
        useCanvas(screenshot, { x: newX, y: newY, height: rect.height, width: rect.width }, screenState.imgID)
    }

    function mouseupHandler() {
        startFlag.value = false
        document.removeEventListener('mousemove', mousemoveHandler)
        document.removeEventListener('mouseup', mouseupHandler)

        mode.value = 'init'
    }

    function stopDrag() {
        rectDOM.removeEventListener('mousedown', mousedownHandler)
        document.removeEventListener('mousemove', mousemoveHandler)
        document.removeEventListener('mouseup', mouseupHandler)
    }

    return {
        startDrag,
        stopDrag,
        startFlag,
    }
}
