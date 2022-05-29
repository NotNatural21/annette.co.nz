<template>
    <div class="page">
        <ReactiveParticle :text="'Portfolio'" />
        <div class="tile_container">
            <div class="inner">
                <TileItem v-for="tile in tile_data" :key="tile" 
                    :title="tile.title"
                    :blerb="tile.blerb"
                    :link="tile.link"
                    :image="tile.image"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { data } from '@/assets/data.js'
</script>

<script>
import ReactiveParticle from '../components/ReactiveParticle.vue'
import TileItem from '../components/TileItem.vue'

export default {
    name: 'PortfolioView',
    components: {
        ReactiveParticle,
        TileItem
    },
    data() {
        return{
            tile_data: data()
        }
    },
    mounted(){
    },
    methods: {
        
    }
};
</script>

<style scoped>
.tile_container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    max-height: 100%;
    padding: 10px 20px 50px;
    overflow-y: auto;
}

.tile_container > .inner {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 110px;
    padding: 20px 0px;
    max-width: calc((250px * 3) + 220px);
}
</style>
