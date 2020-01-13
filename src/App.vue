<template>
<div>
<h2> 用Vue練習JS</h2>
<h3>計算買漢堡的價錢</h3>
<p>A買漢堡的價錢:{{priceA}}元</p>
<h3>計算買漢堡 or 飲料的價錢</h3>
<p>B買漢堡的價錢:{{priceB}}元</p>
<p>C買飲料的價錢:{{priceC}}元</p>
<p>D買飲料的價錢:{{priceD}}元</p>
<router-link to="/">首頁</router-link>
<router-link :to="{name:'eat'}">消費計算</router-link>
<router-view></router-view>
</div>
</template>
<script>
export default {
data(){
  return{
    priceA:100,
    priceB:200,
    priceC:300,
    priceD:400
  }
}
}
</script>