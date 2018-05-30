<template>
  <div style="width: 100%; height: 100vh;">
    <div class="topBar">
      <span>托运订单</span>
    </div>
    <div id="wrap" class="box">
      <div v-for="(list, index) in navLists" v-bind:key="index" class="nav" :class="{blue: changeBlue == index}" @click="blues(index)">
        {{list.text}}
      </div>
    </div>
    <div class="list">
      <div v-if="changeBlue === 0" v-for="item in orders" v-bind:key="item.orderId" class="item">
        <p style="background-color: #EFEFEF; height: 10px;"></p>
        <div class="child">
          <div class="leftDiv">
            <p style="font-size: 10px;">订单号：{{item.orderId}}</p>
            <p style="font-size: 16px; margin-top: 8px; margin-bottom: 8px;">{{item.sd}} → {{item.des}}</p>
            <p style="font-size: 12px;">货物名称：{{item.name}}<br/>货物重量：{{item.zl}}吨<br/>运输方式：{{item.ysfs}}</p>
          </div>
          <div class="rightDiv">
            <p class="state">待运输</p>
            <p style="font-size: 14px; margin-top: 8px; margin-bottom: 16px;">{{item.orderDate}}</p>
            <p style="color: #0E86FF; font-size: 20px;">已付90%</p>
          </div>
        </div>
        <p class="dividing"></p>
        <div style="display: flex;flex-direction: row;">
          <div class="widget">
            <a v-on:click="toDetail(item)">物流跟踪</a>
            <a>付款情况</a>
            <a>相关服务</a>
          </div>
        </div>
      </div>
      <div v-if="changeBlue === 1"  v-for="item in orders" v-bind:key="item.orderId" class="item" v-on:click="toMap(item)">
      <span>待运输<br/>订单号：{{item.orderId}}<br/>对应合同名：{{item.clientName}}<br/>托运方：{{item.carrier}}<br/>
        下单时间：{{item.orderDate}}<br/>始发地：{{item.startAddress}}<br/>目的地：{{item.destination}}</span>
      </div>
      <div v-if="changeBlue === 2"  v-for="item in orders" v-bind:key="item.orderId" class="item" v-on:click="toMap(item)">
      <span>运输中<br/>订单号：{{item.orderId}}<br/>对应合同名：{{item.clientName}}<br/>托运方：{{item.carrier}}<br/>
        下单时间：{{item.orderDate}}<br/>始发地：{{item.startAddress}}<br/>目的地：{{item.destination}}</span>
      </div>
      <div v-if="changeBlue === 3"  v-for="item in orders" v-bind:key="item.orderId" class="item" v-on:click="toMap(item)">
      <span>已收货<br/>订单号：{{item.orderId}}<br/>对应合同名：{{item.clientName}}<br/>托运方：{{item.carrier}}<br/>
        下单时间：{{item.orderDate}}<br/>始发地：{{item.startAddress}}<br/>目的地：{{item.destination}}</span>
      </div>
    </div>
  </div>
</template>

<script>export default {
  name: 'orderList.vue',
  data () {
    return {
      navLists: [{text: '全部'}, {text: '待运输'}, {text: '运输中'}, {text: '已收货'}
      ],
      changeBlue: 0,
      orders: []
    }
  },
  created: function () {
    this.getOrderList()
  },
  methods: {
    blues (index) {
      this.changeBlue = index
    },
    // 获取订单列表
    getOrderList: function () {
      this.$http({
        method: 'GET',
        url: './static/orderList.json'
      }).then(function (res) {
        this.orders = res.body
      })
    },
    // 进入详情
    toDetail: function (item) {
      let data = {
        item: item
      }
      this.$router.push({ name: 'OrderDetail', params: data })
    },
    // 进入地图详情
    toMap: function (item) {
      let data = {
        luxian: item.luxian
      }
      this.$router.push({ name: 'OrderMap', params: data })
    }
  }
}
</script>
<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .topBar{
    background-color: #0E86FF;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .topBar span{
    color: #FFF;
    font-size: 16px;
  }
  /**********************/
  .box{
    height: 48px;
    background: #FFF;
  }
  .nav{
    line-height: 40px;
    display: inline-block;
    cursor: pointer;
    width: 25%;
    padding: 4px 0px;
  }
  .blue{
    color: #0E86FF;
    border-bottom: solid 3px #0E86FF;
  }
  /****************/
  .list{
    width: 100%;
    height: 100vh;
    text-align: left;
    background-color: #FFF;
  }
  .item{
    font-size: 14px;
    color: #483D8B;
    line-height: 22px;
    border-bottom: solid 1px #EFEFEF;
  }
  .item:active{
    /*background: #EFEFEF;*/
  }
  /********************/
  .child{
    display: flex;
    flex-direction: row;
    color: #777777;
    padding: 8px;
  }
  .leftDiv{
    width: 50%;
  }
  .rightDiv{
    width: 50%;
    display: inline-block;
    text-align: right;
  }
  .rightDiv .state{
    display: inline-block;
    text-align: right;
    width: 60px;
    -webkit-border-radius: 6px;
    background-color: #0E86FF;
    color: #FFF;
    font-size: 10px;
    text-align: center;
  }
  .dividing{
    border-bottom: #EFEFEF 1px dashed;
  }
  .widget{
    flex: 1;
    display: inline-block;
    text-align: right;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-right: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .widget a{
    -webkit-border-radius: 30px;
    border: #838383 1px solid;
    padding: 8px;
    background-color: #FFF;
    color: #838383;
    font-size: 12px;
  }
  .widget a:active{
    background: #EFEFEF;
  }
</style>
