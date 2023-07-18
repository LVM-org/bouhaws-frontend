<template>
  <div>
    <!-- <PartialsTopBar /> -->

    <div class="container mx-auto">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {},
  components: {},
  name: "DefaultLayout",
})
  
</script>
