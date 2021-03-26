// Import Module
import Mouse from './asset/mouse.js';
import Score from './asset/score.js';
import {handleCocroach,spawner} from './asset/cocroach.js';

// Animation Frame
let frame = 0;

// Declare Class
const mouse = new Mouse();
const score = new Score();
// Canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 425;
canvas.height = 564;
let canvasPosition = canvas.getBoundingClientRect();

// Evennt
canvas.addEventListener('mousedown', (e)=>{
	mouse.x = e.x - canvasPosition.left;
	mouse.y = e.y - canvasPosition.top;
})

canvas.addEventListener('mouseup', (e) => {
	mouse.x = 0;
	mouse.y = 0;
});

canvas.addEventListener('resize',()=>{
	canvasPosition = canvas.getBoundingClientRect();

})
function animate(){
	frame++;
	if (frame < 1000) {
		if (frame % 100 == 0) {
			spawner();
		}
	}else{
		if (frame % 50 == 0) {
			spawner();
		}
	}
	ctx.clearRect(0,0,canvas.width,canvas.height);
		handleCocroach(ctx,mouse,score);
		score.draw(ctx);
	requestAnimationFrame(animate)
}

animate();