<template>
  <div>
    <span
      :class="`inline-block relative w-14 h-7  rounded-full focus:outline-none 
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
      <span class="toggle-indicator  absolute h-5 w-5 left-1 bottom-1 bg-white rounded-full  " :style="value ? 'transform: translateX(28px);' : 'transform: translateX(-2px);'" />
    </span>
  </div>
</template>

<script setup>
const props = defineProps({  
  value: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  }
})
const emit = defineEmits(['toggle']) 
const toggle = () => {
  if (props.disabled) return;  
  emit('toggle', !props.value)
}
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
