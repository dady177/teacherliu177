<template>
    <!-- 图文项目 -->
    <div class="infoItem">
        <!-- 图片 -->
        <div class="infoItemImage">
            <router-link :to='`article/${id}`'>
                <img :src="image" class="infoItemImg" v-lazy="image">
            </router-link>
        </div>
        <!-- 标题 -->
        <div class="infoItemTitle">
            <router-link :to='`article/${id}`'>{{subject}}</router-link>
        </div>
    </div>
</template>
<script>
export default {
    // 接收父组件传递的数据
    props:['id','subject','description','image']
}
</script>
<style scoped>
    .infoItem{
        height: 250px;
        width: 45%;
        margin: 5px;
        margin-left: 18px;
        border-radius: 5px;
        background: cyan;
    }
    .infoItem a{
        text-decoration: none;
        color:rgb(75, 73, 73);
    }
    .infoItemImage{
        height: 200px;
        width: 100%;
        margin: 10px 10px 5px 12px;
    }
    .infoItemImg{
        height: 200px;
        width: 90%;
        border-radius: 10px;
    }
    .infoItemTitle{
        height: 50px;
        font-size: 22px;
        font-weight: 500;
        padding: 5px;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
</style>