<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location-information" />
            安徽
            <router-link class="changeCity" :to="{name : 'changeCity'}">切换城市</router-link>
            [
               <a href="#">阜阳市</a>
               <a href="#">颍州区</a>
               <a href="#">清河东路</a>
            ]
        </div>
        <div class="m-user">
            <router-link class="login" :to="{name : 'login'}">立即登录</router-link>
            <router-link class="register" :to="{name : 'register'}">注册</router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>