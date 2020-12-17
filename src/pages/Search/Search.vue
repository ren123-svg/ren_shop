<template>
  <section class="search">
   <HeaderTop title="搜索"/>
    <form class="search_form" action="#">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
      <input type="submit" name="submit" class="search_submit">
    </form>
  </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  name: 'Search',
  components: {
    HeaderTop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import"../../common/stylus/mixins.styl"
  .search{
    width: 100%;
    .search_form{
      clearFix();
      margin-top: 45px;
      background-color: #fff;
      padding: 12px 8px;
      input{
        height: 35px;
        padding: 0 4px;
        border-radius: 2px;
        font-weight: bold;
        outline: none;
        border: none;
        background: #F2F2F2;
        &.search_input{
          width: 80%;
        }
        &.search_submit{
          width: 15%;
          color: #fff;
          background: #02a774;
        }
      }
    }
  }
</style>
