
var name = prompt('Моля въведете вашето име');

 if (name != null) {
        document.getElementById("prompt").innerHTML =
        "Здравей " + name + "! Часът е:";
    }

	setInterval(time, 1000)
	function time(){
		var time = new Date();
		var hrs = time.getHours();
		var min = time.getMinutes();
		var sec = time.getSeconds();
		
		if(hrs<10){
			hrs = '0' + hrs
		}
		
		if(min<10){
			min = '0' + min
		} 
		
		if(sec<10){
			sec = '0' + sec
		}
		
		document.getElementById("mst").innerHTML = hrs + ':' + min + ':' + sec
		document.getElementById('spn').innerHTML = '#' + hrs + min + sec
		document.body.style.backgroundColor = '#' + hrs + min + sec
	}