<template>
    <div class="banner">
        <div @click="showSwiper">
            <div class="banner-img">
                <img src="//img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_600x330_28bda6b0.jpg" alt="">
            </div>
            <div class="banner-title">
                深圳野生动物园(AAAA景区)
            </div> 
        </div>  

        <div class="img-swiper" v-show="imgSwiper"  @click="hideSwiper">
        

                <swiper :options="swiperOption" class="header-swiper">
        <!-- slides -->
                <swiper-slide v-for="item in bannerList" :key="item.id"><img :src="item.imgUrl"></swiper-slide>

        <!-- Optional controls -->
                  
                 </swiper>

              <div class="swiper-pagination"  slot="pagination"></div>

        
        
        </div>   

    </div>
</template>

<script>
export default {
    data(){
        return{

            swiperOption:{
                pagination:{
                    el: '.swiper-pagination',
                    type:'fraction'
                }
            },


            bannerList:[
                {
                    id:"01",
                    imgUrl:"//img1.qunarzz.com/sight/p0/1508/44/c8fb5daa16f5f99f8201f323426b3516.water.jpg_r_800x800_e7642201.jpg"
                },
                {
                    id:"02",
                    imgUrl:"//img1.qunarzz.com/sight/p0/1508/b7/400ac6d41f1ac6bb325f8db439b12aa6.water.jpg_r_800x800_b75d6692.jpg"
                },
                {
                    id:"03",
                    imgUrl:"//img1.qunarzz.com/sight/p0/1508/79/334ed37d1fa6d6bf9baa0c7296ce4084.water.jpg_r_800x800_9a0660af.jpg"
                },
            ],
            imgSwiper : false,
        }
    },
    methods:{
        showSwiper(){
            this.imgSwiper = true;
        },
        hideSwiper(){
            this.imgSwiper = false;
        }
        
    }
}
</script>

<style scoped>

.banner{
    position: relative;
}

.banner-img{
    width: 100%;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
}

.banner-img img{
    width:100%
}

.banner-title{
    position: absolute;
    bottom: .4rem;
    left: .3rem;
    font-size: .36rem;
    color: #fff;
}

.img-swiper{
    background: #000;
    position: fixed;
    top:0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center
}
.img-swiper img{
    width: 100%;
    
}

.swiper-pagination, .swiper-pagination-fraction{
    color: #fff;
    bottom: .6rem;
    font-size: .36rem;
}

</style>
