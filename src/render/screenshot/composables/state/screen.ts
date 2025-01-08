import { reactive, ref } from 'vue'

const imgData = ref<any>()
const imgID = 'background-image-screenshot'

const screenState = reactive({ imgData, imgID })

export default screenState
