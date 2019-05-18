<template>
    <div class="row">
        <div class="col-xs-12">
            <footer>
                <p>{{message}}</p>
            </footer>
        </div>
    </div>    
</template>

<script>
export default {
    props:{
        message : String
    }
}
</script>
