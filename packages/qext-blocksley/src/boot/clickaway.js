import { directive as ClickAway } from 'vue-clickaway';

// optionally import default styles
// import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

// "async" is optional
export default async ({ Vue }) => {
  Vue.directive('clickaway', ClickAway)
}
