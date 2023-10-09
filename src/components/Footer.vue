<template>
  <footer>
    <div class="container">
      <ul class="navbar-list">
        <li class="navbar-item" v-for="(link, index) in links" :key="index">
          <router-link class=".navbar-link" :to="link.url">
            {{ link.title }}
          </router-link>
        </li>
      </ul>

      <!-- link to course -->
      <ul class="navbar-list navbar-list-footer">
        <li class="navbar-item navbar-item-footer">Сделано Макеевой Дарьей</li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { links } from '@/_config.js'

export default {
  data() {
    return {
      links: links
    }
  }
}
</script>
