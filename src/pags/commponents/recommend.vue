<template>
    <div class="recommend">
      <div class="re-name">商家推荐</div>
      <div class="re-content">
        <div class="re-icons">
          <div class="icon">
              <img class="img-content" src="//fuss10.elemecdn.com/1/90/007b90ff4a3c374bff7aed54dccfdjpeg.jpeg?imageMogr/format/webp/thumbnail/240x/">
              <span class="re-name">肉夹馍</span>
            <div class="re-Info">
              <span>月售55 好评100%</span>
            </div>
            <div class="re-price">
              <span>9.5</span>
            </div>
          </div>
          <div class="icon">
              <img class="img-content" src="//fuss10.elemecdn.com/1/90/007b90ff4a3c374bff7aed54dccfdjpeg.jpeg?imageMogr/format/webp/thumbnail/240x/">
              <span class="re-name">肉夹馍</span>
            <div class="re-Info">
              <span>月售55 好评100%</span>
            </div>
            <div class="re-price">
              <span>9.5</span>
            </div>
          </div>
          <div class="icon">
              <img class="img-content" src="//fuss10.elemecdn.com/1/90/007b90ff4a3c374bff7aed54dccfdjpeg.jpeg?imageMogr/format/webp/thumbnail/240x/">
              <span class="re-name">肉夹馍</span>
            <div class="re-Info">
              <span>月售55 好评100%</span>
            </div>
            <div class="re-price">
              <span>9.5</span>
            </div>
          </div>
          <div class="icon">
              <img class="img-content" src="//fuss10.elemecdn.com/1/90/007b90ff4a3c374bff7aed54dccfdjpeg.jpeg?imageMogr/format/webp/thumbnail/240x/">
              <span class="re-name">肉夹馍</span>
            <div class="re-Info">
              <span>月售55 好评100%</span>
            </div>
            <div class="re-price">
              <span>9.5</span>
            </div>
          </div>
        </div>
      </div>
      <div class="re-items">
        <div class="re-kinds">
          <ul class="re-kinds-ul">
            <li class="re-kind" v-for="(item,index) in goods"
                :key="index" @click="KindsClick(index)">
              {{item.name}}
            </li>
          </ul>
        </div>
        <div class="iconss" ref="wrapper">
          <div>
            <div class="icons" v-for="(items,index) in goods" :key="index" :ref="index">
              <div class="icon" v-for="food in items.foods" :key="items.foods.indexOf(food)">
                <img class="item-img" :src="food.image">
                <div class="icon-text">
                  <p class="icon-name">{{food.name}}</p>
                  <p class="icon-kind">{{food.description}}</p>
                  <p class="icon-num">
                    月售{{food.sellCount}}份&nbsp;<span> 好评率{{food.rating}}%</span>
                  </p>
                  <div>
                    <span class="icon-price">¥{{food.price}}起&nbsp;</span>
                    <span class="select-num">
                      <span class="sub" v-show="food.count>0" @click="subItem(food)">-</span>
                      <span class="selectNum" v-show="food.count>0">{{food.count}}</span>
                      <span class="add" @click="AddItem(food)">+</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Bscroll from 'better-scroll'
export default {
  name: 'FoodRecommend',
  props: {
    goods: Array
  },
  data () {
    return {
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  methods: {
    KindsClick (index) {
      const element = this.$refs[index][0]
      this.scroll.scrollToElement(element)
    },
    AddItem: function (food) {
      if (!food.count) {
        Vue.set(food, 'count', 1)
      } else {
        food.count += 1
      }
      this.selectFoods()
    },
    subItem: function (food) {
      if (food.count <= 0) {
        food.count = null
      } else {
        food.count -= 1
      }
      this.selectFoods()
    },
    selectFoods () {
      let foods = []
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food)
          }
        })
      })
      this.$emit('change', foods)
      return foods
    }
  }
}
</script>

<style lang="stylus" scoped>
  .recommend
    position relative
    margin-top 0.5rem
    .re-icons
      position relative
      padding-top 0.2rem
      display flex
      overflow scroll
      .icon
        width 2.8rem
        padding-left .1rem
        text-align left
        .img-content
          height 1.8rem
    .re-items
      margin-top 0.5rem
      position relative
      display flex
      flex-direction row
      .re-kinds
        width 100%
        height 10rem
        overflow scroll
        .re-kinds-ul
          .re-kind
            padding 0.5rem 0.2rem
            font-size 0.32rem
            color #666
      .iconss
        display flex
        flex-direction column
        position relative
        overflow scroll
        height 10rem
        .icons
          display flex
          flex-direction column
          position relative
          .icon
            display flex
            flex-direction row
            padding 0.1rem 0.1rem
            width 100%
            .item-img
              width 32%
              height 1.8rem
            .icon-text
              font-size 0.25rem
              padding 0.1rem 0.2rem 0 0.2rem
              width: 4rem
              .icon-name
                font-size 20px
                color rgb(7,17,27)
                line-height 20px
              .icon-kind
                font-size 15px
                color rgb(147,153,159)
                line-height 15px
                padding-top 0.1rem
              .icon-num
                font-size 15px
                color rgb(147,153,159)
                line-height 15px
                padding-top 0.1rem
              .icon-price
                font-size 18px
                color #f01414
                font-weight 700
                line-height 26px
                padding-top 0.1rem
              .select-num
                width 70px
                font-size 20px
                float right
                padding-right 0.3rem
                .sub
                  background aqua
                  border-radius 50%
                  font-size 0.5rem
                  padding 0 0.08rem
                .selectNum
                  position relative
                  color #ff2725
                  font-weight 700
                .add
                  background aqua
                  border-radius 50%
                  font-size 0.5rem
                  float right
                  padding 0 0.08rem
</style>
