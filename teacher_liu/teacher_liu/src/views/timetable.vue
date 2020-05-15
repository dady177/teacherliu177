<template>
    <div>
        <mt-header title="周计划总览" fixed></mt-header>
        <div class="large">
            <div class="classes">大班周计划</div>
            <mt-navbar v-model="large">
                <mt-tab-item id="large_Monday">星期一</mt-tab-item>
                <mt-tab-item id="large_Tuesday">星期二</mt-tab-item>
                <mt-tab-item id="large_Wednesday">星期三</mt-tab-item>
                <mt-tab-item id="large_Thursday">星期四</mt-tab-item>
                <mt-tab-item id="large_Friday">星期五</mt-tab-item>
            </mt-navbar>
            <div class="infoItemTitle">
                <router-link  v-for="(item,i) of largeClasses" :key="i" :to="`/classes/large/${item.id}`">✍ - 活动 {{i+1}} —— {{item.course_title}}</router-link>
            </div>
        </div>
        <div class="margin_top"> 
            <div class="classes">中班周计划</div>
            <mt-navbar v-model="middle">
                <mt-tab-item id="middle_Monday">星期一</mt-tab-item>
                <mt-tab-item id="middle_Tuesday">星期二</mt-tab-item>
                <mt-tab-item id="middle_Wednesday">星期三</mt-tab-item>
                <mt-tab-item id="middle_Thursday">星期四</mt-tab-item>
                <mt-tab-item id="middle_Friday">星期五</mt-tab-item>
            </mt-navbar>
            <div class="infoItemTitle">
                <router-link v-for="(item,i) of middleClasses" :key="i" :to="`/classes/middle/${item.id}`">✍ - 活动 {{i+1}} —— {{item.course_title}}</router-link>
            </div>
        </div>
        <div class="margin_top">
            <div class="classes">小班周计划</div>
            <mt-navbar v-model="small">
                <mt-tab-item id="small_Monday">星期一</mt-tab-item>
                <mt-tab-item id="small_Tuesday">星期二</mt-tab-item>
                <mt-tab-item id="small_Wednesday">星期三</mt-tab-item>
                <mt-tab-item id="small_Thursday">星期四</mt-tab-item>
                <mt-tab-item id="small_Friday">星期五</mt-tab-item>
            </mt-navbar>
            <div class="infoItemTitle">
                <router-link  v-for="(item,i) of smallClasses" :key="i" :to="`/classes/small/${item.id}`">✍ - 活动 {{i+1}} —— {{item.course_title}}</router-link>
            </div>
        </div>
        <!-- 底部导航栏 -->
        <tabbar :selectedFooter='selectedFooter'></tabbar>
    </div>
</template>
<style scoped>
    .mint-header{
        height: 70px;
        font-size: 24px;
        color: #000;
        background: #fff;
        border-bottom: 1px solid #b9b9b9;
    }
    .large{
        margin-top: 80px;
    }
    .margin_top{
        margin-top: -230px;
        /* margin-left: 10px; */
    }
    .classes{
        height: 50px;
        width: 120px;
        background: rgb(222, 140, 233);
        border-radius: 0 20px 0 0;
        font-size: 22px;
        line-height: 50px;
    }
    
    .mint-navbar{
        display: flex;
        flex-direction: column;
        width:120px;
        height: 250px;
    }
    .mint-navbar >>> .is-selected{
        background: #fff;
        border-left: 4px solid rgb(222, 140, 233);
        border-bottom: 0;
    }
    .is-selected >>> .mint-tab-item-label{
        font-size: 18px;
        color: #000;
        font-weight: 600;
    }
    .mint-tab-item{
        background: #f4f6f8;
    }
    .mint-tab-item:last-child{
        border-radius: 0 0 20px 0;
    }
    .infoItemTitle{
        display: flex;
        flex-direction: column;
        /* margin-right: 20px; */
        height: 270px;
        position: relative;
        top: -251px;
        left: 120px;
        /* border: 1px solid #e9e5e0; */
        /* background: blanchedalmond; */
    }
    .infoItemTitle a{
        text-decoration: none;
        color: #221e1f;
        font-size: 26px;
        padding: 13px 30px 14px 50px;
        border-bottom: 1px solid #ebebe4;
        /* border-bottom-width: 80%; */
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
            selectedFooter:'timetable',
            large:'large_Monday',
            largeClasses:[],
            middle:'middle_Monday',
            middleClasses:[],
            small:'small_Monday',
            smallClasses:[]
        }
    },
    watch:{
        // 监听large变量
        large(value){
            this.largeClasses=[];
            this.large_classes(value)
        },
        middle(value){
            this.middleClasses=[];
            this.middle_classes(value)
        },
        small(value){
            this.smallClasses=[];
            this.small_classes(value)
        }
    },
    methods:{
        // large代表大班星期几
        // 发送ajax请求
        large_classes(large){
            // 发送ajax请求
            this.axios.get(`/timetableLarge?large=${large}`).then(res=>{
                // 接收web服务器返回的数据
               var largeClasses=res.data.large
               largeClasses.forEach(item => {
                    this.largeClasses.push(item)
                });
            })
            console.log(this.largeClasses)
        },
        middle_classes(middle){
            // 发送ajax请求
            this.axios.get(`/timetableMiddle?middle=${middle}`).then(res=>{
                // 接收web服务器返回的数据
               var middleClasses=res.data.middle
               middleClasses.forEach(item => {
                    this.middleClasses.push(item)
                });
            })
            console.log(this.middleClasses)
        },
        small_classes(small){
            // 发送ajax请求
            this.axios.get(`/timetableSmall?small=${small}`).then(res=>{
                // 接收web服务器返回的数据
               var smallClasses=res.data.small
               smallClasses.forEach(item => {
                    this.smallClasses.push(item)
                });
            })
            console.log(this.smallClasses)
        },
    },
    // 声明周期函数：mounted挂载完成
    mounted(){
        this.large_classes(this.large);
        this.middle_classes(this.middle);
        this.small_classes(this.small)
    }
}
</script>