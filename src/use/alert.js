import { reactive } from 'vue'

export function useAlert() {
  const alert = reactive({
    visible: false,
    type: 'primary',
    title: 'Успешно!',
    text: 'Статьи созданы.'
  })
  const toggleAlert = () => alert.visible = !alert.visible
  return { alert, toggleAlert }
}