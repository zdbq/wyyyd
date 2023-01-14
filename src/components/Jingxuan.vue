<template>
  <div v-if="jx.length > 0">
    <!-- 判断数组长度大于0再渲染，就是有数据后渲染 -->
    <div class="lbt">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="(item, index) in jx[0].banners" :key="index">
          <h3 class="small">
            <img
              width="100%"
              height="100%"
              :src="item.cover"
              alt=""
              @click="djtp(item)"
            />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 榜单 -->
    <div class="bd">
      <div
        class="bd-item"
        v-for="item in jx[1].shortCut"
        :key="item.msgId"
        @click="phb(item)"
      >
        <div class="bd-t">
          <img width="100%" height="100%" :src="item.cover" alt="" />
        </div>
        <div class="bd-b">
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>

    <!-- 乱七八糟推荐的书 -->
    <div class="lqbzds">
      <h3>{{jx[2].name}}</h3>
      <div class="btsd" v-for="(item, index) in jx[2].list" :key="index">
        <div class="btsd-item" @click="djtp(item)">
          <div class="btsd-iteml">
            <img width="100%" height="100%" :src="item.cover" alt="">
          </div>
          <div class="btsd-itemr">
            <div class="btsd-itemrs">{{item.title}}</div>
            <div class="btsd-itemrz">{{item.author}}/{{item.category}}</div>
            <div class="btsd-itemrx">{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lqbzds">
      <h3>{{jx[3].name}}</h3>
      <div class="btsd" v-for="(item, index) in jx[3].list" :key="index">
        <div class="btsd-item" @click="djtp(item)">
          <div class="btsd-iteml">
            <img width="100%" height="100%" :src="item.cover" alt="">
          </div>
          <div class="btsd-itemr">
            <div class="btsd-itemrs">{{item.title}}</div>
            <div class="btsd-itemrz">{{item.author}}/{{item.category}}</div>
            <div class="btsd-itemrx">{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lqbzds">
      <h3>{{jx[4].name}}</h3>
      <div class="btsd" v-for="(item, index) in jx[4].list" :key="index">
        <div class="btsd-item" @click="djtp(item)">
          <div class="btsd-iteml">
            <img width="100%" height="100%" :src="item.cover" alt="">
          </div>
          <div class="btsd-itemr">
            <div class="btsd-itemrs">{{item.title}}</div>
            <div class="btsd-itemrz">{{item.author}}/{{item.category}}</div>
            <div class="btsd-itemrx">{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lqbzds">
      <h3>{{jx[5].name}}</h3>
      <div class="btsd" v-for="(item, index) in jx[5].list" :key="index">
        <div class="btsd-item" @click="djtp(item)">
          <div class="btsd-iteml">
            <img width="100%" height="100%" :src="item.cover" alt="">
          </div>
          <div class="btsd-itemr">
            <div class="btsd-itemrs">{{item.title}}</div>
            <div class="btsd-itemrz">{{item.author}}/{{item.category}}</div>
            <div class="btsd-itemrx">{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>

  <div class="lqbzds">
      <h3>{{jx[6].name}}</h3>
      <div class="btsd" v-for="(item, index) in jx[6].list" :key="index">
        <div class="btsd-item" @click="djtp(item)">
          <div class="btsd-iteml">
            <img width="100%" height="100%" :src="item.cover" alt="">
          </div>
          <div class="btsd-itemr">
            <div class="btsd-itemrs">{{item.title}}</div>
            <div class="btsd-itemrz">{{item.author}}/{{item.category}}</div>
            <div class="btsd-itemrx">{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lqbzds">
      <h3>{{jx[7].name}}</h3>
      <div class="btsd" v-for="(item, index) in jx[7].list" :key="index">
        <div class="btsd-item" @click="djtp(item)">
          <div class="btsd-iteml">
            <img width="100%" height="100%" :src="item.cover" alt="">
          </div>
          <div class="btsd-itemr">
            <div class="btsd-itemrs">{{item.title}}</div>
            <div class="btsd-itemrz">{{item.author}}/{{item.category}}</div>
            <div class="btsd-itemrx">{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lqbzds">
      <h3>{{jx[8].name}}</h3>
      <div class="btsd" v-for="(item, index) in jx[8].list" :key="index">
        <div class="btsd-item" @click="djtp(item)">
          <div class="btsd-iteml">
            <img width="100%" height="100%" :src="item.cover" alt="">
          </div>
          <div class="btsd-itemr">
            <div class="btsd-itemrs">{{item.title}}</div>
            <div class="btsd-itemrz">{{item.author}}/{{item.category}}</div>
            <div class="btsd-itemrx">{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lqbzds">
      <h3>{{jx[9].name}}</h3>
      <div class="btsd" v-for="(item, index) in jx[9].list" :key="index">
        <div class="btsd-item" @click="djtp(item)">
          <div class="btsd-iteml">
            <img width="100%" height="100%" :src="item.cover" alt="">
          </div>
          <div class="btsd-itemr">
            <div class="btsd-itemrs">{{item.title}}</div>
            <div class="btsd-itemrz">{{item.author}}/{{item.category}}</div>
            <div class="btsd-itemrx">{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Jingxuan",
  data() {
    return {
      jx: {},
      sx: false,
    };
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

    // 排行榜
    phb(item) {
      if (item.title == "排行") {
        axios({
          method: "get",
          url: `https://apis.netstart.cn/yunyuedu${item.url}`,
        }).then((response) => {
          let jg = JSON.stringify(response.data.data.list);
          // 排行榜列表存储
          localStorage.setItem("phb", jg);
        });

        this.$router.push({ path: "/paihangbang" }, () => {});
      }
      if (item.title == "种田") {
        axios({
          method: "get",
          url: `https://apis.netstart.cn/yunyuedu${item.url}`,
        }).then((response) => {
          let jg = JSON.stringify(response.data.data.list);
          // 排行榜列表存储
          localStorage.setItem("phb", jg);
        });

        this.$router.push({ path: "/paihangbang" }, () => {});
      }
      if (item.title == "古言") {
        axios({
          method: "get",
          url: `https://apis.netstart.cn/yunyuedu${item.url}`,
        }).then((response) => {
          let jg = JSON.stringify(response.data.data.list);
          // 排行榜列表存储
          localStorage.setItem("phb", jg);
        });

        this.$router.push({ path: "/paihangbang" }, () => {});
      }
      if (item.title == "完本") {
        axios({
          method: "get",
          url: `https://apis.netstart.cn/yunyuedu${item.url}`,
        }).then((response) => {
          let jg = JSON.stringify(response.data.data.list);
          // 排行榜列表存储
          localStorage.setItem("phb", jg);
        });

        this.$router.push({ path: "/paihangbang" }, () => {});
      }
      if (item.title == "精品") {
        location = `${item.url}`;
      }
    },
  },
  mounted() {
    
    setTimeout(() => {
      this.jx = JSON.parse(localStorage.getItem("jx"));
    }, 500);
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
}

.el-carousel__item:nth-child(2n + 1) {
}
.bd {
  height: 60px;
  padding: 10px 0;
  display: flex;
}
.bd-item {
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}
.bd-t,
.bd-b {
  height: 30px;
}
.lqbzds {
  width: 100%;
}
.btsd {
  height: 80px;
  margin-bottom: 10px;
}
.btsd-item {
  width: 100%;
  height: 100%;
  display: flex;
}
.btsd-iteml {
  flex: 1;

}
.btsd-itemr {
  flex: 4;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 5px;
}
.btsd-itemrs{
  flex: 1;
}
.btsd-itemrz{
  flex: 1;
  font-size: 12px;
  color: gray;
}
.btsd-itemrx{
  flex: 1;
  width: 250px;
  font-size: 12px;
  color: gray;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>