<template>
  <svg
    :class="classes"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="https://www.w3.org/2000/svg"
  >
    <ellipse cx="12" cy="12" rx="6" ry="9" stroke-width="2" />
    <path d="M12 3c-2 4-2 14 0 18" stroke-width="2" stroke-linecap="round" />
  </svg>
  
</template>

<script>
export default {
  name: 'LogoIcon',
  props: {
    classes: {
      type: String,
      default: 'w-5 h-5'
    }
  }
}
</script>


