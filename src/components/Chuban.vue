<template>
  <div v-if="cb.length > 0">
    <div class="lbt">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="(item, index) in cb[0].banners" :key="index">
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

  <div class="lqbzds">
      <h3>{{ cb[1].name }}</h3>
      <div class="btsd" v-for="(item, index) in cb[1].list" :key="index">
        <div class="btsd-item" @click="djtp(item)">
          <div class="btsd-iteml">
            <img width="100%" height="100%" :src="item.cover" alt="" />
          </div>
          <div class="btsd-itemr">
            <div class="btsd-itemrs">{{ item.title }}</div>
            <div class="btsd-itemrz">{{ item.author }}/{{ item.category }}</div>
            <div class="btsd-itemrx">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lqbzds">
      <h3>{{ cb[2].name }}</h3>
      <div class="btsd" v-for="(item, index) in cb[2].list" :key="index">
        <div class="btsd-item" @click="djtp(item)">
          <div class="btsd-iteml">
            <img width="100%" height="100%" :src="item.cover" alt="" />
          </div>
          <div class="btsd-itemr">
            <div class="btsd-itemrs">{{ item.title }}</div>
            <div class="btsd-itemrz">{{ item.author }}/{{ item.category }}</div>
            <div class="btsd-itemrx">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lqbzds">
      <h3>{{ cb[3].name }}</h3>
      <div class="btsd" v-for="(item, index) in cb[3].list" :key="index">
        <div class="btsd-item" @click="djtp(item)">
          <div class="btsd-iteml">
            <img width="100%" height="100%" :src="item.cover" alt="" />
          </div>
          <div class="btsd-itemr">
            <div class="btsd-itemrs">{{ item.title }}</div>
            <div class="btsd-itemrz">{{ item.author }}/{{ item.category }}</div>
            <div class="btsd-itemrx">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lqbzds">
      <h3>{{ cb[4].name }}</h3>
      <div class="btsd" v-for="(item, index) in cb[4].list" :key="index">
        <div class="btsd-item" @click="djtp(item)">
          <div class="btsd-iteml">
            <img width="100%" height="100%" :src="item.cover" alt="" />
          </div>
          <div class="btsd-itemr">
            <div class="btsd-itemrs">{{ item.title }}</div>
            <div class="btsd-itemrz">{{ item.author }}/{{ item.category }}</div>
            <div class="btsd-itemrx">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lqbzds">
      <h3>{{ cb[5].name }}</h3>
      <div class="btsd" v-for="(item, index) in cb[5].list" :key="index">
        <div class="btsd-item" @click="djtp(item)">
          <div class="btsd-iteml">
            <img width="100%" height="100%" :src="item.cover" alt="" />
          </div>
          <div class="btsd-itemr">
            <div class="btsd-itemrs">{{ item.title }}</div>
            <div class="btsd-itemrz">{{ item.author }}/{{ item.category }}</div>
            <div class="btsd-itemrx">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lqbzds">
      <h3>{{ cb[6].name }}</h3>
      <div class="btsd" v-for="(item, index) in cb[6].list" :key="index">
        <div class="btsd-item" @click="djtp(item)">
          <div class="btsd-iteml">
            <img width="100%" height="100%" :src="item.cover" alt="" />
          </div>
          <div class="btsd-itemr">
            <div class="btsd-itemrs">{{ item.title }}</div>
            <div class="btsd-itemrz">{{ item.author }}/{{ item.category }}</div>
            <div class="btsd-itemrx">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lqbzds">
      <h3>{{ cb[7].name }}</h3>
      <div class="btsd" v-for="(item, index) in cb[7].list" :key="index">
        <div class="btsd-item" @click="djtp(item)">
          <div class="btsd-iteml">
            <img width="100%" height="100%" :src="item.cover" alt="" />
          </div>
          <div class="btsd-itemr">
            <div class="btsd-itemrs">{{ item.title }}</div>
            <div class="btsd-itemrz">{{ item.author }}/{{ item.category }}</div>
            <div class="btsd-itemrx">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lqbzds">
      <h3>{{ cb[8].name }}</h3>
      <div class="btsd" v-for="(item, index) in cb[8].list" :key="index">
        <div class="btsd-item" @click="djtp(item)">
          <div class="btsd-iteml">
            <img width="100%" height="100%" :src="item.cover" alt="" />
          </div>
          <div class="btsd-itemr">
            <div class="btsd-itemrs">{{ item.title }}</div>
            <div class="btsd-itemrz">{{ item.author }}/{{ item.category }}</div>
            <div class="btsd-itemrx">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lqbzds">
      <h3>{{ cb[9].name }}</h3>
      <div class="btsd" v-for="(item, index) in cb[9].list" :key="index">
        <div class="btsd-item" @click="djtp(item)">
          <div class="btsd-iteml">
            <img width="100%" height="100%" :src="item.cover" alt="" />
          </div>
          <div class="btsd-itemr">
            <div class="btsd-itemrs">{{ item.title }}</div>
            <div class="btsd-itemrz">{{ item.author }}/{{ item.category }}</div>
            <div class="btsd-itemrx">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lqbzds">
      <h3>{{ cb[10].name }}</h3>
      <div class="btsd" v-for="(item, index) in cb[10].list" :key="index">
        <div class="btsd-item" @click="djtp(item)">
          <div class="btsd-iteml">
            <img width="100%" height="100%" :src="item.cover" alt="" />
          </div>
          <div class="btsd-itemr">
            <div class="btsd-itemrs">{{ item.title }}</div>
            <div class="btsd-itemrz">{{ item.author }}/{{ item.category }}</div>
            <div class="btsd-itemrx">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>

  <div class="lqbzds">
      <h3>{{ cb[11].name }}</h3>
      <div class="btsd" v-for="(item, index) in cb[11].list" :key="index">
        <div class="btsd-item" @click="djtp(item)">
          <div class="btsd-iteml">
            <img width="100%" height="100%" :src="item.cover" alt="" />
          </div>
          <div class="btsd-itemr">
            <div class="btsd-itemrs">{{ item.title }}</div>
            <div class="btsd-itemrz">{{ item.author }}/{{ item.category }}</div>
            <div class="btsd-itemrx">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Chuban',
    data() {
    return {
      cb:{}
    }
  },
  mounted() {
    this.cb = JSON.parse(localStorage.getItem("cb"))
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
.btsd-itemrs {
  flex: 1;
}
.btsd-itemrz {
  flex: 1;
  font-size: 12px;
  color: gray;
}
.btsd-itemrx {
  flex: 1;
  width: 250px;
  font-size: 12px;
  color: gray;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>