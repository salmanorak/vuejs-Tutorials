<template>
    <li class="list-group-item" @click="checkServer">
    <span> {{server.name}} {{server.status}}</span>
    </li>
</template>

<script>
import {EventBus} from '@/main'

export default {
    props:{
        server : Object
    },
    methods:{
        checkServer(){
            EventBus.$emit('checkServerDetails',this.server)
        }
    }
}
</script>

