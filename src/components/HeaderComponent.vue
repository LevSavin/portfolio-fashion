<template>
  <div class="header__wrapper">Header</div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "HeaderComponent",
  components: {},
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
.header {
  &__wrapper {
    color: $color-primary;
  }
}
</style>
