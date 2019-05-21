<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <div v-myOn:click="clickFunc"> CustomDirective for All Events --> Click Count : {{clickCount}}</div>
                <hr/>
                <div v-myOn:mouseenter="mouseFnc"> CustomDirective for All Events --> mouseEnter Count : {{mouseenterCount}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    data(){
        return{
          clickCount:0  ,
          mouseenterCount:0
        }
    },
    methods:{
        clickFunc(){
            this.clickCount++
        },
        mouseFnc(){
            this.mouseenterCount++
        }
    },
    directives:{
        'myOn' :{
            bind(el, binding, vnode){
            if(typeof (binding.value) == 'function' && binding.arg.length>0 ){
             el.addEventListener(binding.arg,binding.value)
             }
            }
        }
    }
    }
</script>

<style>
</style>
