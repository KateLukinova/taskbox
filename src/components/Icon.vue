<template>
    <svg class="icon" :fill="fillColor" :stroke="strokeColor">
        <use :href="`/sprite.svg#${name}`"></use>
    </svg>
</template>

<script>
export default {
    name: 'MIcon',
    props: {
        name: {type: String, required: true},
        fillColor: {type: String, default: ''},
        strokeColor: {type: String, default: ''},
    }
}
</script>

<style lang="scss">
.icon {
  width: 1.2rem;
  height: 1.2rem;
  fill: currentColor;
  stroke: currentColor;
}
</style>
