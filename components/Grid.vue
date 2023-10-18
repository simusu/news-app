<template>
  <div :class="$mainClassName(className, modifiers)">
    <div :class="`${className}__body`">
      <slot></slot>
    </div>
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
  data()
  {
    return {
      className: 'grid',
    };
  },
};
</script>

<style lang="scss">
.grid {
  $root: &;

  width: 100%;

  &__body {
    display: flex;
    flex-wrap: wrap;

    .-column>& {
      display: block;
    }

    .-align-center>& {
      align-items: center;
    }
  }

  @for $level from 1 through 20 {
    $margin: $level * 2;

    &.-col-space-#{$margin} {
      &>#{$root}__body {
        width: calc(100% + #{$margin}px);
        margin-left: #{-1 * $margin}px;

        &>.grid-item {
          padding-left: #{$margin}px;
        }
      }
    }

    &.-row-space-#{$margin} {
      &>#{$root}__body {
        margin-top: #{-1 * $margin}px;

        &>.grid-item {
          padding-top: #{$margin}px;
        }
      }
    }
  }
}
</style>
