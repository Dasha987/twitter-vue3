<template>
  <div class="tweet">
    <div class="tweet-img__wrapper">
      <img class="tweet-img" :src="imgUrl" />
    </div>
    <div class="tweet-body">
      <span class="tweet-name">{{ name }}</span>
      <slot></slot>

      <p @click="$emit('onClickLike', id)" class="tweet-likes-counter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          />
        </svg>
        {{ likes }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true
    },
    name: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      required: true
    },
    imgUrl: {
      type: String,
      default: null
    }
  }
}
</script>
