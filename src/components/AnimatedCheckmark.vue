<!--
Copyright (c) 2022 by Crystal Creations GbR and Johannes Huther
Copyright (c) 2017 by Simon Wuyts (https://codepen.io/simonwuyts/pen/mmMYzx)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR
THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 -->
<template>
  <svg
    class="success-animation animated"
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="70"
    viewBox="0 0 70 70"
  >
    <path
      class="success-animation-result"
      :style="style"
      d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"
    />
    <circle
      class="success-animation-circle"
      cx="35"
      cy="35"
      r="24"
      :style="style"
      stroke-width="2"
      stroke-linecap="round"
    />
    <polyline
      class="success-animation-check"
      :style="style"
      stroke-width="2"
      points="23 34 34 43 47 27"
    />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

/**
 * A checkmark animation wrapped in a Vue component based on a codepen by Simon Wuyts.
 */
const props = defineProps({
  /**
   * The color of the checkmark.
   *
   * Defaults to white.
   */
  color: { type: String, default: "white" },
});

const style = computed(() => {
  return `stroke: ${props.color}; fill: ${props.color};`;
});
</script>

<style lang="scss" scoped>
.success-animation {
  height: 150px;
  width: 150px;

  $circle-length: 151px;
  $check-length: 36px;

  @keyframes scaleAnimation {
    0% {
      opacity: 0;
      transform: scale(1.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes drawCircle {
    0% {
      stroke-dashoffset: $circle-length;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes drawCheck {
    0% {
      stroke-dashoffset: $check-length;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .success-animation-circle {
    stroke-dasharray: $circle-length $circle-length;
    fill: transparent !important;
  }

  .success-animation-check {
    stroke-dasharray: $check-length $check-length;
    fill: transparent !important;
  }

  .success-animation-result {
    opacity: 0;
    stroke: transparent !important;
  }

  &.animated {
    animation: 1s ease-out 0s 1 both scaleAnimation;

    .success-animation-circle {
      animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both drawCircle,
        0.3s linear 0.9s 1 both fadeOut;
    }

    .success-animation-check {
      animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both drawCheck,
        0.3s linear 0.9s 1 both fadeOut;
    }

    .success-animation-result {
      animation: 0.3s linear 0.9s both fadeIn;
    }
  }
}
</style>
