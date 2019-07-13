<template>
    <div class="hot">

        <div class="hot-top">

            <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" >
            <span>本周热门榜单</span>
            <span class="hot-title">全部榜单 >></span>
        </div>

        <ul class="hot-list">
            <li class="hot-item" v-for="item in hotList" :key="item.id">
                <img :src="item.imgUrl">
                <p>{{ item.title }}</p>
                <p>
                    <span class="hot-mark">￥{{ item.mark }}</span>起
                </p>
            </li>
        </ul>


    </div>
</template>

<script>
export default {

    data(){
        return{
            hotList:[
                {
                    id:'01',
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1905/e6/e683c8cf5e97ce03a3.img.jpg_250x250_010a4f10.jpg",
                    title:'世界之窗',
                    mark:85
                },
                {
                    id:'01',
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1907/92/924c05d7f374493ea3.img.png_250x250_a219ef42.png",
                    title:'深圳欢乐谷',
                    mark:99
                },
                {
                    id:'01',
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_250x250_b592c33d.jpg",
                    title:'深圳野生动物园',
                    mark:229.9
                },
                {
                    id:'01',
                    imgUrl:"http://img1.qunarzz.com/sight/p0/201307/18/f25ac054eec3804dc8d65eac.jpg_250x250_b9ebca61.jpg",
                    title:'深圳小梅沙海洋公园',
                    mark:60
                },
                {
                    id:'01',
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1902/80/80d7d3ef350b7fffa3.water.jpg_250x250_7ac68b4a.jpg",
                    title:'东部华侨城',
                    mark:134.5
                },
            ]
        }
    }

}
</script>

<style scoped lang='stylus'>
@import '~css/common.styl';

.hot{
    margin-top:.2rem;
    background:#fff;
    font-size: .28rem;
}
.hot-top{
    padding: .2rem;
    
}

.hot-top img{
    position: relative;
    width:.3rem;
    height: .3rem;
    
}

.hot-top span{
    color: #212121;
    font-size: .32rem;
}

.hot-top span.hot-title{
    position: absolute;
    right: .2rem;
    color: #616161;
    font-size: .28rem;

}

.hot-list{
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    height: 3.2rem;
}
.hot-item{
    padding: 0.2rem;
    width: 2rem;
    height: 2rem;
    display: inline-block;
}
.hot-item img{
    width: 100%;
    height: 100%;
}
.hot-item p{
    margin-top: .1rem;
    text-align: center;
    textOverflow();
}
.hot-item p .hot-mark{
    color: #ff8300;
    font-size: .32rem;
}

</style>
