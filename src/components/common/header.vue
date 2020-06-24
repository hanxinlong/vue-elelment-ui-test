<template>
  <div class="title">{{title}}</div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 16px;
}
</style>
