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
export default {
  data () {
    return {
      hotCityList: ['北京', '上海', '广州', '深圳', '成都'],
      recentCityList: ['北京', '门头沟区']
    }
  },
  components: {
    Province,
    Hot,
    Categroy
  }
}
</script>
