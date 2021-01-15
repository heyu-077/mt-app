<template>
  <div class="category">
    <dl class="m-categroy">
      <dt>按拼音首字母选择:</dt>
      <dd v-for="item in characterList" :key="item">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl
      class="m-categroy-section"
      v-for="(item, index) in cityGroup"
      :key="item.id"
      :id="'city-' + index"
    >
      <dt>{{ index }}</dt>
      <dd>
        <span v-for="city in item" :key="city.id" @click="changeCity(city)">{{
          city.name
        }}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  data () {
    return {
      characterList: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      cityList: [],
      cityGroup: null
    }
  },
  created () {
    api.getCityList().then((res) => {
      // console.log(res.data.data)
      const obj = {}
      res.data.data.forEach((item, index) => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = []
        }
        obj[item.firstChar.toUpperCase()].push(item)
      })
      this.cityGroup = obj
    })
  },
  methods: {
    changeCity (item) {
      this.$store.dispatch('setPosition', item)
      this.$router.push({name: 'index'})
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/changeCity/categroy.scss";
</style>
