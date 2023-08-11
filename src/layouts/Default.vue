<template>
  <div class="common-layout">
    <div class="header-wrapper">
      <HeaderComponent></HeaderComponent>
    </div>
    <div class="main-wrapper">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default defineComponent({
  name: "DefaultLayout",
  components: {
    HeaderComponent,
  },
  setup() {
    const store = useStore();
    const isMobile = computed(
      (): boolean => store.getters["settings/isMobile"]
    );

    return {
      isMobile,
    };
  },
});
</script>

<style lang="scss" scoped>
.header-wrapper {
  box-shadow: 0 4px 2px -2px rgb(0 0 0 / 14%);
}
.main-wrapper {
  display: block;
  flex: 1;
  box-sizing: border-box;
}
</style>
