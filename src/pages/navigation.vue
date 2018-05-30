<template>
  <div style="">
    <div id="nav" style="overflow-y: auto">
      <router-view/>
    </div>
    <div class="bottom">
      <div class="box">
        <div v-for="(list, index) in navLists" v-bind:key="index" class="nav" :class="{blue: changeBlue == index}" @click="blues(index)">
          <img v-if="changeBlue == index" v-bind:src="list.img_active">
          <img v-else v-bind:src="list.img">
          <br /><span>{{list.text}}</span>
        </div>
      </div>
      <!--<div class="parent">-->
          <!--<div class="item">-->
            <!--<router-link :to="'/Navigation/' + noPermitInRole + '/Home/' + noPermitInRole">-->
            <!--<img src="../assets/yx-active.png"><br />-->
            <!--<span>工作</span>-->
            <!--</router-link>-->
          <!--</div>-->
          <!--<div class="item">-->
            <!--<router-link :to="'/Navigation/' + noPermitInRole + '/Hello'">-->
            <!--<img src="../assets/gg.png"><br />-->
            <!--<span>公告</span>-->
              <!--</router-link>-->
          <!--</div>-->
          <!--<div class="item">-->
            <!--<router-link :to="'/Navigation/' + noPermitInRole + '/Map'">-->
            <!--<img src="../assets/txl.png"><br />-->
            <!--<span>地图</span>-->
            <!--</router-link>-->
          <!--</div>-->
          <!--<div class="item">-->
            <!--<router-link :to="'/Navigation/' + noPermitInRole + '/OrderList'">-->
            <!--<img src="../assets/wd.png"><br />-->
            <!--<span>订单</span>-->
            <!--</router-link>-->
          <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>export default {
  name: 'navigation.vue',
  data () {
    return {
      navLists: [{text: '首页', path: 'Home', img: '../static/images/yx.png', img_active: '../static/images/yx-active.png'},
        {text: '公告', path: 'Hello', img: '../static/images/gg.png', img_active: '../static/images/gg-active.png'},
        {text: '地图', path: 'Map', img: '../static/images/txl.png', img_active: '../static/images/txl-active.png'},
        {text: '订单', path: 'OrderList', img: '../static/images/wd.png', img_active: '../static/images/wd-active.png'}
      ],
      changeBlue: 0,
      noPermitInRole: ''
    }
  },
  created: function () {
    this.noPermitInRole = this.$route.params.noPermitInRole
  },
  methods: {
    blues (index) {
      this.changeBlue = index
      var nextPath = '/Navigation/' + this.noPermitInRole + '/' + this.navLists[index].path
      if (index === 0) {
        nextPath = nextPath + '/' + this.noPermitInRole
      }
      this.$router.push({path: nextPath})
    }
  }
}
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .bottom{
    position:fixed;
    left:0px;
    bottom:0px;
    width:100%;
    height:60px;
    background-color:#F8F8F8;
    z-index:9999;
  }
  .box{
    border-top: 2px solid #EAEAEA;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .nav{
    display: inline-block;
    cursor: pointer;
    width: 25%;
    padding: 8px 0px;
    text-align: center;
  }
  .blue{
    color: #0E86FF;
  }
  .nav img{
    width: 31px;
    height: 22px;
  }
  .nav span{
    font-size: 14px;
  }
</style>
