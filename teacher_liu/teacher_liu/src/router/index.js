import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '../views/index.vue';
import Article from "../views/article.vue";
import timetable from "../views/timetable.vue";
import book from "../views/book.vue";
import myLogin from "../views/myLogin.vue";
import task_detail from "../views/task_detail.vue";
import register from "../views/register";
import new_details from "../views/new_details"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path:'/article/:id',
      component:Article
    },
    {
      path:'/timetable',
      component:timetable
    },
    {
      path:'/book',
      component:book
    },
    {
      path:'/mylogin',
      component:myLogin
    },
    {
      path:'/classes/:type/:id',
      component:task_detail
    },
    {
      path:'/register',
      component:register
    },
    {
      path:'/books/newbook/:nid',
      component:new_details
    }

  ]
})
