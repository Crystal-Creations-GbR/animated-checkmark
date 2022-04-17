# @crystal-creations/animated-checkmark
A checkmark animation wrapped in a Vue component based on a codepen by Simon Wuyts.

## Usage
1. Install with

   `npm install @crystal-creations/animated-checkmark@https://github.com/Crystal-Creations-GbR/animated-checkmark`

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