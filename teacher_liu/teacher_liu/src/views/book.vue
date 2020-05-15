<template>
    <div>
        <!-- 顶部轮播图 -->
        <div class="swipe">
            <mt-swipe :auto='4000'>
                <mt-swipe-item>
                    <img src="../assets/images/banner/20200430162136.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../assets/images/banner/20200430162226.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../assets/images/banner/20200430162237.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../assets/images/banner/20200430162247.jpg" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 搜索区 -->
        <div class="search">
            <mt-search v-model="value" cancel-text="取消" placeholder="搜材料、区角、教案"></mt-search>
            <div class="nav_ad">
                <div >园所培训</div>
                <div>幼师工具</div>
                <div>每日福利</div>
            </div>
        </div>
        <!-- <p>推荐读书页面</p> -->
        <!-- 推荐新书 -->
        <h1>推荐·新书</h1>
        <div class="row newbooks">
            <div v-for="(item,index) of newbooks" :key="index">
                <div class="new">新品</div>
                <img class="img" :src="item.front_cover" alt="">
                <span class="block" @click="newbook(item.nid)">{{item.book_title | ellipsis}}</span>
                <span class="span">￥{{item.book_price}}</span>
                <img src="../assets/images/icon/cart.png" alt="">
            </div>
        </div>
        <!-- 绘本故事 -->
        <!-- 推荐绘本 -->
        <div class="pictures">
            <h1>推荐·绘本</h1>
            <router-link to="/books/pictures/small">小班绘本</router-link>
            <router-link to="/books/pictures/middle">中班绘本</router-link>
            <router-link to="/books/pictures/large">大班绘本</router-link>
            <div class="picture" v-for="(item,index) of pictures" :key="index">
                <img class="img" :src="item.picture" alt="">
                <div class="column">
                    <span class="block">{{item.book_title | ellipsis}}</span>
                    <div>
                        <span class="span">￥{{item.book_price}}</span>
                        <router-link :to="`/books/picture/${item.pid}`">查看详情</router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- 大家都在看 -->
        <h1>大家·都在看</h1>
        <div class="row everyones">
            <div v-for="(item,index) of everyones" :key="index">
                <img class="img" :src="item.front_cover" alt="">
                <span class="block">{{item.book_title | ellipsis}}</span>
                <span class="span">￥{{item.book_price}}</span>
                <img src="../assets/images/icon/cart.png" alt="">
            </div>
        </div>
        <!-- 家长用书 -->
        <h1>家长用书</h1>
        <div class="row patriarchs">
            <div v-for="(item,index) of patriarchs" :key="index">
                <img class="img" :src="item.picture" alt="">
                <span class="block">{{item.book_title | ellipsis}}</span>
                <span class="span">￥{{item.book_price}}</span>
                <!-- <img src="../assets/images/icon/cart.png" alt=""> -->
            </div>
        </div>
        <!-- 底部导航栏 -->
        <tabbar :selectedFooter='selectedFooter'></tabbar>
    </div>
</template>
<style scoped>
    .patriarchs{
        flex-wrap: wrap;
    }
    .patriarchs div{
         width: 33%;
         text-align: center;
    }
    .patriarchs .block{
        display: block;
        width: 95%;
        padding: 10px;
        font-size: 20px;
        letter-spacing:3px;
        box-sizing: border-box;
        text-align: left;
    }
    .patriarchs img{
        height: 180px;
    }
    .everyones{
        flex-wrap: wrap;
    }
    .everyones div{
        background: #fff;
        margin-bottom: 10px;
        text-align: center;
    }
    .everyones .img{
        width: 200px;
    }
    .everyones .block{
        /* width: %; */
        text-align: left;
        display: block;
        padding: 5px 10px;
        box-sizing: border-box;
        font-size: 20px;
    }
    .pictures{
        margin: 10px 20px 10px 15px;
    }
    .picture{
        display: flex;
        flex-direction: row;
        background: #fff;
        margin: 10px 0;
        border-radius: 5px;
    }
    .column{
        display: flex;
        flex-direction: column;
    }
    .pictures img{
        height: 150px;
    }
    .pictures a{
        display: inline-block;
        height: 40px;
        line-height: 40px;
        margin-left: 10px;
        font-size: 20px;
        text-decoration: none;
        color: rgb(70, 70, 70);
        background: rgb(236, 236, 236);
        width: 30%;
        border-radius: 5px;
        text-align: center;
    }
    .picture .block{
        font-size: 24px;
        display: inline-block;
        margin: 32px 0 20px 5px;
        letter-spacing:2px
    }
    .span{
        display: inline-block;
        margin: 0 150px 10px 10px;
        color: red;
        font-size: 20px;
    }
    .picture a{
        background: rgb(155, 209, 101);
        color: #fff;
    }

    /* .pictures div{
        width: 750px;
    } */
    .row{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    h1{
        display: block;
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
        box-sizing: border-box;
        font-size: 26px;
        font-weight: 600;
        color: red;
        letter-spacing:5px

    }
    .newbooks .img{
        width: 150px;
    }
    .newbooks .new{
        background: red;
        color: #fff;
        border-radius: 0 30px 30px 0;
        line-height: 30px;
        width: 60px;
        height: 30px;
        /* z-index: 9999; */
        /* margin-top: 20px; */
    }
    .newbooks div{
        text-align: center;
        background: #fff;
        margin: 10px;
        border-radius: 8px;
    }
    .newbooks .block{
        display: block;
        padding: 3px 10px;
        box-sizing: border-box;
        text-align: left;
        line-height: 30px;
        letter-spacing:2px
    }
    .newbooks .span{
        text-align: left;
        margin: 0 30px 0 -30px;
        color: red;
        font-size: 20px;
    }
    .mint-swipe{
        height: 235px;
        width: 100%;
    }
    .swipe img{
        height: 100%;
        width: 100%;
    }
    .search{
        border-radius: 5px;
        height: 200px;
        background:#f8f8f6;
        position: relative;
        top: -25px;
        bottom: -25px;
        margin: 0 10px;
    }
    .search >>>.mint-search{
        height: 200px;
    }
    .search>>>.mint-searchbar{
        padding: 0;
        margin: 15px 25px;
        border-radius: 5px;
    }
    .mint-searchbar>>>.mint-searchbar-core{
        display: block;
        padding: 5px;
        background: #f7f7f3;
    }
    .search .nav_ad{
        width:96%;
        height: 120px;
        /* background:#f38d2f; */
        position: relative;
        top: -135px;
        left: 1%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .nav_ad div{
        margin-left: 10px;
        width:30%;
        border-radius: 5px;
        background:chartreuse;
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
            selectedFooter:'book',
            value:'',
            newbooks:[],
            pictures:[],
            everyones:[],
            patriarchs:[],
            kind_id:'recommend'
        }
    },
    methods:{
        newbook(nid){
            this.$router.push({
                path:`/books/newbook/${nid}`
            })
        }
    },
    mounted(){
        // 获取推荐新书的数据
        this.axios.get('/books/newbooks')
        .then(res => {
            // console.log(res)
            this.newbooks=res.data.newbooks
            // console.log(this.newbooks)
        })
        // 获取推荐绘本的数据
        this.axios.get(`/books/pictures?kind_id=${this.kind_id}`)
        .then(res => {
            // console.log(res)
            this.pictures = res.data.pictures
            // console.log(this.pictures)
        })
        // 获取大家都在看的数据
        this.axios.get('/books/everyones')
        .then(res => {
            // console.log(res)
            this.everyones=res.data.everyones;
            // console.log(this.everyones)
        })
        // 获取家长用书的数据
        this.axios.get('/books/patriarchs')
        .then(res => {
            // console.log(res)
            this.patriarchs=res.data.patriarchs;
            console.log(this.patriarchs)
        })
    },
    filters:{
        ellipsis (value) {
        if (!value) return ''
        if (value.length > 14) {
            return value.slice(0,14) + '...'
        }
        return value
        }
    }
}
</script>