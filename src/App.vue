<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@mixin size {
  height: 100%;
  width: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
    Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,
    sans-serif;
}

body, html{
  @include size;
}

#app {
  @include size;
  color: #2c3e50;
}
</style>
