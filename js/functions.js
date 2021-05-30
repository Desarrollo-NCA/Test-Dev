const navElement = document.getElementsByClassName('navLink')
const showMenu = () => {
	document.querySelector("div.menu nav").classList.toggle("show")
}

for(element of navElement){
	element.addEventListener('click', showMenu)
}

var num = 0
const nextProject = () => {
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
}
const backProject = () => {
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
}