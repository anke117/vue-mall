<template>
  <div id="home">
    {{ testMsg }}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testMsg: "111111"
    };
  }
};
</script>