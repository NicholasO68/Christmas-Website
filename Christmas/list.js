
let addtoList = document.getElementById('addItem');
let christmasList = document.getElementById('giftList');
let wishedItem = document.getElementById('item');

addtoList.addEventListener('click', function(){
	var paragraph = document.createElement('p');
	var checkOff = document.createElement('button')
	var addSound = new Audio('add.mp3')
	var removeSound = new Audio('remove.mp3')
	
	
	//Alerts the user that nothing is in the textbox
	if (wishedItem.value == ''){
		window.alert('Please add the wished item.')
		return false
	}
	//Puts the item onto the list and removes the text from the textbox
	else{
	
	paragraph.classList.add('paragraph-styling')
	paragraph.innerText = wishedItem.value;
	
	checkOff.innerText = "x"
	
	christmasList.appendChild(paragraph);
	christmasList.appendChild(checkOff)
	
	wishedItem.value = ""
	addSound.play();
	}
	
	//Removes the item
	checkOff.addEventListener('click', function(){
		removeSound.play();
		christmasList.removeChild(paragraph);
		christmasList.removeChild(checkOff);
	})

})