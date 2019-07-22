<template>
    
            <div ref="wrapper" class="wrapper">
                <div class="content">
             <div class="hot">
                <div class="hot-title">热门城市</div>
                <ul class="hot-list">
                   <li class="hot-item" v-for="item in cityHot" :key="item.id">
                       {{ item.name }}
                   </li>
                </ul>
            </div>
            


            <div class="alphabet">
        <div class="alphabet-title">字母排序</div>
        <ul class="alphabet-list">
          
          
          <li class="alphabet-item" v-for="(val,key) in cityList" v-on:click="changeSort(key)">
              {{ key }}
              </li>
        </ul>

    </div>




            <div class="list">
                <div v-for="(val,key) in cityList" :ref="key" >
                    <div class="list-title">{{key}}</div>
                    <ul class="list-area">
                    <li class='list-item' v-for="item in val" :key="item.id">
                        {{ item.name }}
                    </li>        
                    </ul>
                </div>
            </div>



        </div>
    </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
    props:['cityList','cityHot'],
    
    data(){
        
        return{
            scroll:' ',
        }
    },
    mounted(){
 
        let wrapper = this.$refs['wrapper']
        this.scroll = new BScroll(wrapper)

    },
    methods:{
        changeSort(sortName){

            this.scroll.scrollToElement(this.$refs[sortName][0])

            //console.log(this.$refs[sortName][0])

        }
    }

    
    
}
</script>

<style scoped>

.wrapper{
    position: absolute;
    left: 0;
    right: 0;
    bottom:0;
    top:.88rem;
}


.list-title{
    font-size: .24rem;
    color: #212121;
    padding: .2rem .3rem;
}
.list-list{
    position: relative;
    overflow: hidden;
    background: #fff;
    font-size: .28rem;
    color: #212121;
}
.list-area{
    position: relative;
    background: #fff;
     overflow: hidden;
}
.list-item{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 25%;
    font-size: .28rem;
    text-align: center;
    line-height: .9rem;
    float: left;
    border-bottom: .02rem solid #ddd;
}

.list-area::before{
    content:' ';
    position: absolute;
    left: 25%;
    width: 25%;
    height: 100%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}
.list-area::after{
    content:' ';
    position: absolute;
    left: 75%;
    width: 25%;
    height: 100%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}
.hot-title{
    font-size: .24rem;
    color: #212121;
    padding: .2rem .3rem;
}
.hot-list{
    position: relative;
    overflow: hidden;
    background: #fff;
    font-size: .28rem;
    color: #212121;
}
.hot-list::before{
    content: " ";
    position: absolute;
    height: 100%;
    width: 33.33%;
    left:33.33%;
    border-left:.02rem solid #ddd ;
    border-right:.02rem solid #ddd ;
}
.hot-item{
    width: 33.33%;
    text-align: center;
    height: .9rem;
    line-height: .9rem;
    float: left;
    border-bottom:.02rem solid #ddd;
}
.alphabet-title{
    font-size: .24rem;
    color: #212121;
    padding: .2rem .3rem;
}
.alphabet-list{
    position: relative;
    overflow: hidden;
    background: #fff;
    font-size: .28rem;
    color: #212121;
}

.alphabet-item{
    width: 16.666%;
    text-align: center;
    height: .9rem;
    line-height: .9rem;
    float: left;
}


</style>
