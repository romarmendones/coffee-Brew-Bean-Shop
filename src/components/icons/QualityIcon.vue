<template>
  <svg 
    :class="classes" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      stroke-width="2" 
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
    />
  </svg>
</template>

<script>
export default {
  name: 'QualityIcon',
  props: {
    classes: {
      type: String,
      default: 'w-10 h-10'
    }
  }
}
</script>
