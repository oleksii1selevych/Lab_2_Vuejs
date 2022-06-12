import { createRouter, createWebHistory } from 'vue-router';
import Task1 from './pages/Task1.vue';

const routes = [
    { path:'/', redirect:'/task1'},
    { path:'/task1', name:'task1', component:Task1 },
    { path:'/task2', name:'task2', component:()=>import('./pages/Task2.vue') },
    { path:'/task3', name:'task3', component:()=>import('./pages/Task3.vue') },
    { path:'/task4', name:'task4', component:()=>import('./pages/Task4.vue') } ,  
    { path:'/task5', name:'task5', component:()=>import('./pages/Task5.vue') } ,

];

const router = createRouter({
    history:createWebHistory(),
    routes,
    scrollBehavior(_, _1, savedPosition){
        if(savedPosition)
            return savedPosition;
            
        return { left:0, top:0 };
    }
});


export default router;
