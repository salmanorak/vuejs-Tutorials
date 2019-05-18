<template>

    <div class="row">
          <slot></slot>
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <template v-for="server in serverList">
                   <server-list-item :server='server' :key="server.name" />
                </template>
            </ul>
        </div>
        <server-list-detail></server-list-detail>
    </div>
</template>

<script>
import ServerListItem from '@/components/Server/ServerListItem.vue'
import ServerListDetail from '@/components/Server/ServerListDetail.vue'

export default {
    data (){
        return{
            serverList:[
            { name: "Server1", status: 'Critical' },
            { name: "Server2", status: 'Normal' },
            { name: "Server3", status: 'Unknown' },
            { name: "Server4", status: 'Critical' }
            ]
        }
    },
    methods:{
    },
    components:{
        'server-list-item' : ServerListItem,
        'server-list-detail' : ServerListDetail,
    },
}
</script>

