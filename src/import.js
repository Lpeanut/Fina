import { Button, Menu, Submenu, MenuItem, Icon, Layout, Header, Footer, Content, Sider } from 'iview'

const register = Vue => {
  Vue.component('Button', Button)
  Vue.component('Menu', Menu)
  Vue.component('Submenu', Submenu)
  Vue.component('MenuItem', MenuItem)
  Vue.component('Icon', Icon)
  Vue.component('Layout', Layout)
  Vue.component('Header', Header)
  Vue.component('Footer', Footer)
  Vue.component('Content', Content)
  Vue.component('Sider', Sider)
}

export default register
