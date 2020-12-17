<template>
  <section class="profile">
    <HeaderTop title="我的"></HeaderTop>
    <section class="profile_number">
      <router-link to="/login" href="javascript:" class="profile_link">
        <div class="profile_image">
          <i class="iconfont iconyonghu"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录|注册</p>
          <p class="user-info-number-wrapper">
            <i class="iconfont iconshouji"></i>
            <span class="user-info-number">暂无绑定手机号</span>
          </p>
        </div>
        <div class="arrow_right">
          <i class="iconfont icondayuhao"></i>
        </div>
      </router-link>
    </section>
    <section class="profile_info_data">
      <ul class="info_data_list">
        <li class="info_data_link data_balance">
            <span>
              <b class="balance_number">0.00</b><span>元</span>
            </span>
            <span class="text">我的余额</span>
        </li>
        <li class="info_data_link data_discounts">
            <span>
              <b class="discounts_number">0</b><span>个</span>
            </span>
            <span class="text">我的优惠</span>
        </li>
        <li class="info_data_link">
            <span>
              <b class="point_number">0</b><span>分</span>
            </span>
            <span class="text">我的积分</span>
        </li>
      </ul>
    </section>
    <section class="profile_menu">
      <ul class="menu_list">
        <li class="menu_item">
          <i class="iconicon- iconfont iconfont_left"></i>
          <span class="menu_item_title">我的订单</span>
          <i class="icondayuhao iconfont iconfont_right "></i>
        </li>
        <li class="menu_item">
          <i class="iconjifen iconfont iconfont_left"></i>
          <span class="menu_item_title">积分商城</span>
          <i class="icondayuhao iconfont iconfont_right"></i>
        </li>
        <li class="menu_item">
          <i class="iconhuiyuan- iconfont iconfont_left"></i>
          <span class="menu_item_title">会员卡</span>
          <i class="icondayuhao iconfont iconfont_right"></i>
        </li>
        <li class="menu_item">
          <i class="iconfuwu iconfont iconfont_left"></i>
          <span class="menu_item_title">服务中心</span>
          <i class="icondayuhao iconfont iconfont_right"></i>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  name: 'Profile',
  components: {
    HeaderTop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .profile{
    width: 100%;
    .profile_number{
      margin-top: 45.5px;
      .profile_link{
        clearFix();
        position: relative;
        display: block;
        background: #02a774;
        padding: 20px 10px;
        .profile_image{
          float: left;
          width: 60px;
          .iconfont{
            font-size: 50px;
            color: #E4E4E3;
          }
        }
        .user-info{
          position: absolute;
          top: 50%;
          left: 80px;
          transform: translateY(-50%);
          font-size: 20px;
          color: #fff;
          .user-info-number-wrapper{
          }
        }
        .arrow_right{
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 20px;
          color: #fff;
        }
      }
    }
    .profile_info_data{
      bottom-border-1px(#e4e4e4);
      width: 100%;
      background: #fff;
      overflow: hidden;
      .info_data_list{
        clearFix();
        display: flex;
        flex: row;
        .info_data_link{
          display: flex;
          flex-direction: column;
          text-align: center;
          width: 33%;
          b{
            font-family: "Arial Black"
            font-size: 30px;
            &.balance_number{
              color: #FA9B0F;
            }
            &.discounts_number{
              color: #F5835D;
            }
            &.point_number{
              color: #70B716;
            }
          }
          .text{
            padding-top: 5px;
          }

          &.data_balance{
            border-right: 1px solid #b9bbbe;
          }
          &.data_discounts{
            border-right: 1px solid #b9bbbe
          }
        }

      }
    }
    .profile_menu{
      .menu_list{
        display: flex;
        flex-direction: column;
        .menu_item{
          bottom-border-1px(#e4e4e4)
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 50px;
          font-size: 20px
          position: relative
          .iconfont_right{
            position: absolute;
            right: 0px;
          }
          .iconfont_left{
            padding-left: 10px;
            font-size: 25px
            &.iconicon-{
              color: #90EE90
            }
            &.iconjifen{
              color: #BA55D3;
            }
            &.iconhuiyuan-{
              color: #C99308;
            }
            &.iconfuwu{
              color: #F283CD;
            }
          }
          .menu_item_title{
            padding-left 10px;
          }
        }
      }
    }
  }
</style>
