<template>
  <section class="order">
    <HeaderTop title="我的订单"/>
    <section class="order_no_login">
      <img class="no_login_img" src="./images/person.png">
      <h3 class="no_login_text">登录后查看订单外卖</h3>
      <input class="btn" type="button" value="立即登录">
    </section>
  </section>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'

export default {
  name: 'Order',
  components: {
    HeaderTop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .order{
    .order_no_login{
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-70%);
      text-align: center;
      .no_login_img{
      }
      .no_login_text{
        font-size: 20px;
      }
      .btn{
        position: relative;
        top: 10px
        width: 50%;
        height: 40px;
        font-size: 20px;
        background: #94CDEA;
        border: none;
        border-radius: 50%;
      }
    }
  }
</style>
