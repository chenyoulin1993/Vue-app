<template>
    <div class="list">

        <div class="list-title">A</div>
        <ul class="list-area">
            <li class="list-item">阿坝藏族羌族自治州</li>
            <li class="list-item">阿克苏地区</li>
            <li class="list-item">阿拉尔</li>
            <li class="list-item">阿拉善盟</li>
            <li class="list-item">阿克苏</li>
            <li class="list-item">阿克苏</li>
            <li class="list-item">阿克苏</li>
            <li class="list-item">阿克苏</li>
            <li class="list-item">阿克苏</li>
            <li class="list-item">阿克苏</li>
           
        </ul>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>


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



</style>
