import type { PiniaPluginContext } from 'pinia'
import { watch } from 'vue'

export function persist() {
  const key = 'PINIA_TODO_APP'

  return function({ store }: PiniaPluginContext) {
    const json = localStorage.getItem(key)
    if (json) {
      store.$patch(JSON.parse(json))
    }

    watch(store, (state) => {
      localStorage.setItem(key, JSON.stringify(state))
    }, { deep: true })
  }
}
