<template>
    <div class="page">
        <ReactiveParticle :text="'Software'" />
        <div class="tile_container">
            <div class="inner">
                <TileItem title="DashBooks" blerb="The new and improved version of Wyvern for time and recording keeping." image="../Images/DashBooks.png" @click="$router.push({ name: 'releases', params: { 'software': 'DashBooks' } })"/>
            </div>
        </div>
    </div>
</template>

<script setup>
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
        return {

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
