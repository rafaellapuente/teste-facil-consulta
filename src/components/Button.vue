<template>
  <button :id="cor">{{ buttonName }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonName: String,
    cor: String,
  },
};
</script>