<template lang="">
    <div>
        <main >
            <Navigate></Navigate>
            <router-view></router-view>
        </main>
    </div>
</template>
<script>
import Navigate from './Navigate.vue';
export default {
    components:{
        Navigate
    }
}
</script>
