<template>
    <div>
        <swiper :options="swiperOption" class="header-swiper">
        <!-- slides -->
        <swiper-slide v-for="item in swiperList" :key="item.id"><img :src="item.imgUrl"></swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>

  </swiper>
    </div>
</template>

<script>
export default {
    props:['swiperList'],
    data(){
        return {

            swiperOption:{
                pagination: {
                el: '.swiper-pagination'
            },
            autoplay : true

        }
    }
}
}
</script>

<style scoped>

.header-swiper{
    background: #ccc;
    height: 2rem;
    
}

.header-swiper img{
    width: 100%;
    height: 100%;
}

.header-swiper >>> .swiper-pagination-bullet-active{
    background-color: #ccc;    
}

</style>
