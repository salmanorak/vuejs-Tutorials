<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>1- ) Reverses the Text with local filter</p>
                <p> Normal Text is : {{text}}</p>
                <p>Reversed Text is :  {{text | reverse}}</p>
                <hr/>
                
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>2- ) Count length of the Text with global filter</p>
                <p> Normal Text is : {{text}}</p>
                <p>Count Added Text is :  {{text | addCountLength}}</p>
                <hr/>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p>3- ) same as in Exercises 1 & 2, now with Computed Properties</p>
                <p> Normal Text is : {{text4}}</p>
                <p>Reversed Text is :  {{reversedText}}</p>
                <p> Normal Text is : {{text4}}</p>
                <p>Count Added Text is :  {{addCountText}}</p>
                <hr/>

                 <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <p>4- ) same as in Exercises 1 & 2, now with Mixin Computed Properties</p>
                <p> Normal Text is : {{text4}}</p>
                <p>Reversed Text is :  {{reversedTextinMixin}}</p>
                <p> Normal Text is : {{text4}}</p>
                <p>Count Added Text is :  {{addCountTextinMixin}}</p>
                <hr/>
            </div>
        </div>
    </div>
</template>

<script>
import {exMixin} from '@/reverse'
    export default {
       mixins:[exMixin],
       data(){
            return {
                text: 'Deneme',
                text4 : 'mixinTest'
            }
        },
        filters:{
            reverse(value){
                if(typeof (value) == 'string'){
                    return value.split("").reverse().join("");
                }else{
                    return value
                }

            }
        },
        computed: {
            reversedText (){
                return this.text4.split("").reverse().join("");
            }
        ,
            addCountText(){
                return this.text4 + ' ( ' + this.text4.length + ' )';

        }
        }
    }
</script>

<style>
</style>
