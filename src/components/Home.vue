<template>
  <div>
    <div class="box">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          v-for="(item, index) in bt"
          :key="index"
          class="bqy"
          :label="item.name"
          :name="item.id"
        >
          <router-view />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      activeName: "",
      bt: {},
    };
  },
  methods: {
    handleClick(tab) {
      // 选中不同选项获取不同数据到vuex
      if (tab.label == "精选") {
        axios({
          method: "get",
          url: `https://apis.netstart.cn/yunyuedu${this.bt[0].url}`,
        }).then((response) => {
          let jg = response.data.data.list;
          this.$store.commit("upcdsj1", jg);
          // console.log(`https://apis.netstart.cn/yunyuedu${this.bt[0].url}`);
          localStorage.setItem('jx',JSON.stringify(jg))
        });
        this.$router.push({ path: "/home/jingxuan" }, () => {});
      }
      if (tab.label == "免费") {
        axios({
          method: "get",
          url: `https://apis.netstart.cn/yunyuedu${this.bt[1].url}`,
        }).then((response) => {
          let jg = response.data.data.list;
          this.$store.commit("upcdsj2", jg);
          localStorage.setItem('mf',JSON.stringify(jg))
          
          // console.log(`https://apis.netstart.cn/yunyuedu${this.bt[1].url}`);
        });
        this.$router.push({ path: "/home/mianfei" }, () => {});
      }
      if (tab.label == "男生") {
        axios({
          method: "get",
          url: `https://apis.netstart.cn/yunyuedu${this.bt[2].url}`,
        }).then((response) => {
          let jg = response.data.data.list;
          this.$store.commit("upcdsj3", jg);
          localStorage.setItem('ns',JSON.stringify(jg))
          console.log(jg);
          // console.log(`https://apis.netstart.cn/yunyuedu${this.bt[2].url}`);
        });
        this.$router.push({ path: "/home/nansheng" }, () => {});
      }
      if (tab.label == "女生") {
        axios({
          method: "get",
          url: `https://apis.netstart.cn/yunyuedu${this.bt[3].url}`,
        }).then((response) => {
          let jg = response.data.data.list;
          this.$store.commit("upcdsj4", jg);
          localStorage.setItem('nvs',JSON.stringify(jg))
          // console.log(`https://apis.netstart.cn/yunyuedu${this.bt[3].url}`);
        });
        this.$router.push({ path: "/home/nvsheng" }, () => {});
      }
      if (tab.label == "出版") {
        axios({
          method: "get",
          url: `https://apis.netstart.cn/yunyuedu${this.bt[4].url}`,
        }).then((response) => {
          let jg = response.data.data.list;
          this.$store.commit("upcdsj5", jg);
          localStorage.setItem('cb',JSON.stringify(jg))
          // console.log(`https://apis.netstart.cn/yunyuedu${this.bt[4].url}`);
        });
        this.$router.push({ path: "/home/chuban" }, () => {});
      }
      if (tab.label == "听书") {
        axios({
          method: "get",
          url: `https://apis.netstart.cn/yunyuedu${this.bt[5].url}`,
        }).then((response) => {
          let jg = response.data.data.list;
          this.$store.commit("upcdsj6", jg);
          localStorage.setItem('ts',JSON.stringify(jg))
          // console.log(`https://apis.netstart.cn/yunyuedu${this.bt[5].url}`);
        });
        this.$router.push({ path: "/home/tingshu" }, () => {});
      }
    },
  },
  mounted() {
    axios({
      method: "get",
      url: "https://apis.netstart.cn/yunyuedu/store/navi.json?gender=2",
    }).then((response) => {
      this.bt = response.data.data.navi;
      this.activeName = this.bt[0].id;

      // 初始化精选数据
      axios({
        method: "get",
        url: `https://apis.netstart.cn/yunyuedu${this.bt[0].url}`,
      }).then((response) => {
        let jg = response.data.data.list;
        this.$store.commit("upcdsj1", jg);
        localStorage.setItem('jx',JSON.stringify(jg))
      });
    });

    this.$router.push({ path: "/home/jingxuan" }, () => {});
  },
};
</script>

<style scoped>
.box {
  width: calc(100% - 40px);
  padding: 0 20px;
}
</style>