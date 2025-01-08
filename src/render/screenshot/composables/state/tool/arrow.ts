import type { Color } from './type'
import { reactive, ref } from 'vue'

const arrowColor = ref<Color>('red')

function setArrowColor(color: Color) {
    arrowColor.value = color
}

const arrowState = reactive({ arrowColor, setArrowColor })

export default arrowState
