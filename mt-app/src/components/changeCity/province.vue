<template>
  <div>
    <span class="name">按省份选择:</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
      className="province"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      className="city"
    />
    <span>直接搜索:</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入城市中文或拼音"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option
        v-for="(item,index) in searchList"
        :key="index"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from './select.vue'
import api from '@/api/index.js'
export default {
  data () {
    return {
      provinceList: [],
      province: '省份',
      cityList: [],
      city: '城市',
      cityActive: false,
      provinceActive: false,
      searchList: [ '合肥', '蚌埠', '淮南', '六安', '黄山', '阜阳', '滁州', '巢湖' ],
      searchWord: '',
      loading: false,
      cityDisabled: true
    }
  },
  created () {
    api.getProvinceList().then(res => {
      this.provinceList = res.data.data.map((item) => {
        item.name = item.provinceName
        return item
      })
      // this.cityList = res.data.data.cityInfoList.map(item=>item.name);
    })
  },
  methods: {
    changeProvinceActive (flag) {
      this.provinceActive = flag
      if (flag) {
        this.cityActive = false
      }
    },
    changeCityActive (flag) {
      this.cityActive = flag
      if (flag) {
        this.provinceActive = false
      }
    },
    remoteMethod (val) {
      console.log(val)
    },
    changeProvince (item) {
      this.province = item.name
      this.cityDisabled = false
      this.cityList = item.cityInfoList
    },
    changeCity (item) {
      this.city = item.name
      this.$store.dispatch('setPosition', item)
      this.$router.push({name: 'index'})
    }
  },
  components: {
    MSelect
  }
}
</script>

<style lang="scss">
@import "@/assets/css/changeCity/iselect.scss";
</style>
