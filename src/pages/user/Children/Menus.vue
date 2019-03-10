<template>
    <div class="user-menus">
        <ul v-if="menuslist">
            <li v-for="(value,key,index) in menuslist" :key="index">
                <img :src="value.icon" alt="">
                <p>{{value.name}}</p>
            </li>
        </ul> 
    </div>
</template>
<script>
    export default {
        name:"Menus",
        computed:{
            menuslist(){
                return this.$store.state.userInfo.menus;
            }
        }
    }
</script>
<style scoped lang="less">
  .user-menus{
      width: 100%;
      background: #fff;
      box-sizing: border-box;
      ul{
          display: flex;
          justify-content:space-around;
          flex-wrap: wrap;
          padding-bottom: 100px;
          padding-top: 20px;
          li{
              margin: 20px 0;
              width: 160px;
              text-align: center;
              box-sizing: border-box;
              img{
                  width: 50px;
              }
              p{
                  font-size: 30px;
                  margin-top: 20px;
              }
            }
        }
  }
</style>