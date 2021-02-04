/* eslint-disable @typescript-eslint/no-unused-vars */
import MessageComponent from './h-messageComponent.vue'
import { VueConstructor } from 'vue'

const Message: any = {}

Message.install = (Vue: VueConstructor) => {
  const MsgClass = Vue.extend(MessageComponent)
  const instance: any = new MsgClass()
  instance.$mount()
  document.body.appendChild(instance.$el)

  const MsgMain = {
    show_message(txt: string, type: string) {
      instance.visible = true
    },
    success(txt = '', type = 'success') {
      this.show_message(txt, type)
    }
  }
  Vue.prototype.$message = MsgMain
}

export default Message
