<template>
  <div class="before">
    <h1 v-for="(item, index) in items" :key="index">{{item}}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BeforeSleep extends Vue {

  public items: string[] = [];

  public async mounted() {

    this.items = ['before sleep1', 'before sleep2', 'before sleep3'];
    await this.sleep(1000);
  }

  public sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
