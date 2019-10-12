import data from './data.js';//自己书写的数据
const Mock = require('mockjs');//使用mockjs模拟数据
// import Mock from 'mockjs';// 二选一
Mock.mock('/api/data', data);