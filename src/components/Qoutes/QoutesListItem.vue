<template>
    <div class="qouteItem">
    <slot></slot>
    </div>
</template>
<script>

export default {
}
</script>
<style scoped>
.qouteItem{
    margin:30px;
    min-height: 200px;
    max-height: 400px;
    min-width: 200px;
    font-family: 'Arizonia';
    text-decoration: wavy;
    font-size:30px;
    border: 1px solid gray;
    border-radius: 30px;
    display:flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    flex-wrap: wrap;

}
.qouteItem:hover{
    background-color: coral;
    opacity:0.7;
}
</style>