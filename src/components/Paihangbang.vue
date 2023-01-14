<template>
  <div class="box" v-if="phb.length > 0">
    <div class="left">
      <el-page-header @back="goBack"> </el-page-header>
      <el-menu>
        <el-menu-item
          v-for="(item, index) in xzsj"
          :key="index"
          :index="item.name"
          @click="phbsj(item)"
        >
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </el-menu>
    </div>

    <div class="right">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          ref="scbqref"
          :label="item.name"
          :name="item.name"
          v-for="(item, index) in phb"
          :key="index"
        >
          <!-- 排行榜内容 -->
          <div
            class="phbnr-item"
            v-for="(i, k) in phbnr"
            :key="k"
            @click="meixiangxs(i)"
          >
            <div class="phbnr-img">
              <img width="100%" height="100%" :src="i.cover" alt="" />
            </div>
            <div class="phbnr-itemr">
              <div class="phbnr-itemr-item text-sx">
                <div class="top-text-l">{{ i.title }}</div>
                <div class="top-text-r">{{ k + 1 }}</div>
              </div>
              <div class="phbnr-itemr-item">
                <div class="top-zj">
                  {{ i.content }}
                </div>
              </div>
              <div class="phbnr-itemr-item text-sx">
                <div class="top-text2-l">{{ i.author }} | {{ i.category }}</div>
                <div class="top-text2-r" v-if="i.clickCount > 1">
                  {{
                    i.clickCount > 10000
                      ? (i.clickCount / 10000).toFixed(1) + "万"
                      : i.clickCount
                  }}人气
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Paihangbang",
  data() {
    return {
      phb: {},
      activeName: "",
      xzsj: {},
      phbnr: {},
      xzmz: "",
    };
  },
  methods: {
    handleClick(tab) {
      let i = 0;
      if (this.xzmz == "人气榜") {
        i = 0;
      }
      if (this.xzmz == "畅销榜") {
        i = 1;
      }
      if (this.xzmz == "新书榜") {
        i = 2;
      }
      if (this.xzmz == "免费榜") {
        i = 3;
      }
      if (this.xzmz == "完结榜") {
        i = 4;
      }

      if (tab.label == "男生") {
        this.xzsj = this.phb[0].subNavis;
        // console.log(this.xzsj);
        this.phbsj(this.xzsj[i]);
      }
      if (tab.label == "女生") {
        this.xzsj = this.phb[1].subNavis;
        this.phbsj(this.xzsj[i]);
      }
      if (tab.label == "出版") {
        this.xzsj = this.phb[2].subNavis;
        this.phbsj(this.xzsj[0]);
      }
      if (tab.label == "听书") {
        this.xzsj = this.phb[3].subNavis;
        this.phbsj(this.xzsj[0]);
      }
    },
    goBack() {
      history.go(-1);
    },
    phbsj(item) {
      console.log(item);
      if (item.name == "人气榜") {
        this.xzmz = item.name;
        axios({
          method: "get",
          url: `https://apis.netstart.cn/yunyuedu/${item.naviInfos[0].url}`,
        }).then((response) => {
          this.phbnr = response.data.list;
        });
      }
      if (item.name == "畅销榜") {
        this.xzmz = item.name;
        axios({
          method: "get",
          url: `https://apis.netstart.cn/yunyuedu/${item.naviInfos[0].url}`,
        }).then((response) => {
          this.phbnr = response.data.list;
        });
      }
      if (item.name == "新书榜") {
        this.xzmz = item.name;
        axios({
          method: "get",
          url: `https://apis.netstart.cn/yunyuedu/${item.naviInfos[0].url}`,
        }).then((response) => {
          this.phbnr = response.data.list;
        });
      }
      if (item.name == "免费榜") {
        this.xzmz = item.name;
        axios({
          method: "get",
          url: `https://apis.netstart.cn/yunyuedu/${item.naviInfos[0].url}`,
        }).then((response) => {
          this.phbnr = response.data.list;
        });
      }
      if (item.name == "完结榜") {
        this.xzmz = item.name;
        axios({
          method: "get",
          url: `https://apis.netstart.cn/yunyuedu/${item.naviInfos[0].url}`,
        }).then((response) => {
          this.phbnr = response.data.list;
        });
      }
    },
    meixiangxs(item) {
      axios({
        method: "get",
        url: `https://apis.netstart.cn/yunyuedu/reader/book/info.json?source_uuid=${item.id}`,
      }).then((response) => {
        let jg = JSON.stringify(response.data.data);
        // 章节列表存储
        setTimeout(() => {
            localStorage.setItem("zjlb", jg);
        }, 500);
      });
      this.$router.push({ path: "/Shuji" }, () => {});
    },
  },
  mounted() {
    setTimeout(() => {
      this.phb = JSON.parse(localStorage.getItem("phb"));
      this.activeName = this.phb[0].name;
      this.xzsj = this.phb[0].subNavis;
      this.$nextTick(() => {
        this.handleClick(this.$refs.scbqref[0]);
        this.phbsj(this.xzsj[0]);
        // console.log(this.xzsj, "xzsj");
      });
      //   console.log(this.phb);
    }, 500);
  },
};
</script>

<style scoped>
.box {
  display: flex;
}
.left {
  flex: 1;
  /* background-color: aqua; */
}
.right {
  flex: 4;
  /* background-color: brown; */
}
.phbnr-item {
  box-sizing: border-box;
  padding: 5px 0;
  padding-left: 5px;
  width: 100%;
  height: 60px;
  /* background-color: pink; */
  display: flex;
}
.phbnr-img {
  flex: 1;
}
.phbnr-itemr {
  flex: 5;
  display: flex;
  flex-direction: column;
}
.phbnr-itemr-item {
  flex: 1;
}
.text-sx {
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
}
.top-text-l {
  font-size: 14px;
}
.top-text-r {
  font-size: 12px;
  color: gray;
}
.top-text2-l {
  font-size: 12px;
  color: gray;
}
.top-text2-r {
  font-size: 12px;
  color: red;
}
.top-zj {
  width: 200px;
  font-size: 12px;
  color: gray;
  padding: 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>