<template>
    <div class="header">
        <div class="inner cf">
            <h1 class="logo"><img src="../static/images/logo.png" alt="爱提分" /></h1>
            <div class="head-user-box">
                <p class="picture">
                    <a href="#"><img src="../static/images/user_picture.jpg" alt="詹志明"></a>
                </p>
                <span class="name"><a href="#">{{user.user_realname}}<span class="icon"></span></a></span>
            </div>
            <div class="nav">
                <ul class="list">
                    <li class="nav-box current">
                        <a href="reviewPicList.html">图片审核</a>
                    </li>
                    <li class="nav-box">
                        <a href="reviewPaperList.html">试卷审核</a>
                    </li>
                    <li class="nav-box">
                        <a href="#">数据统计<span class="icon"></span></a>
                        <div class="child-nav">
                            <ul class="list">
                                <li class="link-box"><a href="statisticPicList.html">图片审核统计</a></li>
                                <li class="link-box"><a href="statisticPaperList.html">试卷审核统计</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>

    import { mapGetters } from 'vuex'
    export default {

        computed: {
            routeList() {
                return this.$router.options.routes;
            },
            ...mapGetters({
                userKey:'getUserKey',
                user:'getUser'
            })
        }
    }
</script>
<style>
    .sk-hide {
        display: none;
    }
</style>