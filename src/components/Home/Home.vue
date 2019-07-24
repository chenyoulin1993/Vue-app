<template>
    <div class="home">

        <HomeHeader></HomeHeader>
        <HomeSwiper :swiperList='swiperList'></HomeSwiper>
        <HomeIcon :iconsList='iconsList'></HomeIcon>
        <HomeLocation></HomeLocation>
        <HomeHot :hotList='hotList'></HomeHot>
        <HomeLike :likeList='likeList'></HomeLike>
        <HomeWeekend :weekendList='weekendList'></HomeWeekend>
        

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
    },
    data(){
        return{
            swiperList:[],
            iconsList:[],
            likeList:[],
            hotList:[],
            weekendList:[],


        }
    },
    mounted(){
        this.$http.get("/api/dataHome.json")
        .then((res)=>{
            const data = res.data.data[0];
            this.swiperList = data.swiperList;
            this.iconsList = data.iconsList;
            this.likeList = data.likeList;
            this.hotList = data.hotList;
            this.weekendList = data.weekendList;
            
        })
    },

}
</script>


<style>

.home{
    background: #f5f5f5;
}

</style>
