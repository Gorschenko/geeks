import { ref } from 'vue'

export function useAlert() {
  const alert = ref(false)
  const toggleAlert = () => alert.value = !alert.value
  return { alert, toggleAlert }
}