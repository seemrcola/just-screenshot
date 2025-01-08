import type { Color, Size } from './type'
import { reactive, ref } from 'vue'

const penSize = ref<Size>('small')
const penColor = ref<Color>('red')

function setPenSize(size: Size) {
    penSize.value = size
}

function setPenColor(color: Color) {
    penColor.value = color
}

const penState = reactive({ penColor, penSize, setPenColor, setPenSize })

export default penState
