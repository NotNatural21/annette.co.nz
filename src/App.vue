<template>
    <div id="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </div>
    <div id="page">
        
    </div>

    <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </nav> -->
    
    <RouterView />
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>



<style>
@import '@/assets/base.css';
#app{
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: white;
}

#nav{
    min-width: 60px;
    width: 60px;
    height: 100vh;
    background-color: black;
}

#page{
    width: 100%;
    height: 100vh;
}
</style>
