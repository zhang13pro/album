<script setup lang="ts">
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <button
    p="y-2 x-4"
    font="semibold"
    shadow="lg"
    text="white"
    bg="green-500 hover:green-700"
    border="rounded-lg none "
    cursor="pointer"
    @click="count++"
  >
    count is: {{ count }}
  </button>
</template>
