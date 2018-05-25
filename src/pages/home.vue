<template>
  <div>
    <div v-if="loading" class="page">
      <label>页面正在加载中。。。</label>
    </div>
    <div>
      <img class="banner" src="../assets/work_fragment_bg.png">
    </div>
    <div class="root">
      <div v-for="element in convertMenu" v-bind:key="element.row" class="parent">
        <div v-for="content in element.data" v-bind:key="content.noPhoneFirstMenu" class="item">
          <img v-if="content.noPhoneFirstMenu > 0" v-bind:src="content.cIcon"><br />
          <span>{{content.cNameFSF}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>export default {
  name: 'home.vue',
  data () {
    return {
      loading: true,
      convertMenu: [] // 转行数据格式后的菜单数组
    }
  },
  created: function () {
    this.getMenu()
  },
  methods: {
    getMenu: function () { // 获取首页菜单
      // post /someUrl
      this.$http.post('https://bird.ioliu.cn/v1/?url=http://59.49.17.194:8676/WebService1.asmx/GetMyMenu',
        {
          noDictPermitInRole: this.$route.params.noPermitInRole
        }).then(function (res) {
        var data = res.body
        if (data.Success === true) {
          var tempData = data.Data
          var tempLen = tempData.length// 3   4    7   10
          var row = Math.ceil(tempLen / 4)// 向上取整 1   1   2   3
          for (var i = 0; i < row; i++) {
            var element = {}
            element.row = i + 1
            element.data = []
            var tem = (i + 1) * 4 // 4   4    8   12
            for (var j = (i * 4); j < tem; j++) {
              if (j < tempLen) { // 未越界
                var content = {}
                content.noPhoneFirstMenu = j + 1
                content.cNameFSF = tempData[j].cNameFSF
                content.cIcon = tempData[j].cIcon
                element.data.push(content)
              }
            }
            if (element.data.length === 3) {
              element.data.push({})
            } else if (element.data.length === 2) {
              element.data.push({})
              element.data.push({})
            } else if (element.data.length === 1) {
              element.data.push({})
              element.data.push({})
              element.data.push({})
            }
            this.convertMenu.push(element)
          }
          this.loading = false
        }
      }, function (res) {
        alert('网络超时！')
      })
    }
  }
}
</script>

<style scoped>
.page{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner{
  width: 100%;
  height: 180px;
}
.root{
  border: solid 0.5px #F8F8F8;
}
.parent{
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
}
.item{
  width: 25%;
  padding-top: 8px;
  padding-bottom: 8px;
  border: solid 0.5px #F8F8F8;
}
.item img{
  width: 40px;
  height: 40px;
  margin-bottom: 4px;
}
.item span{
  font-size: 14px;
}
</style>
