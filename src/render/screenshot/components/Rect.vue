<script setup lang='ts'>
import type { Color } from '../composables/state/tool/type'
import state from '../composables/state/tool'
import rectState from '../composables/state/tool/rect'
import BaseColor from './BaseColor.vue'

const emits = defineEmits<{
    (e: 'rect'): void
}>()

function pen() {
    state.changeShowChoose('Rect')
    emits('rect')
}

function changeColor(color: Color) {
    rectState.setRectColor(color)
}
</script>

<template>
    <div relative>
        <div
            h-4 w-4 cursor-pointer px-2 py-1 i-material-symbols:rectangle-outline-rounded text-light
            :class="{ 'text-light': !state.showRectChoose, 'text-red': state.showRectChoose }" @mousedown.stop
            @click="pen"
        />
        <div v-if="state.showRectChoose" class="choose">
            <BaseColor :color="rectState.rectColor" @change-color="changeColor" />
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
