var numberOfFaces = 4;

function createIMG() {
    var leftside = document.getElementById('leftside');
    var rightside = document.getElementById('rightside');
    var container = document.getElementById('container');
    var div = document.getElementsByTagName('div');
    while(leftside.firstChild){
    	leftside.removeChild(leftside.firstChild);
    }
	while(rightside.firstChild){
    	rightside.removeChild(rightside.firstChild);
    }

    for (var i = 0; i < numberOfFaces; i++) {
        createmin();
    }
    
    leftsideIMGs = leftside.cloneNode(true);
    leftsideIMGs.removeChild(leftsideIMGs.lastChild);
    rightside.append(leftsideIMGs);
    leftside.lastChild.onclick = function nextLevel(event) {
        event.stopPropagation();
        numberOfFaces += 2;
        createIMG();

    }
    leftside.onclick=function gameover(event) {
	 alert("Game Over!");
    leftside.lastChild.onclick = null;
    	// body...
    }

     // body...
}
function createmin() {
    var leftside = document.getElementById('leftside');
    var img = document.createElement("img");
    img.src = "minion.png"
    img.style.top = ((Math.floor((Math.random() * 400) + 1)).toString()) + "px";
    img.style.left = ((Math.floor((Math.random() * 400) + 1)).toString()) + "px";
    leftside.append(img);

    // body...
}
window.onload = function(){
    document.getElementsByTagName('body').onclick=function(){
        alert("Hello WOrld");
    }
}

