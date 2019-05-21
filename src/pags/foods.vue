<template>
  <div>
    <Header :seller="seller"></Header>
    <food-center :goods="goods" :seller="seller"
    :ratings="ratings"></food-center>
  </div>
</template>

<script>
import Header from './commponents/header'
import FoodCenter from './commponents/center'
import axious from 'axios'
export default {
  name: 'foods',
  components: {
    FoodCenter,
    Header
  },
  data () {
    return {
      seller: {},
      goods: [],
      ratings: []
    }
  },
  methods: {
    getInfo () {
      axious.get('/api/data.json')
        .then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      if (res) {
        const data = res.data
        this.seller = data.seller
        this.goods = data.goods
        this.ratings = data.ratings
      }
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
