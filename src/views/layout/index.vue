<template>
  <Layout id="fina_layout">
    <Header id="fina_header">
      <div class="header_icon">FINA</div>
      <div class="header_content">Header</div>
    </Header>
    <Layout>
      <Sider id="fina_sider" v-model="hideSider" :collapsible="true" hide-trigger>
        <Menu :collapse="hideSider"></Menu>
      </Sider>
      <Content>Content</Content>
    </Layout>
    <Footer id="fina_footer">
      fiNa
    </Footer>
  </Layout>
</template>

<script>
import './index.scss'
import Menu from '../menu'
export default {
  components: {
    Menu
  },
  data () {
    return {
      hideSider: false
    }
  },
  methods: {
    triggerSider () {
      this.hideSider = !this.hideSider
      console.log(this.hideSider)
    }
  }
}
</script>
