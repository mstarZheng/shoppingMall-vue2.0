<template>
    <div>
        
    </div>
</template>
<script>
    export default {
        name:"goods",
        created(){
            this.$store.dispatch("requestProductDetail",this.$route.query.id);
        }
    }
</script>
<style scoped lang="less">
    
</style>