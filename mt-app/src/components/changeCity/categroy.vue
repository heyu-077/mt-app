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
      :id="'city-'+index"
    >
      <dt>{{ index }}</dt>
      <dd>
        <span v-for="city in item" :key="city.id">{{ city.name }}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data () {
    return {
      characterList: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      cityList: [],
      cityGroup: null
    }
  },
  created () {
    const data = [
      {
        id: 60,
        name: '青岛',
        pinyin: 'qingdao',
        acronym: 'qd',
        rank: 'B',
        firstChar: 'Q'
      },
      {
        id: 361,
        name: '兰州',
        pinyin: 'lanzhou',
        acronym: 'lz',
        rank: 'C',
        firstChar: 'L'
      },
      {
        id: 52,
        name: '无锡',
        pinyin: 'wuxi',
        acronym: 'wx',
        rank: 'B',
        firstChar: 'W'
      },
      {
        id: 1,
        name: '北京',
        pinyin: 'beijing',
        acronym: 'bj',
        rank: 'S',
        firstChar: 'B'
      },
      {
        id: 114,
        name: '昆明',
        pinyin: 'kunming',
        acronym: 'km',
        rank: 'B',
        firstChar: 'K'
      },
      {
        id: 10,
        name: '上海',
        pinyin: 'shanghai',
        acronym: 'sh',
        rank: 'S',
        firstChar: 'S'
      },
      {
        id: 57,
        name: '武汉',
        pinyin: 'wuhan',
        acronym: 'wh',
        rank: 'A',
        firstChar: 'W'
      }
    ]

    const obj = {}
    data.forEach((item, index) => {
      if (!obj[item.firstChar.toUpperCase()]) {
        obj[item.firstChar.toUpperCase()] = []
      }
      obj[item.firstChar.toUpperCase()].push(item)
    })
    this.cityGroup = obj
  }
}
</script>

<style lang="scss">
@import "@/assets/css/changeCity/categroy.scss";
</style>
