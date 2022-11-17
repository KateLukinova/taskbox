<template>
    <svg class="icon" :fill="fillColor" :stroke="strokeColor">
        <use :href="`/sprite.svg#${name}`"></use>
    </svg>
</template>

<script>
export default {
    name: 'IconUI',
    props: {
        name: {type: String, required: true},
        fillColor: {type: String, default: ''},
        strokeColor: {type: String, default: ''},
    }
}
</script>

<style lang="scss">
.icon {
  width: 24px;
  height: 24px;
}
</style>