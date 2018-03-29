<template>
  <div class="progress">
      <div class="determinate" :style="{width : (noOfComponents * 10) + '%'}"></div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            noOfComponents : 5
        };
    }
}
</script>

<style scoped>
    .progress {
        width: 80%;
    }
</style>