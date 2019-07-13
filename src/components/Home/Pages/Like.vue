<template>
    <div class='like'>
        <div class="like-top">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
            猜你喜欢
        </div>
        <ul>
            <li class="like-item border-bottom" v-for="item in likeList" :key="item.id">
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

    data(){
        return{
            likeList:[
                {
                    id:'01',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg',
                    title:'深圳野生动物园',
                    rates:'19526条评论',
                    fee:'229.9',
                    position:'南山区'
                },
                {
                    id:'02',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1905/e6/e683c8cf5e97ce03a3.img.jpg_200x200_4769276c.jpg',
                    title:'世界之窗',
                    rates:'44128条评论',
                    fee:'85',
                    position:'华侨城'
                },
                {
                    id:'03',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1907/92/924c05d7f374493ea3.img.png_200x200_e8f3e8d6.png',
                    title:'深圳欢乐谷',
                    rates:'30979条评论',
                    fee:'99',
                    position:'南山区'
                },
                {
                    id:'04',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg',
                    title:'深圳小梅沙海洋世界',
                    rates:'19526条评论',
                    fee:'155',
                    position:'小梅沙'
                },
                {
                    id:'05',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1808/48/48ae3e0f9a3f195ca3.img.jpg_200x200_f2195465.jpg',
                    title:'Skyland未来科技馆',
                    rates:'96条评论',
                    fee:'268',
                    position:'福田区'
                },
            ]
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
