import { useImage } from './useImage'
import { useLoading } from './useLoading'
import { useScreenshot } from './useScreenshot'
import { useVersions } from './useVersions'
import './ipcRender'

// --------- Preload scripts loading ---------
function domReady(condition: DocumentReadyState[] = ['complete', 'interactive']) {
    return new Promise((resolve) => {
        if (condition.includes(document.readyState)) {
            resolve(true)
        }
        else {
            document.addEventListener('readystatechange', () => {
                if (condition.includes(document.readyState))
                    resolve(true)
            })
        }
    })
}

const { appendLoading, removeLoading } = useLoading()
domReady().then(appendLoading)

window.onmessage = (ev: any) => {
    ev.data.payload === 'removeLoading' && removeLoading()
}

setTimeout(removeLoading, 1000)

// versions----------
useVersions()
// useScreenshot-----
useScreenshot()
// useImage----------
useImage()
