<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <p>Select Component that you want to load</p>
                <br>
                <button class="btn btn-primary" @click="selectedComp='appBlue'">Load Blue Template (Fallback Content)</button>
                <button class="btn btn-success" @click="selectedComp='appGreen'" >Load Green Template (Named Slot)</button>
                <button class="btn btn-danger" @click="selectedComp='appRed'" >Load Red Template</button>
                <hr>
                <component :is='selectedComp'>
                    <template v-if="selectedComp == 'appGreen'" v-slot:slot1 >
                    <p >This is Content for Dynamic Green Component which has named slot in its structure </p>
                    </template>
                    <template v-if="selectedComp == 'appRed'" >
                    <p>This is Content for Dynamic Components which have slot in their structure </p>
                    </template>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from '@/components/DynamicComp/Blue.vue';
    import Green from '@/components/DynamicComp/Green.vue';
    import Red from '@/components/DynamicComp/Red.vue';

    export default {
        data(){
            return{
                selectedComp : 'appBlue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
    }
</script>

<style scoped>
button{
    min-width:50%;
    margin:10px auto;
    display: block;
}
</style>
