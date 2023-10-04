<template>
  <el-row class="home" :gutter="20" >
    <el-col :span="10" >
      <el-card style="margin-top: 10px" shadow="hover">
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
      <el-card style="height: 280px">
<!--折线图-->
        <div style="height: 260px; width: 550px" ref="echarts"></div>
      </el-card>
      <div class="graph" style="display: flex; justify-content: space-between; margin-top: 10px">
        <el-card style="height:180px; width: 290px">
          <div style="height: 170px; width: 280px" ref="userEchart">
          <!--柱状图-->
          </div>
        </el-card>
        <el-card style="height:180px; width: 290px">
          <div style="height: 170px; width: 280px" ref="videoEchart">
            <!--饼状图-->
          </div>
        </el-card>
        </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from '@/api/data'
import * as echarts from 'echarts'
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
        const order = data.orderData
        console.log('order=', order)
        const xDate = order.date
        console.log('横坐标xDate=', xDate)
        const keyArray = Object.keys(order.data[0])
        console.log('图例keyArray=', keyArray)
        const series = []
        keyArray.forEach(key => {
          series.push({
            name: key,
            data: order.data.map(item => item[key]),
            type: 'line'
          })
        })
        console.log('数据集：', series)

        const option = {
        // 图表标题
        //   title: {
        //     text: '示例图表'
        //   },
          xAxis: {
            data: xDate
          },
          yAxis: {},
          // 图例
          legend: {
            data: keyArray
          },
          series
        }

        const E = echarts.init(this.$refs.echarts)
        E.setOption(option)

        const userOption = {
          legend: {
            // 图例文字颜色
            textStyle: {
              color: '#333'
            }
          },
          grid: {
            left: '20%'
          },
          // 提示框
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category', // 类目轴
            data: data.userData.map(item => item.date),
            axisLine: {
              lineStyle: {
                color: '#17b3a3'
              }
            },
            axisLabel: {
              interval: 0,
              color: '#333'
            }
          },
          yAxis: [
            {
              type: 'value',
              axisLine: {
                lineStyle: {
                  color: '#17b3a3'
                }
              }
            }
          ],
          color: ['#2ec7c9', '#b6a2de'],
          series: [
            {
              // 图例
              name: '新增用户',
              data: data.userData.map(item => item.new),
              type: 'bar'
            },
            {
              // 图例
              name: '活跃用户',
              data: data.userData.map(item => item.active),
              type: 'bar'
            }
          ]
        }

        const U = echarts.init(this.$refs.userEchart)
        U.setOption(userOption)

        // 饼图
        const videoOption = {
          tooltip: {
            trigger: 'item'
          },
          color: [
            '#0f78f4',
            '#dd536b',
            '#9462e5',
            '#a6a6a6',
            '#e1bb22',
            '#39c362',
            '#3ed1cf'
          ],
          series: [
            {
              data: data.videoData,
              type: 'pie'
            }
          ]
        }
        const V = echarts.init(this.$refs.videoEchart)
        V.setOption(videoOption)
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
