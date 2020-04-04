import VueDraggableResizable from 'vue-draggable-resizable'

// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

// "async" is optional
export default async ({ Vue }) => {
  Vue.component('vue-draggable-resizable', VueDraggableResizable)
}
