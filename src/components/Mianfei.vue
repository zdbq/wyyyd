<template>
  <div>
    <h3>{{xsmf.name}}</h3>
    <div class="xsmf">
      <div class="item" v-for="(item,index) in xsmf.list" :key="index" @click="djtp(item)">
        <div class="img"><img width="100%" height="100%" :src="item.cover" alt=""></div>
        <div class="text">{{item.author}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Mianfei',
    data() {
      return {
        xsmf:{}
      }
    },
    mounted() {
      this.xsmf = JSON.parse(localStorage.getItem("mf"))[1]
    },
    methods: {
      djtp(item) {
      axios({
        method: "get",
        url: `https://apis.netstart.cn/yunyuedu/reader/book/info.json?source_uuid=${item.id}`,
      }).then((response) => {
        let jg = JSON.stringify(response.data.data);
        // 章节列表存储
        localStorage.setItem("zjlb", jg);
      });
      this.$router.push({ path: "/Shuji" }, () => {});
    },
    },
}
</script>

<style scoped>
    .xsmf{
      display: flex;
      height: 170px;
      box-sizing: border-box;
      padding: 5px;
    }
    .item{
      flex: 1;
      box-sizing: border-box;
      padding: 5px;
    }
    .img{
      height: 70%;
    }
    .text{
      height: 30%;
      font-size: 14px
    }
</style>