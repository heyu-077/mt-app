<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item,index) in nav.navlist"
        :key="index"
        :class="{active: kind == item.type}"
        :data-type="item.type">
        {{ item.text }}
      </dd>
      <!-- <dd :class="{active: kind == 'jinan'}" data-type="jinan">济南</dd>
      <dd :class="{active: kind == 'dalian'}" data-type="dalian">大连</dd>
      <dd :class="{active: kind == 'taiyuan'}" data-type="taiyuan">太原</dd>
      <dd :class="{active: kind == 'sjzhuang'}" data-type="sjzhuang">石家庄</dd>
      <dd :class="{active: kind == 'qhdao'}" data-type="qhdao">秦皇岛</dd>
      <dd :class="{active: kind == 'huhaote'}" data-type="huhaote">呼和浩特</dd>
      <dd :class="{active: kind == 'weifang'}" data-type="weifang">潍坊</dd> -->
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in nav.list" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.img" class="image"/>
          <div class="cbody">
              <p class="product-title">
                {{ item.title }}
              </p>
              <p class="sub-title">
                <span>{{ item.sub_title }}</span>
              </p>
              <p class="price-number numfont price">
                <span>{{ item.price }}</span>
              </p>
          </div>
        </el-card>
       </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      kind: 'tianjin'
    }
  },
  props: ['nav'],
  methods: {
    over (e) {
      // console.log(e.target)
      const tagName = e.target.tagName.toLowerCase()
      if (tagName !== 'dd') {
        return false
      }
      this.kind = e.target.getAttribute('data-type')
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/index/homehotel.scss";
</style>
