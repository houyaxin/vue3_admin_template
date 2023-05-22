<script setup lang="ts">
for (let index = 0; index < 10; index++) {
  console.log('提交')
}
</script>

<template>
  <div>首页</div>
</template>

<style scoped lang="scss">
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
