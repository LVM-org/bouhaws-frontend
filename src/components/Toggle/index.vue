<template>
  <div>
    <span
      :class="`inline-block relative w-[50px] h-[23px]  rounded-full focus:outline-none 
      ${disabled ? '!cursor-not-allowed' : 'cursor-pointer'} `"
      role="checkbox"
      tabindex="0"
      @keydown.space.prevent="toggle"
      @click="toggle"
      :aria-checked="value.toString()"
    >
      <span
        class="toggle-background absolute rounded-full h-full w-full"
        :class="value ? 'bg-[#17ce89]' : 'bg-[#EBEBE5]'"
      />
      <span
        class="toggle-indicator absolute h-[25px] w-5 left-1 bottom-1 bg-white rounded-full"
        :style="
          value
            ? 'transform: translateX(28px);'
            : 'transform: translateX(-2px);'
        "
      />
    </span>
  </div>
</template>
 
<script lang="ts">
import { defineComponent } from "vue"; 

export default defineComponent({
  components: { 
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  
  name: "Toggle",

  setup(props, { emit }) {  
    const toggle = () => {
      if (props.disabled) return;
      emit("toggle", !props.value);
    };

    return {
      toggle
    };
  },
});
</script> 


<style scoped>
.toggle-background {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.4s ease;
}

.toggle-indicator {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease;
}
</style>
