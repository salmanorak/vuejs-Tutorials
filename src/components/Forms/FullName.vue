<template>
   <div class="full-name-controller">
        <div class="input-group">
            <span class="text" >First Name</span>
            <input autocomplete="off" type="text" class="input" @input="changeName(true,$event)" :value="firstName">
        </div>
        <div class="input-group">
            <span class="text" >LastName</span>
            <input autocomplete="off"  type="text" class="input" @input="changeName(false,$event)" :value="lastName"/>
        </div>
   </div>
</template>

<script>
export default {
    data(){
        return{
        name : this.value
        }
    },
    computed:{
        firstName(){
            return this.value.split(" ")[0]
        },
        lastName(){
            return this.value.split(" ")[1]
        }
    },
    props:{
        value: String
    },
    methods:{
     changeName(isFirst,event){
         this.name = !isFirst ? this.firstName + ' ' + event.target.value : event.target.value + ' ' + this.lastName
         this.$emit('input', this.name)
     }
}
}
</script>


<style lang="scss" scoped>
.title{
    font-size:24px;
    font-weight:700;
    margin-bottom:10px;
}
.input-group{
    width:100%;
    margin-bottom: 10px;
    text-align:left;
    .text{
        display: inline-block;
        padding: 0 5px;
        background-color:#e9ecef;
        border : 1px solid #ced4da;
        min-width:30%; 
        vertical-align: top;
        line-height: 34px;
        border-radius: 5px 0 0 5px;

    }
    .input{
        margin-left:0;
        display:inline-block;
        height: 36px;
        min-width: 60%;
        max-width: 70%;
        padding-left:5px;
    }
}
.checkbox-group{
display: inline-block;
float:left;
    .checkbox{
        display:inline-block;
        vertical-align:top;
        line-height: 36px;
    }
    .text{
        display: inline-block;
        height: 36px;
        margin-right: 5px;
    }
}
</style>

