<template>
<div class="">
    <div>
        <mt-header title="活动详情">
            <router-link to="" slot="left">
                <mt-button icon="back" @click.native="$router.go(-1)"></mt-button>
            </router-link>
        </mt-header>
    </div>
   <div class="detail">
        <p>课题：</p><span>{{detail.course_title}}</span>
        <p>授课老师：</p><span>{{detail.course_teacher}}</span>
        <p>活动时间：</p><span>{{detail.course_time}}</span>
        <p>活动目标：</p><span v-html="detail.course_target"></span>
        <p>课题类型：</p><span>{{detail.course_type}}</span>
    </div> 
</div>
    
</template>

<script>
export default {
    data(){
        return {
            id:this.$route.params.id,
            type:this.$route.params.type,
            detail:{}
        }
    },
    mounted(){
        this.axios.get(`/classes/large?type=${this.type}&id=${this.id}`)
        .then(res => {
            console.log(res)
            this.detail=res.data.detail
        })
        .catch(err => {
            console.error(err); 
        })
        console.log(this.detail)
    }
}
</script>

<style scoped>
    .mint-header{
        background:rgb(15, 226, 226);
        height: 60px;
    }
    .mint-header >>> .mint-header-title{
        font-size: 20px;
    }
    .detail{ 
        padding: 10px 0 400px 10px;
        height: 100%;
        background-image: url(src/assets/images/background/01.png);
        background-size: 100%;
    }
    .detail p{
        font-size: 24px;
        /* font-stretch: ultra-expanded; 浏览器不支持 */
        letter-spacing: 5px;
        padding: 10px 0;
        text-align: inherit;
        border-left: 4px solid #999898;
        text-indent: 20px;
        height: 33%;
        color: red;
        font-weight: 600;
    }
    .detail span{
        display: block;
        font-size: 20px;
        /* text-indent: 50px; */
        margin: 10px 50px;
    }
</style>