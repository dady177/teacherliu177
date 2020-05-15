<template>
    <div class="background">
        <mt-header fixed>
            <router-link to="" slot="left">
                <mt-button icon='back' @click.native="$router.back(-1)"></mt-button>
            </router-link>
        </mt-header>
        <!-- <p>注册页面</p> -->
        <div>
            <img class="img" src="../assets/images/background/logo.jpg" alt="">
            <input class="block" type="text" placeholder="手机号">
            <input class="block" type="password" placeholder="密码">
            <input class="block" type="password" placeholder="确认密码">
            <button>注册</button>
            <span>or</span>
            <img class="icon" src="../assets/images/icon/wechat.png" alt="">
            <img class="icon" src="../assets/images/icon/QQ.png" alt="">

        </div>
    </div>
</template>
<style scoped>
    .mint-header{
        background: rgb(121, 230, 230);
        height: 50px;
    }
    .background{
        background: rgb(121, 230, 230);
        height: 1000px;
        margin-left: auto;
        /* background: url('../assets/images/background/login.jpg') no-repeat center; */
    }
    .background .img{
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
    span{
        display: block;
        font-size: 22px;
        position: relative;
        left: 50%;
        margin-top: 50px;
        margin-left: -11px;
    }
    .icon{
        display:inline-block;
        /* height: 16px;
        width: 16px; */
        position: relative;
        top: 50px;
        left: 200px;
        margin-left: 20px;
    }
    
</style>
<script>

export default {

    data(){
        return {
            
        }
    }
}
</script>