import { ref } from 'vue'

const isOpenMenu = ref(false)

export function useSidebar() {
  return {
    isOpenMenu
  }
}
