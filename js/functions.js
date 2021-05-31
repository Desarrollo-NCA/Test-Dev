const navElement = document.getElementsByClassName('navLink')
const showMenu = () => {
	document.querySelector("div.menu nav").classList.toggle("show")
}

for(element of navElement){
	element.addEventListener('click', showMenu)
}

var num = 0
const nextProject = () => {
	if(window.matchMedia("(max-width: 750px)").matches){
		switch (num) {
		case 0:
			document.getElementById('project1').classList.remove('showProject')
			document.getElementById('project2').classList.add('showProject')
			document.getElementById('project3').classList.remove('showProject')
			num = 1
			break;
		case 1:
			document.getElementById('project1').classList.remove('showProject')
			document.getElementById('project2').classList.remove('showProject')
			document.getElementById('project3').classList.add('showProject')
			num = 2
			break;
		case 2:
			document.getElementById('project1').classList.add('showProject')
			document.getElementById('project2').classList.remove('showProject')
			document.getElementById('project3').classList.remove('showProject')
			num = 0
			break;		
		}
	}else{
		switch (num) {
		case 0:
			document.getElementById('project1').classList.remove('order1')
			document.getElementById('project1').classList.add('order3')
			document.getElementById('project2').classList.add('order1')
			document.getElementById('project2').classList.remove('order2')
			document.getElementById('project3').classList.remove('order3')
			document.getElementById('project3').classList.add('order2')
			num = 1
			break;
		case 1:
			document.getElementById('project1').classList.remove('order3')
			document.getElementById('project1').classList.add('order2')
			document.getElementById('project2').classList.remove('order1')
			document.getElementById('project2').classList.add('order3')
			document.getElementById('project3').classList.remove('order3')
			document.getElementById('project3').classList.add('order1')
			num = 2
			break;
		case 2:
			document.getElementById('project1').classList.remove('order2')
			document.getElementById('project1').classList.add('order1')
			document.getElementById('project2').classList.remove('order3')
			document.getElementById('project2').classList.add('order2')
			document.getElementById('project3').classList.remove('order1')
			document.getElementById('project3').classList.add('order3')
			num = 0
			break;		
		}
	}
}
const backProject = () => {
	if(window.matchMedia("(max-width: 750px)").matches){
		switch (num) {
			case 0:
				document.getElementById('project1').classList.remove('showProject')
				document.getElementById('project2').classList.remove('showProject')
				document.getElementById('project3').classList.add('showProject')
				num = 2
				break;
			case 1:
				document.getElementById('project1').classList.add('showProject')
				document.getElementById('project2').classList.remove('showProject')
				document.getElementById('project3').classList.remove('showProject')
				num = 0
				break;
			case 2:
				document.getElementById('project1').classList.remove('showProject')
				document.getElementById('project2').classList.add('showProject')
				document.getElementById('project3').classList.remove('showProject')
				num = 1
				break;		
		}
	}else{
			switch (num) {
		case 0:
			document.getElementById('project1').classList.remove('order1')
			document.getElementById('project1').classList.add('order3')
			document.getElementById('project2').classList.add('order1')
			document.getElementById('project2').classList.remove('order2')
			document.getElementById('project3').classList.remove('order3')
			document.getElementById('project3').classList.add('order2')
			
			num = 2
			break;
		case 1:
			document.getElementById('project1').classList.remove('order2')
			document.getElementById('project1').classList.add('order1')
			document.getElementById('project2').classList.remove('order3')
			document.getElementById('project2').classList.add('order2')
			document.getElementById('project3').classList.remove('order1')
			document.getElementById('project3').classList.add('order3')
			num = 0
			break;
		case 2:
			document.getElementById('project1').classList.remove('order3')
			document.getElementById('project1').classList.add('order2')
			document.getElementById('project2').classList.remove('order1')
			document.getElementById('project2').classList.add('order3')
			document.getElementById('project3').classList.remove('order3')
			document.getElementById('project3').classList.add('order1')
			
			num = 1
			break;		
		}
	}	
}

window.onscroll = function() {
  var y = window.scrollY;
  if(y > 2000){
  	document.getElementById('logoAirhitect').src="img/logoAirhitectWhite.png"
  }else {
  	document.getElementById('logoAirhitect').src="img/logoAirhitect.png"
  }
};