<script setup lang='ts'>
import type { Color } from '../composables/state/tool/type'
import state from '../composables/state/tool'
import arrowState from '../composables/state/tool/arrow'
import BaseColor from './BaseColor.vue'

const emits = defineEmits<{
    (e: 'arrow'): void
}>()

function arrow() {
    state.changeShowChoose('Arrow')
    emits('arrow')
}

function changeColor(color: Color) {
    arrowState.setArrowColor(color)
}
</script>

<template>
    <div relative>
        <div
            h-4 w-4 cursor-pointer px-2 py-1 i-material-symbols:arrow-outward text-light
            :class="{ 'text-light': !state.showArrowChoose, 'text-red': state.showArrowChoose }"
            @mousedown.stop
            @click="arrow"
        />
        <div v-if="state.showArrowChoose" class="choose">
            <BaseColor :color="arrowState.arrowColor" @change-color="changeColor" />
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
