<template>
    <div class="container">
        <server-header></server-header>
        <hr>
        <server-list></server-list>
        <hr>
        <server-footer message='All Servers are managed here'></server-footer>
    </div>
</template>

<script>
import ServerList from '@/components/Server/ServerList.vue'
import ServerHeader from '@/components/Server/ServerHeader.vue'
import ServerFooter from '@/components/Server/ServerFooter.vue'

export default{
    components:{
        'server-list' : ServerList,
        'server-header' : ServerHeader,
        'server-footer' : ServerFooter
    }    
}
</script>



