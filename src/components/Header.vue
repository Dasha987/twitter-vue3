<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <router-link class="navbar-logo" to="/">{{ title }}</router-link>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="(link, index) in links" :key="index">
              <router-link class=".navbar-link" :to="link.url">
                {{ link.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { app, links } from '@/_config.js'

export default {
  data() {
    return {
      title: app.title,
      links: links
    }
  }
}
</script>
