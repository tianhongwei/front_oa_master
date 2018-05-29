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
      item: {}
    }
  },
  mounted () {
    this.baiduMap()
  },
  created: function () {
    this.item = this.$route.params.item
  },
  methods: {
    // 返回
    goback () {
      this.$router.go(-1)
    },
    baiduMap () {
      var map = new BMap.Map('container')
      var startAddress = this.item.startAddress
      var destination = this.item.destination
      // var startLon = this.item.startLon
      // var startLat = this.item.startLat
      // alert(startAddress + ',' + destination)
      // map.centerAndZoom(new BMap.Point(112.553063, 37.80051), 15)
      var driving = new BMap.DrivingRoute(map, {
        renderOptions: {
          map: map,
          autoViewport: true
        }
      })
      driving.search(startAddress, destination)
      map.enableScrollWheelZoom(true)
      map.addControl(new BMap.NavigationControl())
      map.addControl(new BMap.ScaleControl())
      map.addControl(new BMap.OverviewMapControl())
      map.addControl(new BMap.MapTypeControl())
      var traffic = new BMap.TrafficLayer()// 创建交通流量图层实例
      map.addTileLayer(traffic)// 将图层添加到地图上
      // 起始地
      // var startLon = this.item.startLon
      // var startLat = this.item.startLat
      // var startPoint = new BMap.Point(startLon, startLat)
      // map.centerAndZoom(startPoint, 15)
      // var startMarker = new BMap.Marker(startPoint) // 创建起始地
      // map.addOverlay(startMarker) // 将标注添加到地图中
      // startMarker.addEventListener('click', function () {
      //   alert('当前位置是起始地：' + startAddress)
      // })
      // 目的地
      // var endLon = this.item.endLon
      // var endLat = this.item.endLat
      // var endPoint = new BMap.Point(endLon, endLat)
      // var endMarker = new BMap.Marker(endPoint) // 创建目的地
      // map.addOverlay(endMarker) // 将标注添加到地图中
      // endMarker.addEventListener('click', function () {
      //   alert('当前位置是目的地：' + destination)
      // })
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
