<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="title">Sing Up</div>
                    <div class="input-group">
                        <span class="text" >User Name</span>
                        <input type="text" class="input" v-model="userData.userName" />
                    </div>
                    <div class="input-group">
                        <span class="text" >Password</span>
                        <input autocomplete="off" :type="isShowPass ? 'text' : 'password'" class="input" v-model="userData.password"/>
                        <a class="show-pass" :class="{active:isShowPass}"  @click.prevent="isShowPass=!isShowPass" v-text="isShowPass ? 'Hide' :'Show' "></a>
                    </div>
                </div>
            </div>
            <button class="button" @click.prevent="saveUser">Save User Info</button>
        </form>
        <hr>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <button class="button" @click="getUser"> get Information</button>
        <br><br>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <ul class="list-group">
                    <li class="list-group-item" v-for="(user,index) in userList" :key="index">{{user.userName}} - {{user.password}}
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from '@/components/Forms/FullName.vue'
    export default {
        data(){
            return{
                userData:{
                    userName:'',
                    password: '',                    
                },
                isShowPass:false,
                userList:[]
            }
        },
        methods:{
            saveUser(){
                this.$http.post('https://vue-tutorials-orak.firebaseio.com/data.json',this.userData)
            },
            getUser(){
                {
                // GET /someUrl
                this.$http.get('https://vue-tutorials-orak.firebaseio.com/data.json').then(response => {

                    // get body data
                    //console.log(response)
                    let data = response.body
                    Object.keys(data).forEach(key => {
                      this.userList.splice(0,0,data[key]) ;

                        
                    });

                }, response => {
                    // error callback
                });
                }
            }

        },
        components : {
            'FullName' : FullName
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
        position:relative;

    }
    .show-pass{
    position:absolute;
    border: 1px solid #ced4da ;
    background-color:#e9ecefef;
    right: 10%;
    line-height: 34px;
    padding: 0 5px;
    text-decoration: none;
    &.active{
        background-color:#105271;
        color: white;
        font-weight: 700;
    }
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
        padding-right: 5px;
    }
}
.button{
    display:block;
    width:50%;
    text-align: center;
    margin: 0 auto;
    background-color: #f51414dd;
    color:white;
    font-weight: 600;
    font-size:24px;


}
</style>
