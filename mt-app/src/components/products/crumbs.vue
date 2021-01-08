<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>{{ $store.state.position }}美团</el-breadcrumb-item>
    <el-breadcrumb-item>{{ $store.state.position }}火锅</el-breadcrumb-item>
  </el-breadcrumb>
</template>
