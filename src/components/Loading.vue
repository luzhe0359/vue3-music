<template>
  <div class="mt-8 flex justify-center items-center">
    <div class="loader"></div>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:math';
$colors: rgba(225, 20, 98, 0.75) rgba(61, 184, 143, 0.75) rgba(111, 202, 220, 0.75) rgba(233, 169, 32, 0.75);
$size: 2.5em;
$thickness: 0.5em;

// Calculated variables.
$lat: math.div($size - $thickness, 2);
$offset: $lat - $thickness;

.loader {
  position: relative;
  width: $size;
  height: $size;
  transform: rotate(165deg);

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: $thickness;
    height: $thickness;
    border-radius: math.div($thickness, 2);
    transform: translate(-50%, -50%);
  }

  &:before {
    animation: before 2s infinite;
  }

  &:after {
    animation: after 2s infinite;
  }
}

@keyframes before {
  0% {
    width: $thickness;
    box-shadow: $lat (-$offset) nth($colors, 1), (-$lat) $offset nth($colors, 3);
  }
  35% {
    width: $size;
    box-shadow: 0 (-$offset) nth($colors, 1), 0 $offset nth($colors, 3);
  }
  70% {
    width: $thickness;
    box-shadow: (-$lat) (-$offset) nth($colors, 1), $lat $offset nth($colors, 3);
  }
  100% {
    box-shadow: $lat (-$offset) nth($colors, 1), (-$lat) $offset nth($colors, 3);
  }
}

@keyframes after {
  0% {
    height: $thickness;
    box-shadow: $offset $lat nth($colors, 2), (-$offset) (-$lat) nth($colors, 4);
  }
  35% {
    height: $size;
    box-shadow: $offset 0 nth($colors, 2), (-$offset) 0 nth($colors, 4);
  }
  70% {
    height: $thickness;
    box-shadow: $offset (-$lat) nth($colors, 2), (-$offset) $lat nth($colors, 4);
  }
  100% {
    box-shadow: $offset $lat nth($colors, 2), (-$offset) (-$lat) nth($colors, 4);
  }
}
</style>
