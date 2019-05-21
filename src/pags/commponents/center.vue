<template>
  <div>
    <div id='container' class="container" :class="{'isFixed':searchBarFixed}">
      <div class="order" @click="showAA">点餐</div>
      <div class="discuss" @click="showBB">评价</div>
      <div class="shoper">商家</div>
    </div>
    <div class="others">
      <div class="order" v-show="showA">
        <food-recommend :goods="goods" @change="foodschange">
        </food-recommend>
        <order-buttom :foods="foods" :deliveryprice="seller.deliveryPrice"
          :minprice="seller.minPrice"></order-buttom>
      </div>
      <div class="rating" v-show="showB">
        <rating :ratings="ratings"></rating>
      </div>
  </div>
  </div>
</template>

<script>
import FoodRecommend from './recommend'
import OrderButtom from './orderbuttom'
import Rating from './rating'
export default {
  name: 'FoodCenter',
  props: {
    goods: Array,
    seller: Object,
    ratings: Array
  },
  data () {
    return {
      foods: [],
      searchBarFixed: false,
      showA: true,
      showB: false
    }
  },
  components: {
    Rating,
    OrderButtom,
    FoodRecommend
  },
  methods: {
    foodschange (foods) {
      this.foods = foods
    },
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // var offsetTop = document.querySelector('#container').offsetTop
      var offsetTop = 334
      scrollTop > offsetTop ? this.searchBarFixed = true : this.searchBarFixed = false
    },
    showAA () {
      this.showA = true
      this.showB = false
    },
    showBB () {
      this.showA = false
      this.showB = true
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  .container
    position relative
    display flex
    flex-direction raw
    flex-wrap nowrap
    justify-content space-around
    align-items center
    padding-top 0.2rem
    font-size 0.4rem
    color #666
  .isFixed
    position: fixed;
    top: 0;
    height: 0.5rem;
    background: #fff;
    z-index: 999;
    display: flex;
    width: 100%;
    font-size: 0.4rem;
    padding: 0.1rem 0;
    justify-content: space-around;
  .others
    position relative
</style>
