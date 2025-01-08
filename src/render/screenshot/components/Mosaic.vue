<script setup lang='ts'>
import type { Size } from '../composables/state/tool/type'
import state from '../composables/state/tool'
import mosaicState from '../composables/state/tool/mosaic'
import BaseSize from './BaseSize.vue'

const emits = defineEmits<{
    (e: 'mosaic'): void
}>()

function changeType(type: 'light' | 'heavy') {
    mosaicState.setMosaicType(type)
}

function changeSize(size: Size) {
    mosaicState.setMosaicSize(size)
}

function mosaic() {
    state.changeShowChoose('Mosaic')
    emits('mosaic')
}
</script>

<template>
    <div relative>
        <div
            h-4 w-4 cursor-pointer px-2 py-1 i-mingcute:mosaic-line text-light
            :class="{ 'text-light': !state.showMosaicChoose, 'text-red': state.showMosaicChoose }"
            @mousedown.stop
            @click="mosaic"
        />
        <div v-if="state.showMosaicChoose" class="choose">
            <BaseSize :size="mosaicState.mosaicSize" @change-size="changeSize" />
            <div h-4 mx-1 w-2px bg-gray />
            <div
                :class="{ 'bg-orange': mosaicState.mosaicType === 'light' }"
                i-mingcute:mosaic-line mx-2 text-light text-1.15rem
                @click="changeType('light')"
            />
            <div
                :class="{ 'bg-orange': mosaicState.mosaicType === 'heavy' }"
                i-icon-park-outline:mosaic mx-2 text-light
                @click="changeType('heavy')"
            />
        </div>
    </div>
</template>

<style scoped>
.choose {
  position: absolute;
  left: 50%;
  bottom: -42px;
  padding: 6px 12px;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  border-radius: 4px;
}
</style>
