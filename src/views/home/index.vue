<template>
  <el-row class="home" :gutter="20" >
    <el-col :span="10" >
      <el-card style="margin: 10px" shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2021-7-19</span></p>
          <p>上次登录地点：<span>武汉</span></p>
        </div>
      </el-card>
      <el-card style="margin: 10px; height: 360px">
        <el-table :data="tableData" >
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val">
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="14">
      <div class="num">
        <el-card class="num-card"
          v-for="item in countData"
          :key="item.name"
          :body-style="{display:'flex', padding:0}">
            <i class="icon" :class="`el-icon-${item.icon}`" :style="{background : item.color}"></i>
            <div class="detail">
              <p class="num1">￥{{item.value}}</p>
              <p class="txt">{{item.name}}</p>
            </div>
        </el-card>
      </div>
      <el-card style="height: 280px"></el-card>
      <div class="graph" style="display: flex; justify-content: space-between; margin-top: 10px">
        <el-card style="height:180px; width: 290px"></el-card>
        <el-card style="height:180px; width: 290px"></el-card>
        </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from '@/api/data'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'home',
  data () {
    return {
      userImg: require('@/assets/images/user.png'),
      tableData: [],
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      countData: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          name: '本月支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '本月收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '本月未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        }
      ]

    }
  },
  mounted () {
    getData().then(res => {
      const { code, data } = res.data
      if (code === 20000) {
        this.tableData = data.tableData
      }
      console.log(res)
    })
  }

}
</script>

<style lang="less" scoped>
.user{
  display: flex;
  align-items: center;
}

p{
  margin: 0;
}

.num{
  display: flex;
}
.num-card{
  margin: 5px;
}

img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 10px;
}
</style>
