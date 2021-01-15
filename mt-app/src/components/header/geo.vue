<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location-information" />
            {{ $store.state.position.name }}
            <router-link class="changeCity" :to="{name : 'changeCity'}">切换城市</router-link>
            [
               <a href="#" v-for="item in nowPosition" :key="item.id"> {{ item.name }} </a>
            ]
        </div>
        <div class="m-user">
            <router-link class="login" :to="{name : 'login'}">立即登录</router-link>
            <router-link class="register" :to="{name : 'register'}">注册</router-link>
        </div>
    </div>
</template>

<script>
import api from '@/api/index'
export default {
  created () {
    api.getPosition().then(res => {
      this.$store.dispatch('setPosition', res.data.data)
      this.nowPosition = res.data.data.nearCity
    })
  },
  data () {
    return {
      nowPosition: []
    }
  },
  watch: {
    '$store.state.position': function () {
      this.nowPosition = this.$store.state.position.nearcity
    }
  }
}
</script>
