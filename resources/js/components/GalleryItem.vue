<template>
  <div class="gallery-item">
    <slot />
  </div>
</template>

<script>
export default {
  props: ["image", "thumbnail", "removable"],
};
</script>

<style lang="scss">
$bg-color-200: rgba(var(--colors-primary-200), 0.4);
$bg-color: #f9f9f9;
$border-radius: 10px;

.gallery {
  &.editable {
    .gallery-item {
      cursor: grab;
    }
  }

  .gallery-item {
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    border-radius: $border-radius;
    background-color: $bg-color-200;

    .gallery-item-info {
      display: flex;
      background-color: transparentize($bg-color, 0.2);
      z-index: 10;
    }
  }
}
</style>
