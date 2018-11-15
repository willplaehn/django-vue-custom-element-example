import Vue from 'vue'
import vueCustomElement from 'vue-custom-element'

import Todo from './todo'

Vue.use(vueCustomElement)
Vue.customElement('vue-todo', Todo, {})
