<template>
    <div class="page">
        <ReactiveParticle :text="'Portfolio'" />
        <div class="tile_container">
            <div class="inner_tile_container">
                
            </div>
        </div>
    </div>
</template>

<script>
import ReactiveParticle from '../components/ReactiveParticle.vue'
export default {
    name: 'PortfolioView',
    components: {
        ReactiveParticle
    },
    data() {
        return{

        }
    },
    mounted(){

    },
    methods: {
        
    }
};
</script>

<style scoped>

</style>
