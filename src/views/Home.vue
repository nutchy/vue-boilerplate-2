<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    Something
    <b-button variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
