<template>
  <Layout id="fina_layout">
    <Header id="fina_header">
      <div class="header_icon">FINA</div>
      <div class="header_content">
        <div class="header_content_left"></div>
        <div class="header_content_right">
          <div class="header_content_right_icons">
            <Icon type="ios-mail" />
          </div>
        </div>
      </div>
    </Header>
    <Layout>
      <Sider id="fina_sider" v-model="hideSider" :collapsible="true" hide-trigger>
        <Menu :collapse="hideSider"></Menu>
      </Sider>
      <Content id="fina_content">
        <router-view></router-view>
      </Content>
    </Layout>
    <Footer id="fina_footer">
      fiNa
    </Footer>
  </Layout>
</template>

<script>
import './index.scss'
import Menu from '@c/menu'
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
