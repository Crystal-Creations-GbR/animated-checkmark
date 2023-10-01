import { defineNuxtModule, createResolver, addComponent } from "@nuxt/kit";

export default defineNuxtModule({
  async setup() {
    const resolver = createResolver(import.meta.url);

    await addComponent({
      name: "AnimatedCheckmark",
      filePath: resolver.resolve("components/AnimatedCheckmark.vue"),
    });
  },
});
