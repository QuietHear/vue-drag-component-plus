/*
 * @Author: aFei
 * @Date: 2024-08-05 13:45:00
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2024-08-12 11:24:04
*/
<template>
  <el-config-provider :locale="zh">
    <router-view />
  </el-config-provider>
</template>
<script setup>
import zh from "element-plus/dist/locale/zh-cn.mjs";
</script>