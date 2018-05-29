<template>
  <div class="root">
    <div class="topBar">
      <div class="triangle-facing-left" v-on:click="goback"></div>
      <span>物流详情</span>
    </div>
    <div class="item">
      <p style="background-color: #EFEFEF; height: 10px;"></p>
      <div class="child">
        <div class="leftDiv">
          <p style="font-size: 14px;">订单号：{{item.orderId}}</p>
          <p style="font-size: 16px; margin-top: 8px; margin-bottom: 8px;">{{item.sd}} → {{item.des}}</p>
          <p style="font-size: 14px;">货物名称：{{item.name}}</p>
        </div>
        <div class="rightDiv">
          <p style="font-size: 14px; margin-top: 16px; margin-bottom: 16px;">{{item.orderDate}}</p>
          <a v-on:click="toMap()">地图查看 > </a>
        </div>
      </div>
    </div>
    <p style="background-color: #EFEFEF; height: 10px;"></p>
    <div v-for="(item, index) in item.luxian" v-bind:key="index" class="item">
      <div class="luxian">
        <div class="topDiv">
          <p v-if="index == 0" class="leftP">&nbsp;●&nbsp;已装箱</p>
          <p v-else class="leftP">&nbsp;●&nbsp;已发货</p>
          <p class="rightP">{{item.date}}</p>
        </div>
        <div class="bottomDiv">
          <p style="font-size: 12px;">&nbsp;&nbsp;&nbsp;&nbsp;当前位置：{{item.address}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderDetail.vue',
  data () {
    return {
      item: {}
    }
  },
  created: function () {
    this.item = this.$route.params.item
  },
  methods: {
    // 返回
    goback () {
      this.$router.go(-1)
    },
    // 进入地图详情
    toMap: function () {
      let data = {
        luxian: this.item.luxian
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
  .root{
    width: 100%;
    height: 100vh;
    text-align: left;
    background-color: #FFF;
  }
  .topBar{
    background-color: #0E86FF;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .topBar .triangle-facing-left {
    display: inline-block;
    margin: 12px;
    border-left: 2px solid #FFF;
    border-bottom: 2px solid #FFF;
    width: 10px; height: 10px;
    transform: rotate(45deg);
    float: left;
  }
  .topBar span{
    color: #FFF;
    font-size: 16px;
  }
  .item{
    font-size: 14px;
    color: #483D8B;
    line-height: 22px;
    border-bottom: solid 1px #EFEFEF;
  }
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
  .rightDiv a{
    padding: 8px;
    color: #0E86FF;
    font-size: 14px;
  }
  .rightDiv a:active{
    background: #EFEFEF;
  }
  /****************/
  .luxian{
    display: flex;
    flex-direction: column;
    color: #0E86FF;
    padding: 8px;
  }
  .luxian .topDiv{
    display: flex;
    flex-direction: row;
  }
  .luxian .topDiv .leftP{
    width: 50%;
    font-size: 16px;
  }
  .luxian .topDiv .rightP{
    width: 50%;
    display: inline-block;
    text-align: right;
    font-size: 14px;
  }
  .luxian .bottomDiv{
    font-size: 14px;
  }
</style>
