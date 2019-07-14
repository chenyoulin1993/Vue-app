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
    props:['weekendList'],
    data(){
        return{
            
        }
    }

}
</script>

<style scoped lang="stylus">
@import "~css/common.styl";

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
