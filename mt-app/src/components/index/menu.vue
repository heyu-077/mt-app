<template>
    <div class="m-menu">
        <dl class="nav" @mouseleave="menuLeave">
            <dt>全部分类</dt>
            <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
                <i :class="item.icon"></i>
                {{ item.title }}
                <span class="arrow"></span>
            </dd>
            <!-- <dd>
                <i class="takeout"></i>
                外卖
                <span class="arrow"></span>
            </dd>
            <dd>
                <i class="hotel"></i>
                酒店
                 <span class="arrow"></span>
            </dd> -->
        </dl>
        <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
            <template v-for="(item,index) in curDetail.children">
                <h4 :key="index">{{ item.title }}</h4>
                <span v-for="(c,i) in item.children" :key="c+'_'+i">{{ c }}</span>
            </template>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      curDetail: null,
      menuList: [{
        title: '美食',
        icon: 'food',
        children: [{
          title: '美食',
          children: ['代金券', '甜点饮品', '自助餐', '小吃快餐', '日韩料理', '聚餐宴请']
        }]
      }, {
        title: '外卖',
        icon: 'takeout',
        children: [{
          title: '外卖',
          children: ['外卖']
        }]
      }, {
        title: '酒店',
        icon: 'hotel',
        children: [{
          title: '酒店星级',
          children: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
        }]
      }]
    }
  },
  methods: {
    menuEnter (item) {
      this.curDetail = item
    },
    menuLeave () {
      this.timer = setTimeout(() => {
        this.curDetail = null
      }, 200)
    },
    detailEnter () {
      clearTimeout(this.timer)
    },
    detailLeave () {
      this.curDetail = null
    }
  }
}
</script>

<style lang="scss">
    @import '@/assets/css/index/index.scss';
</style>
