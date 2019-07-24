<template>
    <div class='like'>
        <div class="like-top">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
            猜你喜欢
        </div>
        <ul>
            <li class="like-item border-bottom" v-for="item in likeList" :key="item.id"
            @click="toDetails">
                <div>
                    <img :src="item.imgUrl">
                </div>
                <div class="like-text">
                    <div class="like-title">{{ item.title }}</div>
                    <div class="like-message">{{ item.rates }}</div>
                    <div class="like-map">
                        <span class="like-mark">￥<b>{{ item.fee }}</b></span>起
                        <span class="like-position">{{ item.position }}</span>
                    </div>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    props:['likeList'],
    data(){
        return{
            
        }
    },
    methods:{
        toDetails(){
            this.$router.push("/detail")
        }
    }

}
</script>

<style scoped>


.like{
    margin-top: .2rem;
    background: #fff;
    font-size:.28rem;
    padding: 0 .2rem;
}

.like-top{
    padding: .2rem 0;
   font-size: .32rem;
    
}

.like-top img{
    height: .3rem;
    width: .3rem;
    

}
.like-item{
    position:relative;
    overflow: hidden;
    padding:.2rem;
}

.like-item img{
    float: left;
    width: 1.8rem;
    height: 1.8rem;
}
.like-text{
    overflow: hidden;
    padding-left: .22rem;
}

.like-title{
    font-size: .36rem;
    color: #212121;
    margin-top: .2rem;
}
.like-message{
    margin-top: .3rem;
    color: #616161;
    font-size: .24rem;
}
.like-map{
    margin-top: .3rem;
    position: relative;
}
.like-mark{
    color: #ff8300
}
.like-mark b{
    font-size: .4rem;
}
.like-position{
    position: absolute;
    right: 0;
    top: .1rem;
    font-size: .2rem;
}


</style>
