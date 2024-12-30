<script setup lang='ts'>
import { ref } from 'vue'

const isScreenshot = ref(false)

function handleClick(): void {
    if (isScreenshot.value)
        window.useScreenshot.close()
    else
        window.useScreenshot.open()
}

window.useScreenshot.onScreenshotOpened(() => {
    isScreenshot.value = true
})

window.useScreenshot.onScreenshotClosed(() => {
    isScreenshot.value = false
})
</script>

<template>
    <div
        i-icon-park-twotone:screenshot-two
        text-4 cursor-pointer
        :class="{ 'text-red': isScreenshot, 'text-dark': !isScreenshot }"
        @click="handleClick"
    />
</template>
