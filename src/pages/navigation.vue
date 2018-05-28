<template>
  <div>
    <div id="nav" style="overflow-y: auto">
      <router-view/>
    </div>
    <div class="bottom">
      <div class="parent">
          <div class="item">
            <router-link :to="'/Navigation/' + noPermitInRole + '/Home/' + noPermitInRole">
            <img src="../assets/yx-active.png"><br />
            <span>工作</span>
            </router-link>
          </div>
          <div class="item">
            <router-link :to="'/Navigation/' + noPermitInRole + '/Hello'">
            <img src="../assets/gg.png"><br />
            <span>公告</span>
              </router-link>
          </div>
          <div class="item">
            <router-link :to="'/Navigation/' + noPermitInRole + '/Map'">
            <img src="../assets/txl.png"><br />
            <span>地图</span>
            </router-link>
          </div>
          <div class="item">
            <router-link :to="'/Navigation/' + noPermitInRole + '/OrderList'">
            <img src="../assets/wd.png"><br />
            <span>订单</span>
            </router-link>
          </div>
      </div>
    </div>
  </div>
</template>

<script>export default {
  name: 'navigation.vue',
  data () {
    return {
      noPermitInRole: ''
    }
  },
  created: function () {
    this.noPermitInRole = this.$route.params.noPermitInRole
  }
}
</script>

<style scoped>
  .bottom{
    width: 100%;
    position: absolute;
    bottom: 0px;
  }
  .parent{
    width: 100%;
    background: #F8F8F8;
    display: flex;
    flex-direction: row;
    border-top: 1px solid #EAEAEA;
  }
  .item{
    width: 25%;
    padding-top: 4px;
    padding-bottom: 4px;
  }
  .item img{
    width: 31px;
    height: 22px;
  }
  .item span{
    font-size: 14px;
  }
</style>
