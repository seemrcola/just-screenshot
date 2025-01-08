import type { MosaicType, Size } from './type'
import { reactive, ref } from 'vue'

const mosaicType = ref<MosaicType>('light')
const mosaicSize = ref<Size>('small')

function setMosaicType(type: MosaicType) {
    mosaicType.value = type
}

function setMosaicSize(size: Size) {
    mosaicSize.value = size
}

const mosaicState = reactive({ mosaicSize, mosaicType, setMosaicSize, setMosaicType })

export default mosaicState
