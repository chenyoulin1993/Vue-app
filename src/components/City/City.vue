<template>
    <div class="city">
        <cityHeader></cityHeader>
        <cityList :cityList = 'cityList' :cityHot = 'cityHot'></cityList>
    </div>
</template>

<script>

import cityHeader from './Pages/Header'
import cityList from './Pages/Citylist'

export default {
    components:{
        cityHeader,
        cityList
    },
    data(){
        return{
            cityHot:[],
            cityList:{}
        }
    },
    mounted(){

        this.$http.get('/api/city.json')
        .then((res)=>{
            let data = res.data.data;
            this.cityHot = data.hotCities;
            this.cityList = data.cities;
        })

    }
}
</script>

<style scoped>

.city{
    background: #f5f5f5;
}


</style>
