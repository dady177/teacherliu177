<template>
    <div>
        <mt-header fixed title="机构商城">
            <router-link to="" slot="left">
                <mt-button icon='back' @click.native="$router.back(-1)"></mt-button>
            </router-link>
            <mt-button icon='more' slot="right"></mt-button>
        </mt-header>
        <div class="margintop">
            <div class="column">
                <img :src="newbook.front_cover">
                <span class="h1">￥{{newbook.book_price}}.00</span>
                <span>{{newbook.book_title}}</span>
            </div>
            <div>
                <h1>书籍概况</h1>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            nid:this.$route.params.nid,
            newbook:{},
            some_pictures:[]
        }
    },
    mounted(){
        this.axios.get(`/books/newbook?nid=${this.nid}`)
        .then(res => {
            // console.log(res)
            this.newbook=res.data.newbook[0]
            console.log(this.newbook)
            var pictures=res.data.newbook[0].some_pictures
            this.some_pictures=pictures.split(",")
            // console.log(this.some_pictures)
        })
    }
}
</script>

<style scoped>
    .mint-header{
        background: rgb(15, 226, 226);
        height: 50px;
        font-size: 22px;
    }
    img{
        width: 100%;
    }
    .margintop{
        margin-top: 55px;
    }
    .column{
        display: flex;
        flex-direction: column;
    }
    .column span{
        font-size: 26px;
        color: red;
        padding: 10px 15px;
        box-sizing: border-box;
        letter-spacing:4px
    }
    .column span~span{
        color: #000;
    }
</style>