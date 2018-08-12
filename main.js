console.log('its connected')
$(() =>{
const parallax = document.getElementById("parallax");
 console.log(parallax);


// event listener 
window.addEventListener('scroll', function(){
// value that the user has scrolled from the top 
	let offset = window.pageYOffset;
	parallax.style.backgroundPositionY = offset * 0.7 + "px";
})
	
})
	
