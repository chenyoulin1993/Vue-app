<template>

    <div class='icons'>
        
        <swiper :options="swiperOption" class="icon-swiper">

            <swiper-slide class="icons-item" v-for="item in page" :key="item.id">
                <div class='icons-item' v-for="page in item">
                    <img :src="page.imgUrl">
                    <p>{{ page.title }}</p>
                </div>
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
         
        </swiper>
        
        
        </div>

</template>

<script>
export default {
    name:'HomeIcon',
    props:['iconsList'],
    data(){
        return{
            swiperOption:{},
            
        }
    },
    computed:{
        page(){
            let pages = [];
            this.iconsList.forEach((item,index)=>{
                let idx = Math.floor(index/8);
                if(!pages[idx]) pages[idx] = [];
                pages[idx].push(item)
            })
            return pages;
        }
    }
}
</script>

<style scoped lang='stylus'>
@import '~css/common.styl';

.icons{
    width: 100%;
    overflow: hidden;
    background: #fff;
}

.icons-item{
    float: left;
    width:25%;
    padding-bottom: 2%;
    height:0%;   
}

.icons-item img{
    width: 1.1rem;
    height: 1.1rem;
    display: block;
    margin:0 auto;
    padding-top: .1rem;
}

.icons-item p{
    margin-top: .1rem;
    font-size: .28rem;
    text-align: center;
    color: #212121;
    textOverflow()
}



</style>
