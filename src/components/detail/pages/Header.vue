<template>
    <div class="header">

        <div class="header-return" v-show="showHeader">
            <span class="border-return"></span>
            <span class="iconfont return">&#xe624;</span>
        </div>



             <div class="header-top" v-show="!showHeader">

            <div class='header-left'>
                <span class="iconfont">&#xe624;</span>
            </div>

            深圳野生动物园
        </div>

    </div>
</template>

<script>
export default {

    data(){
        return{
            showHeader:true
        }
    },
    mounted() {
        window.addEventListener("scroll",function(){
            console.log('1')
        })
    },
}
</script>

<style scoped lang='stylus'>

@import '~css/var.styl';


.header-return{
    position: absolute;
    left: .1rem;
    top: .1rem;
    width: .72rem;
    height:  .72rem;


}
.border-return{
    display: block;
    background: #000;
    width: .72rem;
    height: .72rem;
    opacity: .5;
    border-radius: .36rem;
}

.return{
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
    width: .72rem;
    line-height: .72rem;
    text-align: left;
    text-indent: .24rem;
    font-size: .32rem;
    font-weight: bold;
}

.header-top{
    position: fixed;
    top: 0;
    text-align: center;
    width: 100%;
    line-height: .88rem;
    background:$bgColor;
    color:$textColor;
    font-size: .36rem;
}
.header-left{
    position absolute;
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: bold;
}
</style>
