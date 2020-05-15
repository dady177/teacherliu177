<template>
    <div class="index">
        <!-- 下拉刷新 -->
        <mt-loadmore :top-method='loadTop' ref='loadmore' topLoadingText='正在刷新' topDropText='释放立即刷新' topPullText='下拉开始刷新'>
            <!-- 导航栏 -->
            <mt-navbar v-model="selectedTab" class="top_navbar" :fixed='fixed'>
                <mt-tab-item id="recommend">推荐</mt-tab-item>
                <mt-tab-item id="novelCoronavirus">新型冠状病毒</mt-tab-item>
                <mt-tab-item id="environmentCreate">环创区角</mt-tab-item>
                <mt-tab-item id="sportsGames">体育游戏</mt-tab-item>
                <mt-tab-item id="art">绘画手工</mt-tab-item>
            </mt-navbar>
            <div class="article-list" v-infinite-scroll='loadMore' infinite-scroll-distance='10' infinite-scroll-disabled='busy' :infinite-scroll-immediate-check='true'>
                <div class="infoItems">
                    <info-item v-for="(item,i) of data" :key='i' :subject='item.subject' :description='item.description' :image='item.image' :id='item.id'></info-item>
                </div>
            </div>
        </mt-loadmore>
        <!-- 底部加载更多 -->
        <!-- 底部导航栏 -->
        <tabbar :selectedFooter='selectedFooter'></tabbar>
    </div>
</template>
<style scoped>
    .infoItems{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        justify-content: left;
    }
    .top_navbar{
        padding: 10px;
    }
    .mint-navbar >>> .is-selected{
        border-bottom: 5px solid #ff3366;
         color: #f33;
    }
    .is-selected >>> .mint-tab-item-label{
        font-size: 18px;
    }
    .mint-navbar >>> .mint-tab-item{
        padding: 15px 0px 5px 0px;
    }
</style>
<script>
// 导入子组件文件
import infoItem from "../components/InfoItem";
import tabbar from '../components/TabBar';
export default {
    // 注册子组件
    components:{
        infoItem,
        tabbar
    },
    data(){
        return {
            selectedTab: 'recommend',
            selectedFooter:'home',
            value:'',
            page:1,
            data:[],
            busy:false,
            pagecount:0,
            fixed:false
        }
    },
    watch:{
        // 监听selecdedTab变量
        selectedTab(value){
            this.data=[];
            this.page=1;
            this.loadDate(value,this.page)
        }

    },
    methods:{
        // type代表文章的类型 page代表页码
        // 发送ajax请求
        loadDate(type,page){
            // 发送ajax请求
            this.axios.get(`/articles?type=${type}&page=${page}`).then(res=>{
                // 接收web服务器返回的数据
                var articles=res.data.articles;
                this.pagecount=res.data.pagecount;
                // console.log(articles)
                // console.log(this.pagecount)
                articles.forEach(item => {
                    // item.image=require(`../assets/${item.image}`)
                    this.data.push(item)
                });
            })
        },
        // 下滑加载更多
        loadMore(){
            // 上一个函数没有执行完成时，即使再次滚动了指定距离，也不在触发函数
            this.busy=true;
            // this.$indicator.open('加载中...');
            // 页码递增
            this.page++;
            if(this.page <= this.pagecount){
                this.loadDate(this.selectedTab,this.page);
            }
            this.busy=false; 
            // this.$indicator.close();
        },
        // 垂直滚动条
        headleScroll(){
            // 垂直滚动条的距离
            var scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            console.log(scrollTop)
            var offsetTop = document.querySelector('.top_navbar').offsetTop;
            console.log(offsetTop)
            if(scrollTop != offsetTop) this.fixed=scrollTop > offsetTop || offsetTop==0;
        },
        // 刷新
        loadTop(){
            this.page=1;
            this.loadDate(this.selectedTab,this.page);
            this.$refs.loadmore.onTopLoaded();
        }
    },
    // 生命周期钩子函数之mounted——挂载完成后向web服务器发送ajax请求
    mounted(){
        // 事件监听器
        window.addEventListener('scroll',this.headleScroll);
        // web导航请求
        this.page=1;
        this.loadDate(this.selectedTab,this.page)
    }
}
</script>
