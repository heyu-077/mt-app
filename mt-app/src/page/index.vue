<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu />
      </el-col>
      <el-col :span="19">
        <m-life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-container :nav="homeHotel" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-container :nav="maoyanMovie" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MMenu from '@/components/index/menu.vue'
import MLife from '@/components/index/life.vue'
import MContainer from '@/components/index/container.vue'
export default {
  data () {
    return {
      homeHotel: {
        class: 'istyle',
        title: '推荐民宿',
        navlist: [
          {
            text: '天津',
            type: 'tianjin'
          },
          {
            text: '济南',
            type: 'jinan'
          },
          {
            text: '大连',
            type: 'dalian'
          },
          {
            text: '太原',
            type: 'taiyuan'
          },
          {
            text: '石家庄',
            type: 'sjzhuang'
          },
          {
            text: '秦皇岛',
            type: 'qhdao'
          },
          {
            text: '呼和浩特',
            type: 'huhaote'
          },
          {
            text: '潍坊',
            type: 'weifang'
          }
        ],
        list: [
          {
            img:
              'http://p1.meituan.net/iphoenix/0ec877e2139a6162c3e16898329281416261369.jpg@740w_416h_1e_1c',
            title:
              '糯米【猫咪的下午茶】/观影大床房/投影大屏VIP会员/天津之眼/意式风情街/大悦城/鼓楼/古文化街/和平路滨江道/五大道',
            sub_title: '整套1居室·可住2人 | 南市',
            price: '￥299'
          },
          {
            img:
              'https://img.meituan.net/phoenix/2a3e7439fb75b3ddf9961477f49c0290164506.jpg@740w_416h_1e_1c',
            title: '津南大学城 独卫民宿 大屏投影',
            sub_title: '整套2居室·可住2人 | 津南大学城',
            price: '￥88'
          },
          {
            img:
              'http://p1.meituan.net/iphoenix/fe561c852c01e3302b8235a87fe090784110401.jpg@740w_416h_1e_1c',
            title:
              '糯米【极简】观影大床房/天津之眼/意式风情街/大悦城/鼓楼/古文化街/和平路滨江道/五大道/投影大屏VIP会员',
            sub_title: '整套1居室·可住2人 | 南市',
            price: '￥198'
          },
          {
            img:
              'https://img.meituan.net/phoenix/175c0ece503eba4a94fd105ce7dddd39415399.jpg@740w_416h_1e_1c',
            title:
              '【九月美宿】抖音悠悠床少女心风格拍照地/天津之眼/古文化街/观天津之眼全景/100寸投影',
            sub_title: '整套1居室·可住2人 | 老城厢/鼓楼',
            price: '￥158'
          },
          {
            img:
              'https://img.meituan.net/phoenix/3281e75dee91c41904cd7739c66cca17351749.jpg@740w_416h_1e_1c',
            title: '【九月●美宿】NO.4/浓浓北欧情/鼓楼/古文化街/100寸投影',
            sub_title: '整套1居室·可住2人 | 老城厢/鼓楼',
            price: '￥158'
          },
          {
            img:
              'https://img.meituan.net/phoenix/622892462481be37d1f969cd3e972842411767.jpg@740w_416h_1e_1c',
            title: '空港华明投影loft,机场，奥特莱斯，SM,肿瘤医院附近',
            sub_title: '整套1居室·可住2人 | 空港/华明镇',
            price: '￥168'
          }
        ]
      },
      maoyanMovie: {
        class: 'youhui',
        title: '猫眼电影',
        navlist: [
          {
            text: '正在热映',
            type: 'now'
          },
          {
            text: '即将上映',
            type: 'next'
          }
        ],
        list: [{
          img:
              'https://p0.meituan.net/moviemachine/38af7caf2c5d01098b9e5c24b02d2d781787995.jpg@267w_371h_1e_1c'
        }, {
          img:
               'https://p0.meituan.net/movie/df84690ded848edf709187eae23a7969866455.jpg@267w_371h_1e_1c'
        }, {
          img:
               'https://p1.meituan.net/movie/63696901c00a1aea8fcc62ba873bb6d41014216.jpg@267w_371h_1e_1c'
        }]
      }
    }
  },
  components: {
    MMenu,
    MLife,
    MContainer
  }
}
</script>
