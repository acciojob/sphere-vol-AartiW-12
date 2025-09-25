function volume_sphere() {
    //Write your code here
	const radiusInput = document.getElementById("radius").value;
	const radius = parseFloat(radiusInput)
	const vol = document.getElementById("volume");

	if(isNaN(radius) || radius < 0){
		vol.value = "NaN"
	}
	else{
		let calculatedVolume = (4 / 3)*Math.PI * (Math.pow(radius,3))
		vol.value = calculatedVolume.toFixed(4);	
	}
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
