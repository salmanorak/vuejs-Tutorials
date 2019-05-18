<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{server.name}}</p>
        <p>{{server.status}}</p>
        <button v-if="server && server.name && server.name.length > 0" @click="makeServerNormal()"> Make it Normal</button>
    </div>
</template>

<script>

import {EventBus} from '@/main'

export  default {
    data(){
        return{
            server:''
        }
    },
    methods:{
       makeServerNormal (){
            this.server.status='Normal'
        } 
    },
    created(){
        EventBus.$on('checkServerDetails',(server)=>{
            this.server=server
        })
    }
}
</script>

<style scoped>
 button{
     width: 100%;
 }
</style>