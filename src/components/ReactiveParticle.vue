<template>
    <canvas id="scene"></canvas>
</template>

<script>
export default {
	name: 'ReactiveParticle',
	props: {
        text: String
    },
	mounted(){
        let canvas = document.querySelector("#scene"),
            ctx = canvas.getContext("2d"),
            particles = [],
            amount = 0,
            mouse = {x:0,y:0},
            radius = 1;

        let ww = document.getElementById('scene').clientWidth;
        let wh = document.getElementById('scene').clientHeight;
        canvas.width = ww;
        canvas.height = wh;

        function Particle(x,y){
            this.x = x;
            this.y =  0;
            this.dest = {
                x : x,
                y: y
            };
            this.r =  2;
            this.vx = (Math.random() - 0.5) * 20;
            this.vy = (Math.random() - 0.5) * 20;
            this.accX = 0;
            this.accY = 0;
            this.friction = Math.random() * 0.05 + 0.87;

            this.color = '#19409b';
        }

        Particle.prototype.render = function() {
            this.accX = (this.dest.x - this.x) / 200;
            this.accY = (this.dest.y - this.y) / 200;
            this.vx += this.accX;
            this.vy += this.accY;
            this.vx *= this.friction;
            this.vy *= this.friction;

            this.x += this.vx;
            this.y +=  this.vy;

            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
            ctx.fill();

            var a = this.x - mouse.x;
            var b = this.y - mouse.y;

            var distance = Math.sqrt( a*a + b*b );
            if(distance < (radius * 70)){
                this.accX = (this.x - mouse.x)/100;
                this.accY = (this.y - mouse.y)/100;
                this.vx += this.accX;
                this.vy += this.accY;
            }
        }

        function onMouseMove(e){
            mouse.x = e.layerX;
            mouse.y = e.layerY;
        }

        function onTouchMove(e){
            if(e.touches.length > 0 ){
                mouse.x = e.touches[0].layerX;
                mouse.y = e.touches[0].layerY;
            }
        }

        function onTouchEnd(e){
            mouse.x = -9999;
            mouse.y = -9999;
        }

        function initScene(text){
            let ww = document.getElementById('scene').clientWidth;
            let wh = document.getElementById('scene').clientHeight;
            canvas.width = ww;
            canvas.height = wh;

            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

            ctx.font = "bold "+ (Math.max((ww / 12), 60)) + "px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(text , ww/2, wh);

            let data  = ctx.getImageData(0, 0, ww, wh).data;
            ctx.clearRect(0, 0, ww, wh);
            ctx.globalCompositeOperation = "screen";

            let numPart = Math.min(Math.max(((ww * wh) / 350), 140), 550)
            particles = [];
            for(let i = 0; i < ww; i += Math.round(ww / numPart)){
                for(let j = 0; j < wh; j += Math.round(ww / numPart)){
                    if(data[((i + j * ww) * 4) + 3] > 150){
                        particles.push(new Particle(i,j));
                    }
                }
            }
            amount = particles.length;
            
        }

        function onMouseClick(){
            radius++;
            if(radius === 3){
                radius = 0;
            }
        }

        function render(a) {
            requestAnimationFrame(render);
            ctx.clearRect(0, 0, ww, wh);
            for (var i = 0; i < amount; i++) {
                particles[i].render();
            }
        };

        window.addEventListener("resize", function(){initScene(this.text)}.bind(this), true);
        document.getElementById('scene').addEventListener("mousemove", onMouseMove);
        document.getElementById('scene').addEventListener("mouseleave", onTouchEnd);
        document.getElementById('scene').addEventListener("touchmove", onTouchMove);
        document.getElementById('scene').addEventListener("click", onMouseClick);
        document.getElementById('scene').addEventListener("touchend", onTouchEnd);
        setTimeout(function(){
            initScene(this.text);
            requestAnimationFrame(render);
        }.bind(this), 100)
    },
}
</script>

<style scoped>
canvas{
    width: 100%;
    height: clamp(100px, 15%, 300px);
}
</style>
