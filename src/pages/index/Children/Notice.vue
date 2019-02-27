<template>
    <div class="notice clearfix">
       <strong class="f-left">公告</strong>
       <div class="f-left">
           <span ref="movedes">{{notice}}</span>
       </div>
    </div>
</template>
<script>
// 1.导入动画框架
    import Velocity from 'velocity-animate';
    export default {
        name:"Notice",
        methods:{
            desAnimatrion(movedes){
                let movedesWidth = movedes.offsetWidth;
                let duration = movedes.innerText.length * 500;
                let self = this;
                Velocity(movedes, {
                    marginLeft: -movedesWidth
                    },{
                        duration: duration,
                        easing: "linear",
                        delay: 1000,
                        complete: function () {
                            movedes.style.marginLeft = 0;
                            self.desAnimatrion(movedes);
                        }
                });
            }
        },
        mounted() {
            let movedes = this.$refs.movedes;
            this.desAnimatrion(movedes);
        },
        computed:{
            notice(){
                return this.$store.state.homeInfo.notice;
            }
        }
    }
</script>
<style scoped lang="less">
    .notice{
        width: 100%;
        height: 75px;
        line-height:75px ;
        padding: 0 15px;
        box-sizing: border-box;
        background: #e4e0e1;
        color: #666;
        &::before{
            font-family: "iconfont";
            font-style: normal;
            font-size: 40px;
            float: left;
            content: "\e6c0";
            color: #fefefe;
        }
        &::after{
            font-family: "iconfont";
            font-style: normal;
            font-size: 30px;
            content: "\e64e";
            float: right;
            color: #fefefe;
        }
        strong{
            margin: 0 15px;
        }
        div{
            max-width: 550px;
            overflow:hidden;
            span{
                white-space: nowrap;
            }
        }
    }
    
</style>