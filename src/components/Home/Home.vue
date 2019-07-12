<template>
    <div>

        <HomeHeader></HomeHeader>
        <HomeSwiper></HomeSwiper>
        <HomeIcon></HomeIcon>
        <HomeLocation></HomeLocation>
        

    </div>
</template>

<script>
import HomeHeader from './Pages/Header.vue'
import HomeSwiper from './Pages/Swiper.vue'
import HomeIcon from './Pages/Icon'
import HomeLocation from './Pages/Location'


export default {
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcon,
        HomeLocation
     
    }
}
</script>


<style>

</style>
