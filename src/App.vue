<script setup lang="ts">
for (let index = 0; index < 10; index++) {
  console.log("提交");
}
console.log("123");
</script>

<template>
  <div>首页</div>
  <div>新增一个标题</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
