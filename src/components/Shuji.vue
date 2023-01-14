<template>
  <div>
    <div v-show="!xxxz">
      <div v-if="zjnr.length > 0" v-html="zjnr" class="text"></div>
      <div>
        <el-collapse>
          <el-collapse-item title="切换章节" name="1">
            <el-button
              type="primary"
              icon="el-icon-arrow-left"
              circle
              @click="syz"
            ></el-button>
            <el-button type="primary" round @click="xx">详细</el-button>
            <el-button
              type="primary"
              icon="el-icon-arrow-right"
              circle
              @click="xyz"
            ></el-button>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>

    <div v-show="xxxz">
      <el-table
        :data="zjlb"
        :show-header="false"
        stripe
        style="width: 100%"
        @cell-click="djmyx"
      >
        <el-table-column prop="title" width="180"> </el-table-column>
      </el-table>

      <!-- 返回 -->
      <el-button
        type="primary"
        icon="el-icon-arrow-left"
        circle
        class="fhan"
        @click="xx"
      ></el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Shuji",
  data() {
    return {
      sjxx: {},
      zjlb: [],
      zjnr: {},
      dqzj: 0,
      xxxz: false,
      tableData: [
        {
          date: "2016-05-02",
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      let lb = JSON.parse(localStorage.getItem("zjlb"));
      this.sjxx = lb.book;
      this.zjlb = lb.catalog;
      axios({
        method: "get",
        url: `https://apis.netstart.cn/yunyuedu/reader/book/content.json?source_uuid=${
          this.sjxx.sourceUuid
        }&content_uuid=${this.zjlb[this.dqzj].uuid}`,
      }).then((response) => {
        setTimeout(() => {
          this.zjnr = response.data.data.content;
        }, 1500);
      });
    }, 1500);

    // console.log(this.sjxx);
    // console.log(this.zjlb);
  },
  methods: {
    syz() {
      if (this.dqzj !== 0) {
        this.dqzj -= 1;

        axios({
          method: "get",
          url: `https://apis.netstart.cn/yunyuedu/reader/book/content.json?source_uuid=${
            this.sjxx.sourceUuid
          }&content_uuid=${this.zjlb[this.dqzj].uuid}`,
        }).then((response) => {
          setTimeout(() => {
            this.zjnr = response.data.data.content;
          }, 1500);
        });
      }
    },
    xyz() {
      if (this.dqzj < this.zjlb.length - 1) {
        this.dqzj += 1;

        axios({
          method: "get",
          url: `https://apis.netstart.cn/yunyuedu/reader/book/content.json?source_uuid=${
            this.sjxx.sourceUuid
          }&content_uuid=${this.zjlb[this.dqzj].uuid}`,
        }).then((response) => {
          setTimeout(() => {
            this.zjnr = response.data.data.content;
          }, 1500);
        });
      }
    },
    xx() {
      this.xxxz = !this.xxxz;
    },
    djmyx(event) {
      this.zjlb.forEach((e, k) => {
        if (event == e) {
          this.dqzj = k;
        }
      });
      axios({
        method: "get",
        url: `https://apis.netstart.cn/yunyuedu/reader/book/content.json?source_uuid=${this.sjxx.sourceUuid}&content_uuid=${event.uuid}`,
      })
        .then((response) => {
          // console.log(Reflect.has(response.data.data, "content"));
          setTimeout(() => {
            this.zjnr = response.data.data.content;
          }, 1500);
        })
        .catch(() => {
          this.$notify.info({
            title: "余额不足",
            message: "订阅章节请订阅后观看",
          });
        });
      this.xx();
    },
  },
};
</script>

<style scoped>
.text {
  box-sizing: border-box;
  padding: 20px;
}
.fhan {
  position: fixed;
  top: 10px;
  right: 10px;
}
</style>