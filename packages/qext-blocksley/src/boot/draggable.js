import Draggable from 'vuedraggable'

// optionally import default styles
// import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

// "async" is optional
export default async ({ Vue }) => {
  Vue.component('draggable', Draggable)
}
