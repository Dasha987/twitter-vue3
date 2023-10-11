<template>
  <div v-if="isLoading">
    <Spinner />
  </div>
  <div v-else>
    <div class="tweet-menu-wrapper">
      <div class="tweet-menu">
        <label for="sortBy">Сортировать:</label>
        <select v-model="sortBy" name="sortBy">
          <option value="default"></option>
          <option value="likes">По лайкам</option>
          <option value="body">По содержимому</option>
        </select>
      </div>
    </div>
    <div
      class="tweets__wrapper"
      v-for="(item, index) in dataSortered"
      :key="index"
    >
      <Tweet
        @onClickLike="handleAddLike"
        :id="item.id"
        :name="item.date"
        :likes="item.likes"
        :imgUrl="item.avatar"
        >{{ item.body }}</Tweet
      >
    </div>
    <button @click="handleModalShow" class="btn btnTweet btnTweetHome">
      Добавить
    </button>
    <Modal title="Новый твит" v-if="isShowModal" @onModalShow="handleModalShow">
      <TweetForm @handleSubmit="handleAddTweet" />
    </Modal>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import Spinner from '@/components/UI/Spinner'
import Modal from '@/components/UI/Modal'
import Tweet from '@/components/UI/Tweet'
import TweetForm from '@/components/UI/TweetForm'

export default {
  components: {
    Spinner,
    Modal,
    Tweet,
    TweetForm
  },
  setup() {
    const data = ref([
      {
        id: 1,
        body: 'Привет',
        avatar:
          'https://tocode.ru/static/_secret/bonuses/1/avatar-1Tq9kaAql.png',
        likes: 10,
        date: '10-04-2021'
      },
      {
        id: 2,
        body: 'Привет, мир',
        avatar:
          'https://tocode.ru/static/_secret/bonuses/1/avatar-1Tq9kaAql.png',
        likes: 8,
        date: '14-04-2021'
      },
      {
        id: 3,
        body: 'Привет, животные',
        avatar:
          'https://tocode.ru/static/_secret/bonuses/1/avatar-1Tq9kaAql.png',
        likes: 18,
        date: '10-05-2021'
      },
      {
        id: 4,
        body: 'Привет, друзья',
        avatar:
          'https://tocode.ru/static/_secret/bonuses/1/avatar-1Tq9kaAql.png',
        likes: 15,
        date: '10-06-2021'
      }
    ])

    const sortBy = ref('')
    const dataSortered = computed(() => {
      return data.value.sort((item, itemNext) => {
        if (item[sortBy.value] > itemNext[sortBy.value]) return 1
        if (item[sortBy.value] < itemNext[sortBy.value]) return -1
        return 0
      })
    })

    const handleAddLike = id => {
      console.log(id)
    }

    const handleAddTweet = body => {
      data.value.push({
        id: data.value.length + 1,
        body,
        avatar:
          'https://tocode.ru/static/_secret/bonuses/1/avatar-1Tq9kaAql.png',
        likes: 0,
        date: new Date(Date.now()).toLocaleString()
      })
      handleModalShow()
    }

    const isLoading = ref(true)
    setTimeout(() => {
      isLoading.value = false
    }, 3000)

    const isShowModal = ref(false)
    const handleModalShow = () => {
      const isNextShowModal = (isShowModal.value = !isShowModal.value)
      isShowModal.value = isNextShowModal
    }

    return {
      isLoading,
      isShowModal,
      handleModalShow,
      dataSortered,
      sortBy,
      handleAddLike,
      handleAddTweet
    }
  }
}
</script>
