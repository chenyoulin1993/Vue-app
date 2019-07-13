<template>
    <div class="home">

        <HomeHeader></HomeHeader>
        <HomeSwiper></HomeSwiper>
        <HomeIcon></HomeIcon>
        <HomeLocation></HomeLocation>
        <HomeHot></HomeHot>
        <HomeLike></HomeLike>
        <HomeWeekend></HomeWeekend>
        

    </div>
</template>

<script>
import HomeHeader from './Pages/Header.vue'
import HomeSwiper from './Pages/Swiper.vue'
import HomeIcon from './Pages/Icon'
import HomeLocation from './Pages/Location'
import HomeHot  from   './Pages/Hot'
import HomeLike from    './Pages/Like'
import HomeWeekend  from './Pages/Weekend'


export default {
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcon,
        HomeLocation,
        HomeHot,
        HomeLike,
        HomeWeekend
    }
}
</script>


<style>

.home{
    background: #f5f5f5;
}

</style>
