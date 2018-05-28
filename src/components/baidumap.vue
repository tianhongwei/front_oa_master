<template>
  <div>
    <div class="baidumap" id="container">
    </div>
  </div>
</template>
<script>import BMap from 'BMap'
// import BMapSymbolSHAPEPOINT from 'BMap_Symbol_SHAPE_POINT'
export default {
  name: 'baidumap.vue',
  data () {
    return {
    }
  },
  mounted () {
    this.baiduMap()
  },
  methods: {
    // 返回
    goback () {
      this.$router.go(-1)
    },
    addMarker (map, point, index) { // 创建图标对象
      var myIcon = new BMap.Icon('../static/images/icon_st.png', new BMap.Size(23, 25), {
        // 指定定位位置。
        // 当标注显示在地图上时，其所指向的地理位置距离图标左上
        // 角各偏移10像素和25像素。您可以看到在本例中该位置即是
        // 图标中央下端的尖角位置。
        anchor: new BMap.Size(10, 25),
        // 设置图片偏移。
        // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
        // 需要指定大图的偏移位置，此做法与css sprites技术类似。
        imageOffset: new BMap.Size(0, 0 - index * 25) // 设置图片偏移
      })
      // 创建标注对象并添加到地图
      var marker = new BMap.Marker(point, {icon: myIcon})
      map.addOverlay(marker)
    },
    baiduMap () {
      var map = new BMap.Map('container')
      var point = new BMap.Point(112.553063, 37.80051)
      map.centerAndZoom(point, 25)
      map.enableScrollWheelZoom(true)
      var marker = new BMap.Marker(point) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中
      marker.addEventListener('click', function () {
        alert('您点击了标注')
      })
      var polyline = new BMap.Polyline([
        new BMap.Point(112.553783, 37.799821), new BMap.Point(112.553063, 37.80051)], {strokeColor: 'blue', strokeWeight: 6, strokeOpacity: 0.5}
      )
      map.addOverlay(polyline)
      map.addControl(new BMap.NavigationControl())
      map.addControl(new BMap.ScaleControl())
      map.addControl(new BMap.OverviewMapControl())
      map.addControl(new BMap.MapTypeControl())
      // 随机向地图添加10个标注
      var pointTem = new BMap.Point(112.553783, 37.799821)
      this.addMarker(map, pointTem, 0)
      // var opts = {
      //   width: 250, // 信息窗口宽度
      //   height: 100, // 信息窗口高度
      //   title: 'Hello-thw' // 信息窗口标题
      // }
      // var infoWindow = new BMap.InfoWindow('World', opts)// 创建信息窗口对象
      // map.openInfoWindow(infoWindow, map.getCenter())// 打开信息窗口
      var traffic = new BMap.TrafficLayer()// 创建交通流量图层实例
      map.addTileLayer(traffic)// 将图层添加到地图上
      // map.addEventListener('dragend', function () {
      //   var center = map.getCenter()
      //   alert('地图中心点变更为：' + center.lng + ', ' + center.lat)
      // })
      // 创建地址解析器实例
      // var myGeo = new BMap.Geocoder()
      // 将地址解析结果显示在地图上，并调整地图视野
      // myGeo.getPoint('山西省太原市小店区平阳路南中环街口', function (point) {
      //   if (point) {
      //     map.centerAndZoom(point, 25)
      //     map.addOverlay(new BMap.Marker(point))
      //   }
      // }, '太原市')
      // map.addEventListener('click', function (e) {
      //   var pt = e.point
      //   var geoc = new BMap.Geocoder()
      //   geoc.getLocation(pt, function (rs) {
      //     var addComp = rs.addressComponents
      //     alert(addComp.province + ', ' + addComp.city + ', ' + addComp.district + ', ' + addComp.street + ', ' + addComp.streetNumber)
      //   })
      // })
      var driving = new BMap.DrivingRoute(map, {
        renderOptions: {
          map: map,
          panel: 'results',
          autoViewport: true
        }
      })
      driving.search('南中环桥', '南内环桥')
      // var transit = new BMap.TransitRoute(map, {
      //   renderOptions: {map: map}
      // })
      // transit.search('南中环桥', '南内环桥')
      // var bounds = map.getBounds()
      // var lngSpan = bounds.maxX - bounds.minX
      // var latSpan = bounds.maxY - bounds.minY
      // for (var i = 0; i < 10; i++) {
      //   var pointTem = new BMap.Point(bounds.minX + lngSpan * (Math.random() * 0.7 + 0.15), bounds.minY + latSpan * (Math.random() * 0.7 + 0.15))
      //   this.addMarker(map, pointTem, i)
      // }
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
