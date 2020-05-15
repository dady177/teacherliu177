<template>
    <footer>
        <mt-tabbar fixed v-model="active">
            <mt-tab-item id="home">
                <img slot="icon" src="../assets/images/icon/index.png" v-show="active!=='home'">
                <img slot="icon" src="../assets/images/icon/index_active.png" v-show="active=='home'">
                首页
            </mt-tab-item>
            <mt-tab-item id="timetable">
                <img slot="icon" src="../assets/images/icon/timetable.png" v-show="active!=='timetable'">
                <img slot="icon" src="../assets/images/icon/timetable_active.png" v-show="active=='timetable'">
                课程表
            </mt-tab-item>
            <mt-tab-item id="book">
                <img slot="icon" src="../assets/images/icon/book.png" v-show="active!=='book'">
                <img slot="icon" src="../assets/images/icon/book_active.png" v-show="active=='book'">
                推荐读物
            </mt-tab-item>
            <mt-tab-item id="my">
                <img slot="icon" src="../assets/images/icon/my.png" v-show="active!=='my'">
                <img slot="icon" src="../assets/images/icon/my_active.png" v-show="active=='my'">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </footer>
</template>
<script>
export default {
    props:['selectedFooter'],
    data(){
        return {
            active:this.selectedFooter
        }
    },
    watch:{
        active(value){
            if(value=='home'){
                this.$router.push('/',()=>{})
            }else if(value=='timetable'){
                this.$router.push('/timetable',()=>{})
            }else if(value=='book'){
                this.$router.push('/book',()=>{})
            }else if(value=='my'){
                this.$router.push('/mylogin',()=>{})
            }
        }
    }
}
</script>