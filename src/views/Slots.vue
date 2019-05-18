<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                 <app-blue>
                     <p>Normal Slot with no name</p>
                    <p>This Block is Blue</p>
                    <p>It is not red or green</p>
                </app-blue>
                <app-green>
                    <template v-slot:slot1>
                    <p>Named Slot</p>
                    <p>This Block is green (slot1) </p>
                    </template>
                    <template v-slot:slot2>
                    <p>It is not red or green (slot2)</p>
                    </template>
                </app-green>
                <app-red></app-red>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from '@/components/Slots/Blue.vue';
    import Green from '@/components/Slots/Green.vue';
    import Red from '@/components/Slots/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
    }
</script>

<style>
</style>