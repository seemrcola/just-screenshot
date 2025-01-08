<script setup lang='ts'>
import type { Color, Size } from '../composables/state/tool/type'
import state from '../composables/state/tool'
import penState from '../composables/state/tool/pen'
import BaseColor from './BaseColor.vue'
import BaseSize from './BaseSize.vue'

const emits = defineEmits<{
    (e: 'pen'): void
}>()

function pen() {
    state.changeShowChoose('Pen')
    emits('pen')
}

function changeSize(size: Size) {
    penState.setPenSize(size)
}

function changeColor(color: Color) {
    penState.setPenColor(color)
}
</script>

<template>
    <div relative>
        <div
            h-4 w-4 cursor-pointer px-2 py-1 i-material-symbols:edit-outline text-light
            :class="{ 'text-light': !state.showPenChoose, 'text-red': state.showPenChoose }"
            @mousedown.stop
            @click="pen"
        />
        <div v-if="state.showPenChoose" class="choose">
            <BaseSize :size="penState.penSize" @change-size="changeSize" />
            <div h-4 mx-1 w-2px bg-gray />
            <BaseColor :color="penState.penColor" @change-color="changeColor" />
        </div>
    </div>
</template>

<style scoped>
.choose {
  position: absolute;
  left: 50%;
  bottom: -42px;
  padding: 6px 12px;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  border-radius: 4px;
}
</style>
