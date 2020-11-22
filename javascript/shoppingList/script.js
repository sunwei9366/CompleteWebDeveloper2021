var button = document.getElementById("enter");
var input = document.getElementById("userinput");
const ul = document.querySelector("ul");
var list = document.getElementById("todos")

var deleteBtns = document.getElementsByClassName("delete");


function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

function removeOnClick(event){
	event.target.removeEventListener("click", removeOnClick);
	event.target.parentNode.remove();
}


for(var i =0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeOnClick);
}



function inputLength(){
	return input.value.length;
}

function createListElement(){
	if(inputLength() <=0)
		return;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var button = document.createElement("button");
	button.innerHTML = "Delete";
	button.onclick = removeOnClick;
	li.appendChild(button);
	list.appendChild(li);
	input.value = "";

}

ul.addEventListener("click", strikeThrough);

button.addEventListener("click", function(){
	createListElement();
})

input.addEventListener("keypress", function(){
	if(event.keyCode!=13)
		return
	createListElement();
})