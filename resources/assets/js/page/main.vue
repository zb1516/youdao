<template>
   <div class="g-wrapper">
       <app-header></app-header>
       <div class="g-main">
           <router-view></router-view>
       </div>
   </div>
</template>

<script>
    import AppHeader from '../components/Header.vue';

    export default {
        components: {
            AppHeader
        }
    }
</script>

<style scoped>

</style>