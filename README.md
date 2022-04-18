# @crystal-creations/animated-checkmark
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Crystal-Creations-GbR/animated-checkmark?sort=semver)](https://github.com/Crystal-Creations-GbR/animated-checkmark/releases) [![GitHub](https://img.shields.io/github/license/Crystal-Creations-GbR/animated-checkmark)](LICENSE) [![Build and publish npm package](https://github.com/Crystal-Creations-GbR/animated-checkmark/actions/workflows/publish.yml/badge.svg)](https://github.com/Crystal-Creations-GbR/animated-checkmark/actions/workflows/publish.yml) [![npm](https://img.shields.io/npm/v/@crystal-creations/animated-checkmark)](https://www.npmjs.com/package/@crystal-creations/animated-checkmark) [![npm](https://img.shields.io/npm/dw/@crystal-creations/animated-checkmark)](https://www.npmjs.com/package/@crystal-creations/animated-checkmark)

A checkmark animation wrapped in a Vue component based on a [codepen](https://codepen.io/simonwuyts/pen/mmMYzx) by Simon Wuyts.

## Usage
1. Install with

   `npm install @crystal-creations/animated-checkmark`

2. Add the following to your Vue `main.ts`.
    ```ts
    import AnimatedCheckmark from "@crystal-creations/animated-checkmark";
    
    // ...
    
    new Vue({
      // ...
      render: (h) => h(App),
    }).$mount("#app");
    
    Vue.component("AnimatedCheckmark", AnimatedCheckmark);
    ```

3. Add the component to your Vue component.
    ```vue
    <template>
      <AnimatedCheckmark></AnimatedCheckmark>
    </template>
    ```
