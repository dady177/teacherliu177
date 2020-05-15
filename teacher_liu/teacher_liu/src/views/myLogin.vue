<template>
    <div class="background">
        <!-- <p>登录页面</p> -->
        <div>
            <img src="../assets/images/background/logo.jpg" alt="">
            <input class="block" type="text" placeholder="账号">
            <input class="block" type="password" placeholder="密码">
            <!-- 记住密码  自动登录-->
            <input class="large" type="checkbox"> <span> 记住密码</span>
            <input class="large" type="checkbox"><span> 自动登录</span> 
            <button>登录</button>
            <router-link to="/register">立即注册>></router-link>
        </div>
        <!-- 底部导航栏 -->
        <tabbar :selectedFooter='selectedFooter'></tabbar>
    </div>
</template>
<style scoped>
    .background{
        background: rgb(121, 230, 230);
        height: 1000px;
        /* background: url('../assets/images/background/login.jpg') no-repeat center; */
    }
    .background img{
        height: 150px;
        border-radius: 50%;
        margin-top: 100px;
        margin-left: 35%;
    }
    .background .block{
        display: block;
        height: 30px;
        width: 350px;
        margin: 20px;
        border-radius: 10px;
        position: relative;
        left: 15%;
        padding: 20px;
        box-sizing: border-box;
    }
    .large{
        display: inline-block;
        height: 30px;
        width: 30px;
        margin-left: 100px;
        margin-top: 5px;
    }
    button{
        display: block;
        height: 50px;
        width: 65%;
        position: relative;
        top: 20px;
        left: 18%;
        border: 0;
        border-radius: 5px;
        font-size: 24px;
    }
    a{
        text-decoration: none;
        color: #fff;
        position: relative;
        top: 50px;
        left: 350px;
    }
    span{
        position: relative;
        top: -8px;
    }
</style>
<script>
import tabbar from "../components/TabBar";
export default {
    components:{
        tabbar
    },
    data(){
        return {
            selectedFooter:'my',
        }
    }
}
</script>