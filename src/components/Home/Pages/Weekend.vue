<template>
    <div class="weekend">

        <p class="first-title">周末去哪儿</p>
        <ul class="weekend-list" v-for="item in weekendList" :key="item.id">
            
            <li class="weekend-item">
                <img :src="item.imgUrl">
                <div class="text-area">
                    <p class="weekend-title">{{ item.title }}</p>
                    <p class="weekend-info">{{ item.info }}</p>
                </div>
            </li>
        
        </ul>





    </div>
</template>

<script>
export default {

    data(){
        return{
            weekendList:[
                {
                    id:'01',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
                    title:'清远周边逛',
                    info:'人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？'
                },
                {
                    id:'02',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
                    title:'浮在海上的绿洲',
                    info:'南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊'
                },
                {
                    id:'03',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg',
                    title:'深圳必打卡',
                    info:'来到深圳，你需要来这里签到'
                },
                {
                    id:'04',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
                    title:'欢乐长隆',
                    info:'世界欢乐汇聚长隆，这里拥有多个大型游乐设备和精彩的演出，和小伙伴们一起感受刺激的体验'
                },
                {
                    id:'05',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg',
                    title:'阳江温泉知多少',
                    info:'这里的天空和大海让人心旷神怡，配上舒缓的优美音乐，泡个暖暖的温泉岂不美哉'
                },
            ]
        }
    }

}
</script>

<style scoped lang='stylus'>
@import '~css/common.styl';

.weekend{
    font-size:.32rem;
    margin-top: 3%;

}
.weekend-list{
   background:#fff;
   margin-bottom: 2%;   
}
.first-title{
    margin:.2rem  .3rem;
}

.weekend-item img{
    height: 2.6rem;
    width:100%;
}

.text-area{
    font-size:.28rem;
    padding:3%;
}
.weekend-info{
    font-size: .25rem;
    color: #616161;
    textOverflow();
    margin-top:.2rem;
}

</style>
