<template>
  <div class="rating">
    <div class="header">
      <div class="score">
        <p>4.8</p>
      </div>
      <div class="starts">
        <p class="starts-text">商家评分</p>
        <p class="starts-start">星星</p>
      </div>
      <div class="header-else">
        <div class="else-left">
          <div class="left-left">
            <p class="le-le-text">味道</p>
            <p class="le-le-sc">4.8</p>
          </div>
          <div class="left-right">
            <p class="le-ri-text">包装</p>
            <p class="le-ri-sc">4.8</p>
          </div>
        </div>
        <div class="else-right">
          <p class="ri-text">配送</p>
          <p class="ri-sc">4.9</p>
        </div>
      </div>
    </div>
    <div class="container">
      <ul class="total-num">
        <li class="total-one to-all">全部306</li>
        <li class="total-one">最新</li>
        <li class="total-one">好评293</li>
        <li class="total-one">差评6</li>
        <li class="total-one">有图32</li>
        <li class="total-one">味道好28</li>
      </ul>
      <p class="desc">只看有内容的评价</p>
      <ul class="many-one-rating">
        <li class="one-rating" v-for="(item,index) in ratings" :key="index">
          <div class="img-box">
            <span class="img" :style="{backgroundPositionY: 235+index*47+ 'px'}"></span>
          </div>
          <div class="info">
            <span class="info-name">{{item.username}}</span>
            <span class="info-data">{{item.rateTime}}</span>
          </div>
          <div class="rating-score">评分：{{item.score}}分</div>
          <div class="rating-content">
            <p>{{item.text}}</p>
          </div>
          <div class="rating-img-box" v-show="item.avatar!==null">
            <img class="rating-img" :src="item.avatar">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rating',
  props: {
    ratings: Array
  }
}
</script>

<style lang="stylus" scoped>
  .header
    position relative
    display flex
    padding 0.5rem 0 0.1rem 0.6rem
    line-height 0.5rem
    text-align: center;
    .score
      font-size 0.8rem
      font-weight 500
      color #ff6000
    .starts
      font-size 0.3rem
      display flex
      flex-direction column
      padding: 0 0.4rem;
      .starts-text
        text-align center
        padding-bottom 0.1rem
      .starts-start
        text-align center
    .header-else
      display flex
      flex 1
      font-size 0.3rem
      justify-content space-around
      .else-left
        display flex
        flex-direction row
        justify-content space-around
        line-height 0.3rem
        .left-left
          padding-right 0.65rem
          line-height 0.5rem
          .le-le-text
            padding-bottom 0.1rem
          .le-le-sc
            font-size 0.5rem
        .left-right
          line-height 0.5rem
          .le-ri-text
            padding-bottom 0.1rem
          .le-ri-sc
            font-size 0.5rem
      .else-right
        line-height 0.5rem
        .ri-text
          padding-bottom 0.1rem
        .ri-sc
          font-size 0.5rem
  .container
    margin-top 0.1rem
    padding 0.2rem 0.32rem 0rem
    .total-num
      padding-bottom 0.1rem
      font-size 0.32rem
      .total-one
        display: inline-block;
        margin 0 0.2rem 0.1rem 0
        padding 0.1rem
        background #7fffd43d
        border-radius 10%
      .to-all
        background #25a4bb
        color #fff
    .desc
      margin 0.3rem 0.3rem 0.2rem 0.4rem
      font-size 0.3rem
    .one-rating
      position relative
      padding 0.4rem 0 0.32rem 1.36rem
      border-bottom .013333rem solid #eee
      .img-box
        position absolute
        top 0.2rem
        left 0
        width 47px
        height 47px
        border-radius: 50%;
        .img
          display inline-block
          background url(http://shadow.elemecdn.com/faas/h5/static/sprite.3ffb5d8.png)
          background-position 0px 235px;
          background-size 47px
          width: 100%;
          height: 100%;
          border-radius: 50%;
      .info
        display flex
        align-items center
        justify-content space-between
        padding-bottom 0.1rem
      .rating-content
        font-size 0.3rem
        padding-top 0.2rem
      .rating-img
        margin 0.2rem 0
        width 2rem
        height 2rem
</style>
