import type { Color, Size } from './type'
import { reactive, ref } from 'vue'

const textSize = ref<Size>('small')
const textColor = ref<Color>('red')

function setTextColor(color: Color) {
    textColor.value = color
}

function setTextSize(size: Size) {
    textSize.value = size
}

const textState = reactive({ textColor, textSize, setTextColor, setTextSize })

export default textState
