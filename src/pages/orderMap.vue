<template>
  <div>
    <!--{{item}}-->
    <div class="baidumap" id="container">
    </div>
  </div>
</template>

<script>import BMap from 'BMap'
// import BMapSymbolSHAPEPOINT from 'BMap_Symbol_SHAPE_POINT'
export default {
  name: 'orderDetail.vue',
  data () {
    return {
      luxian: []
    }
  },
  mounted () {
    this.baiduMap()
  },
  created: function () {
    this.luxian = this.$route.params.luxian
  },
  methods: {
    // 返回
    goback () {
      this.$router.go(-1)
    },
    baiduMap () {
      var map = new BMap.Map('container')
      map.enableScrollWheelZoom(true)
      map.addControl(new BMap.NavigationControl())
      map.addControl(new BMap.ScaleControl())
      map.addControl(new BMap.OverviewMapControl())
      map.addControl(new BMap.MapTypeControl())
      var traffic = new BMap.TrafficLayer()// 创建交通流量图层实例
      map.addTileLayer(traffic)// 将图层添加到地图上
      var luxian = this.luxian.reverse()
      var p1 = new BMap.Point(luxian[0].Lon, luxian[0].Lat)
      var p2 = new BMap.Point(luxian[luxian.length - 1].Lon, luxian[luxian.length - 1].Lat)
      var wp = []
      for (var i = 1; i < luxian.length - 1; i++) {
        wp[i - 1] = luxian[i].address
      }
      var driving = new BMap.DrivingRoute(map, {
        renderOptions: {
          map: map,
          autoViewport: true
        }
      })
      driving.search(p1, p2, {waypoints: wp})// waypoints表示途经点
    }
  }
}
</script>

<style scoped>
  .baidumap{
    width: 100%;
    height: 100vh;
  }
</style>
