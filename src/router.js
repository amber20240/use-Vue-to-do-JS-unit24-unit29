import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import eat from "./eat.vue"

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:"/",
            component:App,
        },{
            path:"/eat",
            name:"eat",
            component:eat
        }
    ]
})