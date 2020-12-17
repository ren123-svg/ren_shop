<template>
  <section class="msite">
<!--    首页头部-->
    <HeaderTop title="禹城市莒镇乡莒东社区任庄村">
      <span class="header_search" slot="left">
       <i class="iconfont iconsousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
<!--    首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-slid ">
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>预定早餐</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>土豪推荐</span>
            </a>

          </div>
          <div class="swiper-slide swiper-slid">
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>这家的饭</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>真香</span>
            </a>
          </div>
        </div>
        <div class="swiper-pagination point"></div>
      </div>
    </nav>
<!--    首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icongengduo"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>
<script>
import Swiper from 'swiper/swiper-bundle'
import 'swiper/swiper-bundle.min.css'

import HeaderTop from '../../components/HeaderTop/HeaderTop'
import ShopList from '../../components/ShopList/ShopList'
export default {
  name: 'MSite',
  components: {
    HeaderTop,
    ShopList
  },
  mounted () {
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script >

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite { //首页
    width: 100%;
    .msite_nav {
      bottom-border-1px(#e4e4e4);
      position: relative;
      display: flex;
      flex-direction:row;
      margin-top: 45px;
      height: 200px;
      background: #fff;
      .swiper-container {
        width: 100%;
        position: relative;
        .swiper-wrapper{
          .swiper-slide{
            position: relative
            display: flex;
            flex: row;
            flex-wrap: wrap;
            .link_to_food {
              position: relative;
              width: 25%;
              height: 90px;
              display: flex;
              flex-direction: column;
              flex-wrap: wrap;
              justify-content: center;
              align-items: center;
              text-decoration: none;
              color: #5F6368;
              .food_container {
              }
            }
          }
        }
      }
    }
    .msite_shop_list {
      top-border-1px(#e4e4e4);
      margin-top: 10px;
      background: #fff;
      .shop_header{
        padding: 10px 10px 0;
        .shop_icon{
          margin-left: 5px;
          color: #999;
        }
        .shop_header_title{
          color: #999;
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
</style>
