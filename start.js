var eng = document.getElementById('eng');
var rus = document.getElementById('rus');

if (localStorage.getItem('lang')==null){
	localStorage.setItem('lang','eng');
}
if (localStorage.getItem('lang')=="rus"){
	window.location = '../rus/index.html';
}

eng.onclick = function(){
	if (localStorage.getItem('lang')=="rus"){
		localStorage.setItem('lang',"eng");
		window.location = '../eng/index.html';
	}
}
rus.onclick = function(){
	if (localStorage.getItem('lang')=="eng"){
		localStorage.setItem('lang',"rus");
		window.location = '../rus/index.html';
	}
}

class Achievement {
	constructor(id, imgUrlbw, imgUrl, name, descr, isGot){
		this.id = id;
		this.imgUrlbw = imgUrlbw;
		this.imgUrl = imgUrl;
		this.name = name;
		this.descr = descr;
		this.isGot = isGot;
	}
}

var achv60101 = new Achievement(60101, "img/60101bw.png", "img/60101.png", "Let's go", "Enter the game for the first time", localStorage.getItem("firstTime"));
var achv60201 = new Achievement(60201, "img/60201bw.png", "img/60201.png", "Chick", "Finish 1 game", localStorage.getItem("isGot60201"));
var achv60202 = new Achievement(60202, "img/60202bw.png", "img/60202.png", "Gone hot", "Finish 10 games", localStorage.getItem("isGot60202"));
var achv60203 = new Achievement(60203, "img/60203bw.png", "img/60203.png", "Nobody's Fool", "Finish 50 games", localStorage.getItem("isGot60203"));
var achv60204 = new Achievement(60204, "img/60204bw.png", "img/60204.png", "Ace of aces", "Finish 100 games", localStorage.getItem("isGot60204"));
var achv60301 = new Achievement(60301, "img/60301bw.png", "img/60301.png", "Once you can", "Use hint 1 time", localStorage.getItem("isGot60301"));
var achv60302 = new Achievement(60302, "img/60302bw.png", "img/60302.png", "Careless", "Use hint 10 times", localStorage.getItem("isGot60302"));
var achv60303 = new Achievement(60303, "img/60303bw.png", "img/60303.png", "Poor eyesight", "Use hint 50 times", localStorage.getItem("isGot60303"));
var achv60304 = new Achievement(60304, "img/60304bw.png", "img/60304.png", "Long looked at welding", "Use hint 100 times", localStorage.getItem("isGot60304"));
var achv60305 = new Achievement(60305, "img/60305bw.png", "img/60305.png", "Mole", "Use hint 500 times", localStorage.getItem("isGot60305"));
var achv60401 = new Achievement(60401, "img/60401bw.png", "img/60401.png", "Independent", "Finish the game without hints", localStorage.getItem("isGot60401"));
var achv60501 = new Achievement(60501, "img/60501bw.png", "img/60501.png", "Reboot", "Reset the best time", localStorage.getItem("isGot60501"));
var achv60601 = new Achievement(60601, "img/60601bw.png", "img/60601.png", "Further better", "Beat your previous record in one mode 1 time", localStorage.getItem("isGot60601"));
var achv60602 = new Achievement(60602, "img/60602bw.png", "img/60602.png", "Human progress", "Beat your previous record in one mode 3 times", localStorage.getItem("isGot60602"));
var achv60603 = new Achievement(60603, "img/60603bw.png", "img/60603.png", "Insatiable", "Beat your previous record in one mode 5 times", localStorage.getItem("isGot60603"));
var achv60604 = new Achievement(60604, "img/60604bw.png", "img/60604.png", "Absolute champion", "Beat your previous record in one mode 10 times", localStorage.getItem("isGot60604"));
var achv60701 = new Achievement(60701, "img/60701bw.png", "img/60701.png", "Yerzhan", "Use hints more than numbers in a table.", localStorage.getItem("isGot60701"));
var achv60801 = new Achievement(60801, "img/60801bw.png", "img/60801.png", "Celebrate", "Get 5 achievements", localStorage.getItem("isGot60801"));
var achv60802 = new Achievement(60802, "img/60802bw.png", "img/60802.png", "Anniversary", "Get 10 achievements", localStorage.getItem("isGot60802"));
var achv60803 = new Achievement(60803, "img/60803bw.png", "img/60803.png", "Veteran", "Get 20 achievements", localStorage.getItem("isGot60803"));
var achv60901 = new Achievement(60901, "img/60901bw.png", "img/60901.png", "Sapper", "Finish the game without missteps", localStorage.getItem("isGot60901"));
var achv60902 = new Achievement(60902, "img/60902bw.png", "img/60902.png", "Random", "Misstep more times than numbers in the table", localStorage.getItem("isGot60902"));

var achvArr = [achv60101,achv60201,achv60202,achv60203,achv60204,achv60301,achv60302,achv60303,achv60304,achv60305,
achv60401,achv60501,achv60601,achv60602,achv60603,achv60604,achv60701,achv60801,achv60802,achv60803,achv60901,achv60902];

function genAchvTable(achvArray){
	var achvContainer = document.getElementById('all-achievements');
	for(var i=0; i<achvArr.length;i++){
		var rowContainer = document.createElement('div');
		rowContainer.classList.add('achieve-row');
		var rowImg = document.createElement('img');
		if (achvArray[i].isGot=='true'){
			rowImg.src = achvArray[i].imgUrl;
		}else {
			rowImg.src = achvArray[i].imgUrlbw;
		}
		var rowName = document.createElement('h3');
		rowName.innerHTML = achvArray[i].name;
		var rowDesc = document.createElement('p');
		rowDesc.innerHTML = achvArray[i].descr;
		var stat = document.createElement('div');
		stat.classList.add('stat');
		if (i==0){
			if (achvArray[i].isGot=='true'){
				stat.innerHTML = "1/1"; 
			}else{
				stat.innerHTML = "0/1";
			}
		}	
		if (i==1){
			if(localStorage.getItem("gameWins")==null){
				stat.innerHTML ="0/1";
			}else{
				stat.innerHTML = localStorage.getItem("gameWins")+"/1";
			}
		};
		if (i==2){
			if(localStorage.getItem("gameWins")==null){
				stat.innerHTML ="0/10";
			}else{
				stat.innerHTML = localStorage.getItem("gameWins")+"/10";
			}
			
		};
		if (i==3){
			if(localStorage.getItem("gameWins")==null){
				stat.innerHTML ="0/50";
			}else{
				stat.innerHTML = localStorage.getItem("gameWins")+"/50";
			}
		};
		if (i==4){
			if(localStorage.getItem("gameWins")==null){
				stat.innerHTML ="0/100";
			}else{
				stat.innerHTML = localStorage.getItem("gameWins")+"/100";
			}
		};
		if (i==5){
			if(localStorage.getItem("hintsQuantity")==null){
				stat.innerHTML ="0/1";
			}else{
				stat.innerHTML = localStorage.getItem("hintsQuantity")+"/1";
			}
		};
		if (i==6){
			if(localStorage.getItem("hintsQuantity")==null){
				stat.innerHTML ="0/10";
			}else{
				stat.innerHTML = localStorage.getItem("hintsQuantity")+"/10";
			}	
		};
		if (i==7){
			if(localStorage.getItem("hintsQuantity")==null){
				stat.innerHTML ="0/50";
			}else{
				stat.innerHTML = localStorage.getItem("hintsQuantity")+"/50";
			}
		};
		if (i==8){
			if(localStorage.getItem("hintsQuantity")==null){
				stat.innerHTML ="0/100";
			}else{
				stat.innerHTML = localStorage.getItem("hintsQuantity")+"/100";
			}
		};
		if (i==9){
			if(localStorage.getItem("hintsQuantity")==null){
				stat.innerHTML ="0/500";
			}else{
				stat.innerHTML = localStorage.getItem("hintsQuantity")+"/500";
			}
		};
		if (i==10){
			if(localStorage.getItem("withoutHints")==null){
				stat.innerHTML ="0/1";
			}else{
				stat.innerHTML = localStorage.getItem("withoutHints")+"/1";
			}
		};
		if (i==11){ 
			if (localStorage.getItem("refresfQuantity")==null){
				stat.innerHTML = "0/1"; 
			}else{
				stat.innerHTML = localStorage.getItem("refresfQuantity")+"/1";
			}
		};
		if (i==12){
			if (achvArray[i].isGot=='true'){
				stat.innerHTML = "1/1"; 
			}else{
				stat.innerHTML = "0/1";
			}
		};
		if (i==13){
			if (achvArray[i].isGot=='true'){
				stat.innerHTML = "3/3"; 
			}else{
				stat.innerHTML = "?/3";
			}
		};
		if (i==14){
			if (achvArray[i].isGot=='true'){
				stat.innerHTML = "5/5"; 
			}else{
				stat.innerHTML = "?/5";
			}
		};
		if (i==15){
			if (achvArray[i].isGot=='true'){
				stat.innerHTML = "10/10"; 
			}else{
				stat.innerHTML = "?/10";
			}
		};
		if (i==16){
			if (localStorage.getItem("moreHints")==null){
				stat.innerHTML = "0/1"; 
			}else{
				stat.innerHTML = localStorage.getItem("moreHints")+"/1";
			}
		};
		if (i==17){
			if (localStorage.getItem("achieveQuantity")==null){
				stat.innerHTML = "0/1"; 
			}else{
				stat.innerHTML = localStorage.getItem("achieveQuantity")+"/5";
			}
		};
		if (i==18){
			if (localStorage.getItem("achieveQuantity")==null){
				stat.innerHTML = "0/1"; 
			}else{
				stat.innerHTML = localStorage.getItem("achieveQuantity")+"/10";
			}
		};
		if (i==19){
			if (localStorage.getItem("achieveQuantity")==null){
				stat.innerHTML = "0/1"; 
			}else{
				stat.innerHTML = localStorage.getItem("achieveQuantity")+"/20";
			}
		};
		if (i==20){
			if (localStorage.getItem("withoutMissteps")==null){
				stat.innerHTML = "0/1"; 
			}else{
				stat.innerHTML = localStorage.getItem("withoutMissteps")+"/1";
			}
		};
		if (i==21){
			if (localStorage.getItem("moreMissteps")==null){
				stat.innerHTML = "0/1"; 
			}else{
				stat.innerHTML = localStorage.getItem("moreMissteps")+"/1";
			}
		};
		rowContainer.appendChild(rowImg);
		rowContainer.appendChild(rowName);
		rowContainer.appendChild(rowDesc);
		rowContainer.appendChild(stat);
		achvContainer.appendChild(rowContainer);
	}
}

genAchvTable(achvArr);

function getNum(el) {
    localStorage.setItem("buttonId", el.id);
}

var del = document.getElementById('delete-data');
del.onclick = function(){
	localStorage.clear();
	location.reload();
}