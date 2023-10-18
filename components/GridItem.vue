<template>
  <div :class="$mainClassName(className, modifiers)">
    <slot />
  </div>
</template>

<script>

export default {
  props: {
    id: {
      type: String,
    },
    modifiers: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      className: 'grid-item',
    };
  },
};
</script>

<style lang="scss" scoped>
.grid-item {
  box-sizing: border-box;
  display: flex;

  @for $level from 1 through 12 {
    &.-col-#{$level} {
      width: calc(100% * ($level / 12));
      max-width: calc(100% * ($level / 12));
    }
  }

  &.-displaycolumn {
    flex-direction: column;
  }
}
</style>
