<template>
  <Menu id="fina_menu" :class="finaMenuClass" width="auto" mode="vertical" :theme="theme" active-name="1-2" :open-names="['1']">
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-paper" />
        <span>内容管理</span>
      </template>
      <MenuItem name="1-1">
        <span>文章管理</span>
      </MenuItem>
      <MenuItem name="1-2">
        <span>评论管理</span>
      </MenuItem>
      <MenuItem name="1-3">
        <span>举报管理</span>
      </MenuItem>
    </Submenu>
    <Submenu name="2">
      <template slot="title">
        <Icon type="ios-people" />
        <span>用户管理</span>
      </template>
      <MenuItem name="2-1">
        <span>新增用户</span>
      </MenuItem>
      <MenuItem name="2-2">
        <span>活跃用户</span>
      </MenuItem>
    </Submenu>
    <Submenu name="3">
      <template slot="title">
        <Icon type="ios-stats" />
        <span>统计分析</span>
      </template>
    </Submenu>
  </Menu>
</template>

<script>
import './index.scss'
export default {
  name: 'fina-menu',
  props: {
    collapse: Boolean
  },
  computed: {
    mode () {
      return this.collapse ? 'vertical' : 'horizontal'
    },
    finaMenuClass () {
      return [
        'menu-item',
        this.collapse ? 'collapsed-menu' : ''
      ]
    }
  },
  data () {
    return {
      theme: 'light'
    }
  }
}
</script>
