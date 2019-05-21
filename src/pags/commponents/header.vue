<template>
  <div>
    <div class="top-img">
      <img class="top-img-contain" src="//fuss10.elemecdn.com/c/73/16ccf10060b23eaa6f747dd462790png.png?imageMogr/format/webp/thumbnail/750x/">
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" :src="seller.avatar">
      </div>
    </div>
    <div class="shopInfo">
      <h2 class="shop-name" @click="showMoIn">
        {{seller.name}}
      </h2>
      <div class="shop-index">
        <span>评价{{seller.score}}&nbsp;</span>
        <span>月销量{{seller.sellCount}}&nbsp;</span>
        <span>
          {{seller.description}}
          <span>约{{seller.deliveryTime}}分钟&nbsp;</span>
        </span>
      </div>
      <div class="on-sale" @click="showOnSale">
        <div class="on-sale-first">
          <span v-for="item of seller.supports" :key="item.type">{{item.description}};</span>
          <span>个优惠</span>
        </div>
      </div>
    </div>
    <div class="more-info" v-show="showMore">
      <div class="mo-info-back" @click="closeMo"></div>
      <div class="mo-info">
        <div class="mo-info-name">{{seller.name}}</div>
        <ul class="mo-info-index">
          <li>
            <span>{{seller.score}}分</span>
            <h5>评分</h5>
          </li>
        </ul>
        <div>
          欢迎光临，用餐高峰期请提前下单，谢谢
        </div>
      </div>
    </div>
    <div class="more-onsale" v-show="showOnsale">
       <div class="mo-on-back" @click="closeMoOn"></div>
       <div class="mo-omInfo">
         <div>优惠活动</div>
         <div v-for="item of seller.supports" :key="item.type">{{item.description}}</div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    seller: Object
  },
  data () {
    return {
      showMore: false,
      showOnsale: false
    }
  },
  methods: {
    showMoIn () {
      this.showMore = true
    },
    closeMo () {
      this.showMore = false
    },
    showOnSale () {
      this.showOnsale = true
    },
    closeMoOn () {
      this.showOnsale = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .top-img-contain
    width 100%
    height 100%
  .icon
    position relative
    display flex
    flex-direction column
    align-items center
    top -1rem
    .icon-img
      position relative
      width 2rem
      height 2rem
      .icon-img-content
        width 100%
        height 100%
  .shopInfo
    position relative
    display flex
    top -0.5rem
    flex-direction column
    align-items center
    .shop-name
      font-size: .546667rem;
      font-weight: 700;
      white-space: nowrap;
    .shop-index
      text-align center
      height 0.32rem
      padding-top 0.2rem
      color #a5a2a2
    .on-sale
      display flex
      flex-direction row
      flex-wrap nowrap
      align-items center
      text-align center
      height 0.32rem
      width 8rem
      padding-top 0.32rem
      .on-sale-first
        flex= 1
        overflow hidden
      .discount
        background #cccccc
        color red
        border-radius 0.2rem
  .more-info
    z-index 2
    position fixed
    .mo-info-back
      position fixed
      top 0
      width 100%
      height 100%
      background rgba(0,0,0,0.5)
    .mo-info
      position fixed
      top 30%
      left 1.1rem
      padding 0.3rem 0.5rem
      border-radius 0.5rem
      text-align center
      background white
  .more-onsale
    position fixed
    z-index 2
    .mo-on-back
      position fixed
      top 0
      width 100%
      height 100%
      background rgba(0,0,0,0.5)
    .mo-omInfo
      position fixed
      top 60%
      width 100%
      height 40%
      text-align center
      background white
</style>
