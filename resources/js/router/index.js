import Vue from "vue"
import VueRouter from "vue-router"
import auth from "../app/auth/router"

const daftar_router_modul  =[...auth];

Vue.use(VueRouter);
const router = new VueRouter({
    mode:"history",
    daftar_router_modul
})
export default router