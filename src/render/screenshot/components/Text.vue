<script setup lang='ts'>
import type { Color, Size } from '../composables/state/tool/type'
import state from '../composables/state/tool'
import textState from '../composables/state/tool/text'
import BaseColor from './BaseColor.vue'
import BaseSize from './BaseSize.vue'

const emits = defineEmits<{
    (e: 'text'): void
}>()

function pen() {
    state.changeShowChoose('Text')
    emits('text')
}

function changeSize(size: Size) {
    textState.setTextSize(size)
}

function changeColor(color: Color) {
    textState.setTextColor(color)
}
</script>

<template>
    <div relative>
        <div
            h-4 w-4 cursor-pointer px-2 py-1 i-mdi:format-text text-light
            :class="{ 'text-light': !state.showTextChoose, 'text-red': state.showTextChoose }"
            @mousedown.stop
            @click="pen"
        />
        <div v-if="state.showTextChoose" class="choose">
            <BaseSize :size="textState.textSize" @change-size="changeSize" />
            <div h-4 mx-1 w-2px bg-gray />
            <BaseColor :color="textState.textColor" @change-color="changeColor" />
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
