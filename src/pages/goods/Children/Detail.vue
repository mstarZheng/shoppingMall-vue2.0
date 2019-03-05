<template>
    <div v-if="detail">
        <div v-html="detail"></div>
    </div>
</template>
<script>
    export default {
        name:"Detail",
        computed:{
            detail(){
                console.log(this.$store.state.productInfo);
                return this.$store.state.productInfo.detail;
            }
        }
    }
</script>
<style scoped lang="less">
    
</style>