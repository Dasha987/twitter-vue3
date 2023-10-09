<template>
  <div v-if="isLoading">
    <Spinner />
    <button class="btn">
      <Spinner :width="20" :height="20" />
    </button>
  </div>
  <h1 v-else>Home</h1>
</template>

<script>
import { ref } from 'vue'
import Spinner from '@/components/UI/Spinner'

export default {
  components: {
    Spinner
  },
  setup() {
    const isLoading = ref(true)

    setTimeout(() => {
      isLoading.value = false
    }, 3000)

    return { isLoading }
  }
}
</script>
