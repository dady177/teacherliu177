<template>
    <div>
        <mt-header fixed>
            <router-link to="" slot="left">
                <mt-button icon='back' @click.native="$router.back(-1)"></mt-button>
            </router-link>
            <mt-button icon='more' slot="right"></mt-button>
        </mt-header>
        <div class="textWord">
            <h6>{{subject}}</h6>
            <div v-html="description">
                {{description}}
                <img src="src\assets\images\recommend\1587962999783.jpg" class="dec_img">
            </div>
            <h4 class="h4">{{tag}}</h4>
        </div>
        <mt-tabbar fixed>
            <mt-tab-item @click.native="like">
                <img ref="not" slot="icon" src="../assets/images/icon/like.png">
                <img ref="active" slot="icon" style="display:none" src="../assets/images/icon/like_active.png">
                点赞
            </mt-tab-item>
            <mt-tab-item @click.native="collect">
                <img ref="not_click" slot="icon" src="../assets/images/icon/collect.png">
                <img ref="yes_active" slot="icon" style="display:none" src="../assets/images/icon/collect_active.png">
                收藏
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<style scoped>
    img{
        width: 100%;
    }
    .mint-header{
        background: rgb(15, 226, 226);
        height: 50px;
    }
    .textWord{
        margin: 65px 10px 0 10px;
        font-weight: 600;
    }
    h6{
        font-size: 24px;
        margin-bottom: 10px;
        line-height: 36px;
    }
    p{
        font-size: 22px;
        font-weight: normal;
    }
    .tag_ul{
        list-style: none;
    }
    .tag_ul>li{
        list-style: none;
        display: inline-block;
        background: olivedrab;
    }
    h4{
        font-size: 22px;
        font-weight: normal;
        height: 25px;
        width: 50%;
        text-align: center;
        line-height: 25px;
        padding: 10px;
        background:rgb(173, 231, 250);
        border-radius: 20px;
        
    }
    .mint-tabbar{
        background: rgb(50, 230, 230);
    }
    .mint-tabbar > .mint-tab-item > .is-selected{
        color: rgb(240, 73, 73);
    }
</style>
<script>
export default {
    data(){
        return {
            // 获取路由中的参数
            id:this.$route.params.id,
            description:'',
            subject:'',
            tag:'',
            num:0
        }
    },
    methods:{
        like(){
            this.num++;
            if(this.num%2==0){
                this.$refs.not.style.display='block';
                this.$refs.active.style.display='none';
            }else{
                this.$refs.not.style.display='none';
                this.$refs.active.style.display='block';
            } 
        },
        collect(){
            this.num++;
            if(this.num%2==0){
                this.$refs.not_click.style.display='block';
                this.$refs.yes_active.style.display='none';
            }else{
                this.$refs.not_click.style.display='none';
                this.$refs.yes_active.style.display='block';
            }
           
        }
    },
    // 声明周期，挂载完成
    mounted(){
        // 发送ajax请求
        this.axios.get(`/article?id=${this.id}`).then(res=>{
            this.description=res.data.article.description;
            this.subject=res.data.article.subject;
            this.tag=res.data.article.tag;
        })
    }
}
</script>