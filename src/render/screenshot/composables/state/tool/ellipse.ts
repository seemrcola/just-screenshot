import type { Color } from './type'
import { reactive, ref } from 'vue'

const ellipseColor = ref<Color>('red')

function setEllipseColor(color: Color) {
    ellipseColor.value = color
}

const ellipseState = reactive({ ellipseColor, setEllipseColor })

export default ellipseState
