<template>
    <div class="page-changeCity">
        <el-row>
            <province />
        </el-row>
        <el-row>
            <hot title="热门城市:" :list="hotCityList" />
        </el-row>
        <el-row>
            <hot title="最近访问:" :list="recentCityList" />
        </el-row>
        <el-row>
            <categroy />
        </el-row>
    </div>
</template>

<script>
import Province from '@/components/changeCity/province.vue'
import Hot from '@/components/changeCity/hot.vue'
import Categroy from '@/components/changeCity/categroy.vue'
import api from '@/api/index.js'
export default {
  data () {
    return {
      hotCityList: [],
      recentCityList: []
    }
  },
  created () {
    api.getHotCity().then(res => {
      console.log(res)
      this.hotCityList = res.data.data.map(item => item.name)
    })
    api.getRecentCity().then(res => {
      this.recentCityList = res.data.data.map(item => item.name)
    })
  },
  components: {
    Province,
    Hot,
    Categroy
  }
}
</script>
