<template>
  <svg class="svg-icon" style="width: 100px; height: 100px">
    <use :xlink:href="realIconName"></use>
  </svg>
</template>

<script>
import sprite from "svg-sprite-loader/runtime/browser-sprite.js";

export default {
  props: {
    iconName: {
      type: String,
      required: true,
      default: "icon-zdgl",
    },
  },
  computed: {
    realIconName() {
      return `#${this.iconName}`;
    },
  },
  async mounted() {
    await this.$nextTick();
    const symbolIcon = require(`./svg/${this.iconName}.svg`);
    sprite.add(symbolIcon);
  },
};
</script>
