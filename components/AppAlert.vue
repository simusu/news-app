<template>
    <div :class="className">
        <slot />
</div>
</template>

<script>
export default {
    data() {
        return {
            className: "app-alert",
        };
    },
};
</script>


<style lang="scss" scoped>
.app-alert {
    padding-bottom: 30px;
    text-align: center;
    font-size: $font-size-large;
    font-weight: $font-weight-bold;
}
</style>