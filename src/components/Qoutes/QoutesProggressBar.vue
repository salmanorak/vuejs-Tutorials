<template>
    <div class="container">
        <slot></slot>
    </div>
</template>
<script>
export default {
data(){
    return {
        maxcount:10,
        currentCount:5
    }
},
computed:{
    barWidth(){
        return (this.currentCount/this.maxcount)*100
    }
}
}
</script>

<style>
.container{
    margin: 0 auto;
    background-color:white;
    height: 30px;
    width:70%;
    padding:0;
}
.bar{
    line-height: 30px;
    border-radius: 10px;
    background-color: #eee;
    width: 100%;
    height: 100%;
    margin:0;
}
.completed{
    position: relative;
    border-radius : 10px;
    background-color: green;
    width:100%;
    height: 100%;
    margin:0;
    top:-30px;
    opacity:0.5;
    transition:width 500ms
}
</style>