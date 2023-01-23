<template>
  <a-layout>
    <!-- <a-layout-header>Header</a-layout-header> -->
    <a-layout>
      <a-layout-sider>
        <AdBlock1 />
      </a-layout-sider>
      <a-layout-content>
        <AppBlock />
      </a-layout-content>
      <a-layout-sider>
        <AdBlock2 />
      </a-layout-sider>
    </a-layout>
    <a-layout-footer style="margin-top: 50px; padding: 1rem">
      <AppFooter />
    </a-layout-footer>
  </a-layout>

</template>

<script lang="ts" setup>
import AppBlock from './components/AppBlock.vue'
import AdBlock1 from './components/AdBlock1.vue'
import AdBlock2 from './components/AdBlock2.vue'
import AppFooter from './components/AppFooter.vue'


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

footer {
  margin-top: 30px;
  border-top: dashed gray;
}
</style>
