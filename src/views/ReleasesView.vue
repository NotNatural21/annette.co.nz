<template>
    <div class="page">
        <ReactiveParticle :text="'Releases'" />
    </div>
</template>

<script setup>
import { data } from '@/assets/softwareData.js'
</script>

<script>
import ReactiveParticle from '../components/ReactiveParticle.vue'

export default {
    name: 'ReleasesView',
    components: {
        ReactiveParticle
    },
    data() {
        return{
            tile_data: data()
        }
    },
    mounted(){
        console.log('tile_data:', this.tile_data)
    },
    methods: {
        
    }
};
</script>

<style scoped>

</style>
