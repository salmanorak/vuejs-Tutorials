<template>
    <div>
        <div class="addqoute">
              <textarea  v-model="QouteText" rows="3" cols="90" ></textarea>
        </div>
        <button @click="qouteAdd()"> Add New Qoute</button>

    </div>
</template>
<script>

import {EventBus} from '@/main'

export default {
    data(){
        return{
        QouteText:''
        }
    },
    methods:{
        qouteAdd(){
        if(!this.QouteText==''){
        EventBus.$emit('AddQoute',this.QouteText)
        this.QouteText='';
        }
        }
    }
}
</script>

<style lang="scss">
.addqoute{
    margin-top:20px;
    textarea{
        padding:20px;
    }
}
button{
    width:20%;
    height:50px;
}
</style>

