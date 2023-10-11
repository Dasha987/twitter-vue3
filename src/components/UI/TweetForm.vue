<template>
  <form @submit.prevent="onSubmit">
    <textarea v-model="value"></textarea>
    <input class="btn btnPrimary" type="submit" />
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
  emits: ['handleSubmit'],
  setup(_, { emit }) {
    const value = ref('')
    const onSubmit = () => {
      emit('handleSubmit', value.value)
      value.value = ''
    }

    return { onSubmit, value }
  }
}
</script>
