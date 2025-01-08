<script setup lang='ts'>
import type { Color } from '../composables/state/tool/type'
import state from '../composables/state/tool'
import ellipseState from '../composables/state/tool/ellipse'
import BaseColor from './BaseColor.vue'

const emits = defineEmits<{
    (e: 'ellipse'): void
}>()

function pen() {
    state.changeShowChoose('Ellipse')
    emits('ellipse')
}

function changeColor(color: Color) {
    ellipseState.setEllipseColor(color)
}
</script>

<template>
    <div relative>
        <div
            h-4 w-4 cursor-pointer px-2 py-1 i-mdi:ellipse-outline text-light
            :class="{ 'text-light': !state.showEllipseChoose, 'text-red': state.showEllipseChoose }"
            @mousedown.stop
            @click="pen"
        />
        <div v-if="state.showEllipseChoose" class="choose">
            <BaseColor :color="ellipseState.ellipseColor" @change-color="changeColor" />
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
