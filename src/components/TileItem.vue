<template>
    <a class="tile" :href="$props.link" target="_blank">
        <div class="inner">
            <span v-if="$props.image" class="image" :style="{backgroundImage: `url(${$props.image})`}"></span>
            <h1>{{ $props.title }}</h1>
            <p>{{ $props.blerb }}</p>
        </div>
    </a>
</template>

<script>
export default {
	name: 'TileItem',
	props: {
        title: String,
        blerb: String,
        link: String,
        image: String
    },
	
}
</script>

<style scoped>
.tile {
    display: block;
    min-width: 250px;
    width: 250px;
    min-height: 300px;
    height: 300px;
    color: black;
    text-decoration: none;
}
.tile:hover > .inner {
    transform: rotateY(180deg);
}
.tile > .inner {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 100%;
    border: 1px solid var(--color-primary);
    border-radius: 10px;
    box-shadow: 0 10px 16px 0 rgb(0 0 0 / 10%), 0 6px 20px 0 rgb(0 0 0 / 8%);
    transition: 0.6s ease all;
    background-color: white;
    transform-style: preserve-3d;
}

.tile .image{
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transform: translateZ(1px);
}

.tile h1{
    transform: translateZ(1px);
    font-size: 25px;
}

.tile p {
    position: absolute;
    padding: 10px;
    text-align: center;
    transform: translateZ(-1px) rotateY(180deg);
}
</style>
