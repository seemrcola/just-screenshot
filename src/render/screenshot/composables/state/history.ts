import { computed } from 'vue'

interface HistoryItem {
    canvas: string
    svg: string
}

// 实现一个历史栈
class HistoryStack {
    private stack: HistoryItem[] = []

    isEmpty() {
        return this.stack.length === 0
    }

    push(item: HistoryItem) {
        this.stack.push(item)
    }

    pop() {
        if (this.isEmpty())
            return null
        return this.stack.pop()
    }

    get length() {
        return this.stack.length
    }

    get top() {
        return this.stack[this.stack.length - 1]
    }

    clear() {
        this.stack = []
    }
}

// 单例栈实例
const historyStack = new HistoryStack()

function useHistory() {
    const canUndo = computed(() => historyStack.length > 0)

    return {
        historyStack,
        canUndo,
    }
}

export { useHistory }
