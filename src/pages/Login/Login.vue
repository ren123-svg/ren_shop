<template>
  <section class="loginContainer">
    <i class="iconfont iconxiaoyuhao" @click="$router.back()"></i>
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">用户登录</h2>
        <div class="login_header_title">
          <a href="javascript:;" class="on">短信登录</a>
          <a href="javascript:;">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <div class="form">
          <div class="on">
            <section class="login_message login_input">
              <input type="tel" maxlength="11" placeholder="手机号">
              <button disabled="disabled" class="get_verification">获取验证码</button>
            </section>
            <section class="login_verification login_input">
              <input type="tel" maxlength="8" placeholder="验证码">
            </section>
            <section class="login_hint">
              温馨提示：未注册的手机号登录时将自动注册，且代表用户已经接收协议
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div>
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名">
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="8" placeholder="密码">
                <div class="switch_button off">
                  <div class="switch_circle"></div>
                  <span class="switch_text">...</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码">
                <img class="get_verification" src="./images/captcha.svg">
              </section>
            </section>
          </div>
          <button class="btn login_submit">登录</button>
        </div>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .loginContainer{
    width: 100%;
    height: 100%;
    background: #fff;
    .loginInner{
      padding-top: 60px;
      width: 80%;
      margin: 0 auto;
      .login_header{
        .login_logo{
          font-size: 40px;
          font-weight: bold;
          color: #02a774;
          text-align: center;
        }
        .login_header_title{
          padding-top: 40px;
          text-align: center;
          >a{
            color: #333;
            font-size: 14px;
            padding-bottom: 4px;
            &:first-child{
              margin-right: 40px;
            }
            &.on{
              color: #02a774;
              font-weight: 700;
              border-bottom: 2x solid #02a774;
            }
          }
        }
      }
      .login_content{
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        .form{
          position: relative;
          >div{
            display: none;
            &.on{
              display: block;
            }
            input{
              border: none;
              outline: none;
            }
            .login_input{
              width: 100%;
              height: 30px;
              display: flex;
              flex-direction: row;
              align-items: center;
              border: 1px solid #E3E3E3;
              border-radius: 2px;
              position: relative;
              margin: 10px 0px;
              .get_verification{
                position: absolute;
                right: 3px;
              }
              button{
                background: none;
                border: none;
              }
            }
          }
          .btn{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            height: 40px;
            width: 80%;
            text-align: center;
            background: deeppink;
            border: none;
            border-radius: 10px;
          }
        }
        .about_us{
          position: relative;
          top:40px;
        }
      }
    }
  }
</style>
