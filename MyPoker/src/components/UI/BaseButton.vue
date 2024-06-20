<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  border: 1px solid black;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: white;
  cursor: pointer;
}

.btn:not([disabled]):hover {
  background-color: rgba(37, 37, 37, 0.021);
}

.btn:disabled {
  background-color: gray;
  cursor: default;
}
</style>
