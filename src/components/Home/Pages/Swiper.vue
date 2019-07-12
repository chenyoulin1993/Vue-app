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
    data(){
        return {

            swiperList:[
                {
                    id:'01',
                    imgUrl:require('@/assets/img/1.1.png')
                },
                {
                    id:'02',
                    imgUrl:require('@/assets/img/2.1.png')
                },
                {
                    id:'03',
                    imgUrl:require('@/assets/img/3.1.png')
                }


            ],

            swiperOption:{
                pagination: {
                el: '.swiper-pagination'
            },
            loop : true

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
