<template>
  <div>
    <PartialsTopBar />

    <div class="container mx-auto">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"; 
import PartialsTopBar from "@/components/Partials/TopBar.vue"

export default defineComponent({
  props: {},
  components: { PartialsTopBar },
  name: "DefaultLayout",
})
  
</script>
