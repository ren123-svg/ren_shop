<template>
    <header class="header">
      <slot name="left"></slot>
      <div class="header_title">
        <div class="header_title_text ellipsis">{{title}}</div>
      </div>
      <slot name="right"></slot>
    </header>
</template>
<script>
export default {
  name: 'HeaderTop',
  props: {
    title: String
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.header {
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
  .header_search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;
    .iconsousuo {
      font-size: 25px;
      color: #fff;
    }
  }
  .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 50%;
    color: #fff;
    font-size: 22px;
    text-align: center;

    .header_title_text {
      color: #fff;
    }
  }

  .header_login {
    position: absolute;
    right: 5px;
    top: 50%;
    width: 20%;
    transform: translateY(-50%)

    .header_login_text {
      //font-size: 25px;
      color: #fff;
    }
  }
}
</style>
