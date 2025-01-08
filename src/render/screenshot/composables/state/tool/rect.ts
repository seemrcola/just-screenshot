import type { Color } from './type'
import { reactive, ref } from 'vue'

const rectColor = ref<Color>('red')

function setRectColor(color: Color) {
    rectColor.value = color
}

const rectState = reactive({ rectColor, setRectColor })

export default rectState
