<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <div id="nav" @click="$event.stopPropagation()">
        <div class="menuImg">
            <img :src="ArrowMenu" id="arrowMenuImg" @click="toggleMenu" class="rotate">
        </div>
        <RouterLink to="/" @click="closeMenu" ><img :src="HomeIcon"/>Home</RouterLink>
        <RouterLink to="/portfolio" @click="closeMenu" ><img :src="Work"/>Portfolio</RouterLink>
        <RouterLink to="/software" @click="closeMenu" ><img :src="Software"/>Software</RouterLink>
        <RouterLink to="/about" @click="closeMenu" ><img :src="Info"/>About</RouterLink>
        
    </div>
    <RouterView />
</template>




<script>
import ArrowMenu from './components/Icons/ArrowMenu.svg'
import HomeIcon from './components/Icons/HomeIcon.svg'
import Info from './components/Icons/Info.svg'
import Work from './components/Icons/Work.svg'
import Software from './components/Icons/Software.svg'
import $ from 'jquery';

export default {
    name: 'App',
    components: {
        
    },
    data() {
        return{
            onlyIcons: true
        }
    },
    mounted(){
        window.addEventListener('click', function() {
            this.closeMenu()
        }.bind(this))
    },
    methods: {
        toggleMenu(){
            $('#arrowMenuImg').toggleClass('rotate')
            $('#nav').toggleClass('clicked');
        },
        closeMenu(){
            if($('#nav').hasClass('clicked')){
                this.toggleMenu();
            }
        }
    }
};
</script>


<style>
@import '@/assets/base.css';
@import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');
#app{
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: white;
}

#nav{
    width : 60px;
    min-width : 60px;
    height: 100vh;
    background-color: #15398B;
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1000;
    top: 0px;
    left: 0px;
    bottom: 0px;
    transition: min-width 1s;
    gap: 25px;
    padding-left: 6px;
    padding-right: 6px;
    overflow-x: hidden;
}

#nav.clicked{
    min-width: 225px;
    align-items: unset;
}

#nav > a{
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 10px;
    color: white;
    text-decoration: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
}

#nav > a:hover{
    background-color: #19409b;
}

.page{
    width: calc(100% - 60px);
    height: 100vh;
    margin-left: auto;
    padding: 10px;
    color: black;
    overflow: hidden;
}

#arrowMenuImg{
    width: 52px;
    height: 52px;
    cursor: pointer;
}

.menuImg{
    display: flex;
    justify-content: flex-end;
}

.rotate{
    transform: rotate(180deg);
}


</style>
