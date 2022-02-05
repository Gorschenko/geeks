import { reactive } from 'vue'

export function useAlert() {
  const alert = reactive({
    visible: false,
    type: '',
    text: ''
  })
  const toggleAlert = () => alert.visible = !alert.visible
  const setAlert = (visible, type, text) => {
    alert.visible = visible
    alert.type = type
    alert.text = text
  }
  return { alert, toggleAlert, setAlert }
}