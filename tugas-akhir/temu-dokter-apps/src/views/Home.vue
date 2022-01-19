<template>
  <ComponentHeader/>
  <div className="bg-custom">
    <br>
    <br>
  </div>
  <ComponentMainContentHome/>

</template>

<script>
import ComponentHeader from '@/components/Header.vue'
import ComponentMainContentHome from '@/components/MainContentHome.vue'

export default {
  name: 'Home',
  components: {
    ComponentHeader,
    ComponentMainContentHome
  }
}
</script>

<style scoped>
.bg-custom {
  background-color: #f5fdfc;
}
</style>
