<template>
  <div class="list" style="margin-top: -10px;">
    <div v-for="item in orders" v-bind:key="item.orderId" class="item" v-on:click="toMap(item)">
      <span>订单号：{{item.orderId}}<br/>对应合同名：{{item.clientName}}<br/>托运方：{{item.carrier}}<br/>
        下单时间：{{item.orderDate}}<br/>始发地：{{item.startAddress}}<br/>目的地：{{item.destination}}</span>
    </div>
  </div>
</template>

<script>export default {
  name: 'orderList.vue',
  data () {
    return {
      orders: []
    }
  },
  created: function () {
    this.getOrderList()
  },
  methods: {
    // 获取订单列表
    getOrderList: function () {
      this.$http({
        method: 'GET',
        url: '/static/order.json'
      }).then(function (res) {
        this.orders = res.body
      })
    },
    // 进入地图详情
    toMap: function (item) {
      let data = {
        item: item
      }
      this.$router.push({ name: 'OrderDetail', params: data })
    }
  }
}
</script>
<style scoped>
  .list{
    width: 100%;
    height: 100vh;
    text-align: left;
    padding: 0px  8px;
    background-color: #FFF;
  }
  .item{
    font-size: 14px;
    color: #483D8B;
    line-height: 22px;
    border-bottom: solid 1px #EFEFEF;
    padding-bottom: 8px;
    padding-top: 8px;
  }
  .item:active{
    background: #EFEFEF;
  }
</style>
