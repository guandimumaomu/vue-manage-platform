import Mock from 'mockjs'
import homeApi from './mockServeData/home'

// 拦截的时候可以写确切url地址，也可以写匹配的正则规则
Mock.mock('/home/getData', homeApi.getStatisticalData())
