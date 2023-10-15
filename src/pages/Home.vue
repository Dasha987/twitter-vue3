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
        @onClickLike="handleAddLike(item)"
        :id="item.id"
        :date="item.date"
        :likes="item.likes"
        :imgUrl="item.avatar"
      >
        {{ item.body }}
      </Tweet>
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
import { ref, computed, reactive, onMounted } from 'vue'
import http from '@/http-common'
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
    const isLoading = ref(true)

    const data = ref([])
    onMounted(() => getTweets())
    const getTweets = () => {
      http
        .get('/tweets.json')
        .then(res => {
          const nexData = []
          if (res.data) {
            Object.keys(res.data).forEach(key => {
              const item = res.data[key]
              nexData.push({ id: key, ...item })
            })
          }
          data.value = nexData
          isLoading.value = false
        })
        .catch(err => console.log(err))
    }

    const sortBy = ref('')
    const dataSortered = computed(() => {
      return data.value.sort((item, itemNext) => {
        if (item[sortBy.value] > itemNext[sortBy.value]) return 1
        if (item[sortBy.value] < itemNext[sortBy.value]) return -1
        return 0
      })
    })

    const handleAddLike = tweet => {
      tweet.likes = tweet.likes + 1

      http
        .put(`/tweets/${tweet.id}.json`, tweet)
        .then(() => {})
        .catch(err => console.log(err))
    }

    const tweet = reactive({
      body: '',
      avatar: null,
      likes: 0,
      date: null
    })
    const handleAddTweet = body => {
      tweet.avatar = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${Date.now()}`
      tweet.date = new Date(Date.now()).toLocaleString()
      tweet.body = body
      http
        .post(`/tweets.json`, tweet)
        .then(() => {
          handleModalShow()
          // getTweets()
          data.value.push({ ...tweet })
        })
        .catch(err => console.log(err))
    }

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
