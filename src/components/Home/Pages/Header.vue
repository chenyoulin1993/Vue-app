<template>
    <div class="header">

            <div class='header-left'>
                <span class="iconfont">&#xe624;</span>
            </div>
            <div class='header-search'>
                <span class="iconfont">&#xe632;</span>
                输入景点/游玩城市/游玩主题
            </div>
            <div class='header-right'>
                北京<span class="iconfont">&#xe62d;</span>
            </div>




    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='stylus'>

@import '~css/var.styl';

.header{
    width: 100%;
    line-height: .88rem;
    background:$bgColor;
    color:$textColor;
    font-size: .36rem;
    display: flex;
}
.header-left{
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: bold;
}
.header-search{
    flex: 1;
    background: #fff;
    height: .6rem;
    margin: .14rem 0;
    border-radius: .1rem;
    color: #ccc;
    line-height: .6rem;
    font-size: .28rem;
    padding-left:.2rem;
}

.header-right{
    font-size: .28rem;
    padding: 0 .2rem;
}

</style>
