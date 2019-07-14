<template>
    <div class="city">
        <cityHeader></cityHeader>
        <cityHot></cityHot>
        <cityAlphabet></cityAlphabet>
        <cityList></cityList>
    </div>
</template>

<script>

import cityHeader from './Pages/Header'
import cityHot from './Pages/Hotcity'
import cityAlphabet from './Pages/Alphabet'
import cityList from './Pages/Citylist'

export default {
    components:{
        cityHeader,
        cityHot,
        cityAlphabet,
        cityList
    }
}
</script>

<style scoped>

.city{
    background: #f5f5f5;
}


</style>
