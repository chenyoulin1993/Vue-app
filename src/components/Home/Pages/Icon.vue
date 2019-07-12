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
    </div>
</template>

<script>
export default {
    name:'HomeIcon',

    data(){
        return{
            swiperOption:{},
            iconsList:[
                {
                  id:'01',
                  imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                  title:'景点门票'
                },
                {
                  id:'02',
                  imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                  title:'深圳必游'
                },
                {
                  id:'03',
                  imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/4d/a1eda1a2b8414302.png',
                  title:'暑期夜场'
                },
                {
                  id:'04',
                  imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                  title:'海洋馆'
                },
                {
                  id:'05',
                  imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/bda58ffc3016edad84e656e8a94b0321.png',
                  title:'广州融创'
                },
                {
                  id:'06',
                  imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/4d/a1eda1a2b8414302.png',
                  title:'深圳动物园'
                },
                {
                  id:'07',
                  imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/cba147cf6cfcea7109d0bff6aac6f626.png',
                  title:'世界之窗'
                },
                {
                  id:'08',
                  imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
                  title:'东部华侨城'
                },
                {
                  id:'09',
                  imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
                  title:'水上乐园'
                },
                {
                  id:'10',
                  imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
                  title:'玩转长隆'
                }
            ]
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

<style scoped>

.icon{
    width: 100%;
    overflow: hidden;
}

.icons-item{
    float: left;
    width:25%;
    padding-bottom: 5%;
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
}



</style>
