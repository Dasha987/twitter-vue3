<template>
  <teleport to="body">
    <transition name="modal">
      <div class="modal__wrapper" @click="handleCloseModal">
        <div class="modal-content" @click.stop="">
          <div class="modal-header">
            <span class="modal-title">{{ title }}</span>
            <span class="button-close" @click="handleCloseModal">&times;</span>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Modal'
    }
  },
  emits: ['onModalShow'],
  setup(_, { emit }) {
    const handleCloseModal = () => {
      emit('onModalShow')
    }

    return { handleCloseModal }
  }
}
</script>
