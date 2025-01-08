import { reactive, ref } from 'vue'

type ToolType = 'Mosaic' | 'Pen' | 'Rect' | 'Ellipse' | 'Text' | 'Arrow'

const showMosaicChoose = ref(false)
const showPenChoose = ref(false)
const showRectChoose = ref(false)
const showEllipseChoose = ref(false)
const showTextChoose = ref(false)
const showArrowChoose = ref(false)
const showList = [showMosaicChoose, showPenChoose, showRectChoose, showEllipseChoose, showTextChoose, showArrowChoose]

function changeShowChoose(type: ToolType) {
    clear()
    switch (type) {
        case 'Mosaic':
            showMosaicChoose.value = true
            break
        case 'Pen':
            showPenChoose.value = true
            break
        case 'Rect':
            showRectChoose.value = true
            break
        case 'Ellipse':
            showEllipseChoose.value = true
            break
        case 'Text':
            showTextChoose.value = true
            break
        case 'Arrow':
            showArrowChoose.value = true
            break
        default:
            break
    }
}

function clear() {
    showList.forEach(show => show.value = false)
}

const toolState = reactive({
    changeShowChoose,
    clear,
    showArrowChoose,
    showEllipseChoose,
    showMosaicChoose,
    showPenChoose,
    showRectChoose,
    showTextChoose,
})

export default toolState
