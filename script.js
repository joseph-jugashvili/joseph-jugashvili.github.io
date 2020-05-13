var modeId = localStorage.getItem("buttonId");
var timeBest = document.getElementById('best-time');
var achieveTable = document.getElementById('achievement-table');
var endAlertWin = document.getElementById('end-alert-win');
var endAlertRecord = document.getElementById('end-alert-record');
var achieveButton = document.getElementById('achieve-button');
var achvButtonImg = document.getElementById('new-achieve-img');
var num = document.getElementById('current-number');
var tableItems = document.getElementsByClassName('table-item');
var hints = document.getElementById('hints');
var misSteps = document.getElementById('missteps');
var tempNum;
var winCounter = 0;
var numString="";
var achieveTableOpen = false;
var angle = 360;
var missCounter = 0;
localStorage.setItem("hintsPerGame", 0);

if (localStorage.getItem("withoutHints") == null){
	localStorage.setItem("withoutHints",0);
}
if (localStorage.getItem("refresfQuantity") == null){
	localStorage.setItem("refresfQuantity",0);
}
if (localStorage.getItem("moreHints") == null){
	localStorage.setItem("moreHints",0);
}
if (localStorage.getItem("withoutMissteps") == null){
	localStorage.setItem("withoutMissteps",0);
}
if (localStorage.getItem("moreMissteps") == null){
	localStorage.setItem("moreMissteps",0);
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

var achv60101 = new Achievement(60101, "img/60101bw.png", "img/60101.png", "РЎС‚Р°СЂС‚СѓРµРј", "Р’РїРµСЂРІС‹Рµ Р·Р°Р№С‚Рё РІ РёРіСЂСѓ", localStorage.getItem("firstTime"));
var achv60201 = new Achievement(60201, "img/60201bw.png", "img/60201.png", "РџС‚РµРЅРµС†", "РџСЂРѕР№С‚Рё 1 РёРіСЂСѓ", localStorage.getItem("isGot60201"));
var achv60202 = new Achievement(60202, "img/60202bw.png", "img/60202.png", "РџРѕС€Р»Р° Р¶Р°СЂР°", "РџСЂРѕР№С‚Рё 10 РёРіСЂ", localStorage.getItem("isGot60202"));
var achv60203 = new Achievement(60203, "img/60203bw.png", "img/60203.png", "РќРµ РїСЂРѕРјР°С…", "РџСЂРѕР№С‚Рё 50 РёРіСЂ", localStorage.getItem("isGot60203"));
var achv60204 = new Achievement(60204, "img/60204bw.png", "img/60204.png", "Р›СѓС‡С€РёР№ РёР· Р»СѓС‡С€РёС…", "РџСЂРѕР№С‚Рё 100 РёРіСЂ", localStorage.getItem("isGot60204"));
var achv60301 = new Achievement(60301, "img/60301bw.png", "img/60301.png", "РћРґРёРЅ СЂР°Р· РјРѕР¶РЅРѕ", "РСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РїРѕРґСЃРєР°Р·РєСѓ 1 СЂР°Р·", localStorage.getItem("isGot60301"));
var achv60302 = new Achievement(60302, "img/60302bw.png", "img/60302.png", "РќРµРІРЅРёРјР°С‚РµР»СЊРЅС‹Р№", "РСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РїРѕРґСЃРєР°Р·РєСѓ 10 СЂР°Р·", localStorage.getItem("isGot60302"));
var achv60303 = new Achievement(60303, "img/60303bw.png", "img/60303.png", "РџР»РѕС…РѕРµ Р·СЂРµРЅРёРµ", "РСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РїРѕРґСЃРєР°Р·РєСѓ 50 СЂР°Р·", localStorage.getItem("isGot60303"));
var achv60304 = new Achievement(60304, "img/60304bw.png", "img/60304.png", "Р”РѕР»РіРѕ СЃРјРѕС‚СЂРµР» РЅР° СЃРІР°СЂРєСѓ", "РСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РїРѕРґСЃРєР°Р·РєСѓ 100 СЂР°Р·", localStorage.getItem("isGot60304"));
var achv60305 = new Achievement(60305, "img/60305bw.png", "img/60305.png", "РљСЂРѕС‚", "РСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РїРѕРґСЃРєР°Р·РєСѓ 500 СЂР°Р·", localStorage.getItem("isGot60305"));
var achv60401 = new Achievement(60401, "img/60401bw.png", "img/60401.png", "РЎР°РјРѕСЃС‚РѕСЏС‚РµР»СЊРЅС‹Р№", "РџСЂРѕР№С‚Рё РёРіСЂСѓ Р±РµР· РїРѕРґСЃРєР°Р·РѕРє", localStorage.getItem("isGot60401"));
var achv60501 = new Achievement(60501, "img/60501bw.png", "img/60501.png", "РџРµСЂРµР·Р°РіСЂСѓР·РєР°", "РЎС‚РµСЂРµС‚СЊ Р»СѓС‡С€РµРµ РІСЂРµРјСЏ", localStorage.getItem("isGot60501"));
var achv60601 = new Achievement(60601, "img/60601bw.png", "img/60601.png", "Р”Р°Р»СЊС€Рµ - Р»СѓС‡С€Рµ", "РџРѕР±РёС‚СЊ СЃРІРѕР№ РїСЂРµРґС‹РґСѓС‰РёР№ СЂРµРєРѕСЂРґ РІ РѕРґРЅРѕРј СЂРµР¶РёРјРµ 1 СЂР°Р·", localStorage.getItem("isGot60601"));
var achv60602 = new Achievement(60602, "img/60602bw.png", "img/60602.png", "Р§РµР»РѕРІРµРє-РїСЂРѕРіСЂРµСЃСЃ", "РџРѕР±РёС‚СЊ СЃРІРѕР№ РїСЂРµРґС‹РґСѓС‰РёР№ СЂРµРєРѕСЂРґ РІ РѕРґРЅРѕРј СЂРµР¶РёРјРµ 3 СЂР°Р·Р°", localStorage.getItem("isGot60602"));
var achv60603 = new Achievement(60603, "img/60603bw.png", "img/60603.png", "РќРµРЅР°СЃС‹С‚РЅС‹Р№", "РџРѕР±РёС‚СЊ СЃРІРѕР№ РїСЂРµРґС‹РґСѓС‰РёР№ СЂРµРєРѕСЂРґ РІ РѕРґРЅРѕРј СЂРµР¶РёРјРµ 5 СЂР°Р·", localStorage.getItem("isGot60603"));
var achv60604 = new Achievement(60604, "img/60604bw.png", "img/60604.png", "РђР±СЃРѕР»СЋС‚РЅС‹Р№ С‡РµРјРїРёРѕРЅ", "РџРѕР±РёС‚СЊ СЃРІРѕР№ РїСЂРµРґС‹РґСѓС‰РёР№ СЂРµРєРѕСЂРґ РІ РѕРґРЅРѕРј СЂРµР¶РёРјРµ 10 СЂР°Р·", localStorage.getItem("isGot60604"));
var achv60701 = new Achievement(60701, "img/60701bw.png", "img/60701.png", "Р•СЂР¶Р°РЅ", "РСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РїРѕРґСЃРєР°Р·РѕРє Р±РѕР»СЊС€Рµ, С‡РµРј С‡РёСЃРµР» РІ С‚Р°Р±Р»РёС†Рµ", localStorage.getItem("isGot60701"));
var achv60801 = new Achievement(60801, "img/60801bw.png", "img/60801.png", "РџСЂР°Р·РґРЅСѓРµРј", "РџРѕР»СѓС‡РёС‚СЊ 5 РґРѕСЃС‚РёР¶РµРЅРёР№", localStorage.getItem("isGot60801"));
var achv60802 = new Achievement(60802, "img/60802bw.png", "img/60802.png", "Р®Р±РёР»РµР№", "РџРѕР»СѓС‡РёС‚СЊ 10 РґРѕСЃС‚РёР¶РµРЅРёР№", localStorage.getItem("isGot60802"));
var achv60803 = new Achievement(60803, "img/60803bw.png", "img/60803.png", "Р’РµС‚РµСЂР°РЅ", "РџРѕР»СѓС‡РёС‚СЊ 20 РґРѕСЃС‚РёР¶РµРЅРёР№", localStorage.getItem("isGot60803"));
var achv60901 = new Achievement(60901, "img/60901bw.png", "img/60901.png", "РЎР°РїС‘СЂ", "РџСЂРѕР№С‚Рё РёРіСЂСѓ Р±РµР· РѕС€РёР±РѕРє", localStorage.getItem("isGot60901"));
var achv60902 = new Achievement(60902, "img/60902bw.png", "img/60902.png", "Р Р°РЅРґРѕРј", "РћС€РёР±РёС‚СЊСЃСЏ Р±РѕР»СЊС€Рµ СЂР°Р·, С‡РµРј С‡РёСЃРµР» РІ С‚Р°Р±Р»РёС†Рµ", localStorage.getItem("isGot60902"));

var achvArr = [achv60101,achv60201,achv60202,achv60203,achv60204,achv60301,achv60302,achv60303,achv60304,achv60305,
achv60401,achv60501,achv60601,achv60602,achv60603,achv60604,achv60701,achv60801,achv60802,achv60803,achv60901,achv60902];

function createAchievement(idEl){
	var achieveItem = document.createElement('div');
	achieveItem.classList.add('achieve-item');
	var itemImg = document.createElement('img');
	itemImg.src = achvArr.find(x=> x.id == idEl).imgUrl;
	achieveItem.appendChild(itemImg);
	var itemDesc = document.createElement('div');
	itemDesc.classList.add('achieve-item__desc');
	achieveItem.appendChild(itemDesc);
	var itemTitle = document.createElement('h3');
	itemTitle.innerHTML= achvArr.find(x=> x.id == idEl).name;
	itemDesc.appendChild(itemTitle);
	var itemTask = document.createElement('p');
	itemTask.innerHTML= achvArr.find(x=> x.id == idEl).descr;
	itemDesc.appendChild(itemTask);
	achieveTable.appendChild(achieveItem);
	setTimeout(function(){getAchievement(); rotateAchieve();},1100);
	var tempAchvQuantity = localStorage.getItem("achieveQuantity");
	tempAchvQuantity++;
	localStorage.setItem("achieveQuantity", tempAchvQuantity);
	getQuantityAchieve();
}

function getQuantityAchieve(){
	if (localStorage.getItem("achieveQuantity")==5){
		var currentId = 60801;
		createAchievement(currentId);
		localStorage.setItem("isGot"+currentId, true);
	}
	if (localStorage.getItem("achieveQuantity")==10){
		var currentId = 60802;
		createAchievement(currentId);
		localStorage.setItem("isGot"+currentId, true);
	}
	if (localStorage.getItem("achieveQuantity")==20){
		var currentId = 60803;
		createAchievement(currentId);
		localStorage.setItem("isGot"+currentId, true);
	}
}

setTimeout(function(){achieveButton.setAttribute("style","display: block;"); },1000);

if (localStorage.getItem("firstTime") == null){
	localStorage.setItem("firstTime", true);
	localStorage.setItem("gameWins", 0);
	localStorage.setItem("achieveQuantity", 0);
	createAchievement(60101);
}
if (localStorage.getItem("bestTime"+modeId) == null){
	localStorage.setItem("bestTime"+modeId, 0);
	timeBest.innerHTML = localStorage.getItem("bestTime"+modeId);
}else{
	timeBest.innerHTML = localStorage.getItem("bestTime"+modeId);
}

function generateArr(mode){
	var arr = [];
	for(var i = 0;i < mode*mode; i++){
		arr[i]=i+1;
	}
	return arr;
}

Array.prototype.shuffle = function() {
	for (var i=this.length-1;i>0;i--){
		var j = Math.floor(Math.random() * (i + 1));
		var tmp = this[i];
		this[i]=this[j];
		this[j]=tmp;
	}
	return this;
}

function genTable(mode){
	var counter = 0;
	var arr=[];
	arr = generateArr(modeId).shuffle();
	var tableContainer = document.getElementById('table-container');
	for(var i=0; i<mode; i++){
		var row = document.createElement('div');
		row.classList.add('row-container');
		row.style.height = "calc(85vh / " + mode + ");"
		for(var j=0; j<mode; j++){
			var item = document.createElement('div');
			item.classList.add('table-item');
			item.setAttribute("style","height: calc((85vh / " + mode + ") - 1vh); width: calc((85vh / " + mode + ") - 1vh); padding-top: calc((((85vh / " + mode + ") - 1vh) / 2) - 0.625em); margin-top: 1%; font-size: calc(35vh / " + mode + "); ");
			item.innerHTML= arr[counter];
			counter++;
			row.appendChild(item);
		}
		tableContainer.appendChild(row);
	}
}

genTable(modeId);
setTimeout(function(){endAlertWin.setAttribute("style","display: block;"); endAlertRecord.setAttribute("style","display: block;"); },1000);
setTimeout(function(){achieveTable.setAttribute("style","display: block;");},1000);

function getAchievement(){
	if(achieveTableOpen == false){
		achieveButton.setAttribute("style","display: block; transform: translate3d(0px, 0px, 0px);");
	}
	
}

var getMoreHints = false;
[].forEach.call(tableItems, function(item, i){
	var hintButton = document.getElementById('hint-button');

	hintButton.onclick = function(){
		if(winCounter!=Math.pow(modeId,2)){ //While game in process
			for(var j = 0; j<tableItems.length; j++){
				if (tableItems[j].innerHTML==winCounter+1){
					tableItems[j].style.backgroundColor = '#fced79';
					setTimeout("tableItems["+j+"].style.backgroundColor = '#fff'", 700);
				}
			}
			hints.innerHTML++;
			var tempHintsPerGame = localStorage.getItem("hintsPerGame");
			tempHintsPerGame ++;
			localStorage.setItem("hintsPerGame",tempHintsPerGame);
			if (localStorage.getItem("hintsQuantity")==null){
				localStorage.setItem("hintsQuantity",1);
				if (localStorage.getItem("hintsQuantity")==1){
					var currentId = 60301;
					createAchievement(currentId);
					localStorage.setItem("isGot"+currentId, true);
				}
			}else{
				var tempHint = localStorage.getItem("hintsQuantity");
				tempHint++;
				localStorage.setItem("hintsQuantity",tempHint);
				if (localStorage.getItem("hintsQuantity")==10){
					var currentId = 60302;
					createAchievement(currentId);
					localStorage.setItem("isGot"+currentId, true);
				}
				if (localStorage.getItem("hintsQuantity")==50){
					var currentId = 60303;
					createAchievement(currentId);
					localStorage.setItem("isGot"+currentId, true);
				}
				if (localStorage.getItem("hintsQuantity")==100){
					var currentId = 60304;
					createAchievement(currentId);
					localStorage.setItem("isGot"+currentId, true);
				}
				if (localStorage.getItem("hintsQuantity")==500){
					var currentId = 60305;
					createAchievement(currentId);
					localStorage.setItem("isGot"+currentId, true);
				}
				if (parseInt(hints.innerHTML)>Math.pow(modeId,2) && localStorage.getItem("isGot60701")==null){
					var currentId = 60701;
					createAchievement(currentId);
					localStorage.setItem("isGot"+currentId, true);
				}
				if (parseInt(hints.innerHTML)>Math.pow(modeId,2) && getMoreHints==false){
					getMoreHints=true;
					var tempMoreHints = localStorage.getItem("moreHints");
					tempMoreHints++;
					localStorage.setItem("moreHints",tempMoreHints);
				}
			}
		}
	}

	var passWithoutMisstep = false;
	var gotMoreMissteps = false;
	item.addEventListener("click", function(){
		if (tableItems[i].innerHTML==1 && winCounter==0){
			tableItems[i].style.backgroundColor = "#a0efbd";
			setTimeout("tableItems["+i+"].style.backgroundColor = '#fff'", 100);
			winCounter++;
			tempNum=tableItems[i].innerHTML;
			numString = tableItems[i].innerHTML;
			num.innerHTML = numString;
		}else{
			if ((tableItems[i].innerHTML-tempNum)===1){
				tableItems[i].style.backgroundColor = "#a0efbd";
				setTimeout("tableItems["+i+"].style.backgroundColor = '#fff'", 200);
				winCounter++;
				tempNum=tableItems[i].innerHTML;
				numString = tableItems[i].innerHTML;
				num.innerHTML = numString;
				if (winCounter==Math.pow(modeId,2)){ //You win!
					endAlertWin.setAttribute("style","display: block; transform: translate3d(0px, 0px, 0px);"); 
					var tempWin = localStorage.getItem("gameWins");
					tempWin++;
					localStorage.setItem("gameWins", tempWin);
					if (localStorage.getItem("gameWins")==1){
						var currentId = 60201;
						createAchievement(currentId);
						localStorage.setItem("isGot"+currentId, true);
					}
					if (localStorage.getItem("gameWins")==10){
						var currentId = 60202;
						createAchievement(currentId);
						localStorage.setItem("isGot"+currentId, true);
					}
					if (localStorage.getItem("gameWins")==50){
						var currentId = 60203;
						createAchievement(currentId);
						localStorage.setItem("isGot"+currentId, true);
					}
					if (localStorage.getItem("gameWins")==100){
						var currentId = 60204;
						createAchievement(currentId);
						localStorage.setItem("isGot"+currentId, true);
					}
					if (localStorage.getItem("hintsPerGame") == 0 && localStorage.getItem("isGot60401")==null){
						var currentId = 60401;
						createAchievement(currentId);
						localStorage.setItem("isGot"+currentId, true);
					}
					if (localStorage.getItem("hintsPerGame") == 0){
						var tempWithoutHints = localStorage.getItem("withoutHints");
						tempWithoutHints++;
						localStorage.setItem("withoutHints",tempWithoutHints);
					}
					if (missCounter==0 && localStorage.getItem("isGot60901")==null){
						var currentId = 60901;
						createAchievement(currentId);
						localStorage.setItem("isGot"+currentId, true);
					}
					if (missCounter==0 && passWithoutMisstep==false){
						passWithoutMisstep=true;
						var tempWithoutMisstep = localStorage.getItem("withoutMissteps");
						tempWithoutMisstep++;
						localStorage.setItem("withoutMissteps",tempWithoutMisstep);
					}
				}
			}else{ //Wrong number!
				tableItems[i].style.backgroundColor = "pink";
				setTimeout("tableItems["+i+"].style.backgroundColor = '#fff'", 1000);
				if(winCounter!=Math.pow(modeId,2)){ //While game in process
					misSteps.innerHTML++;
					missCounter++;
					if (missCounter>Math.pow(modeId,2) && localStorage.getItem("isGot60902")==null){
						var currentId = 60902;
						createAchievement(currentId);
						localStorage.setItem("isGot"+currentId, true)
					}
					if (missCounter>Math.pow(modeId,2) && gotMoreMissteps==false){
						gotMoreMissteps = true;
						var tempMoreMissteps = localStorage.getItem("moreMissteps");
						tempMoreMissteps++;
						localStorage.setItem("moreMissteps",tempMoreMissteps);
					}
				}
			}
		}
	});
});

var refreshButton = document.getElementById('refresh-button');
refreshButton.onclick = function(){
	localStorage.removeItem("bestTime"+modeId);
	timeBest.innerHTML=0;
	if (localStorage.getItem("isGot60501")==null){
		var currentId = 60501;
		createAchievement(currentId);
		localStorage.setItem("isGot"+currentId, true)
	}
	var tempRefresh = localStorage.getItem("refresfQuantity");
	tempRefresh++;
	localStorage.setItem("refresfQuantity",tempRefresh);
	localStorage.setItem("newBestTimeQuantity"+modeId,0);
}

function timer(){
	var currentTime = document.getElementById('current-time');
	if (winCounter!=Math.pow(modeId,2)){
		setTimeout(function(){currentTime.innerHTML++; timer(); },1000);
	}else{
		var firstNum = currentTime.innerHTML;

		var secNum = localStorage.getItem("bestTime"+modeId);
		if (parseInt(firstNum) < parseInt(secNum) || localStorage.getItem("bestTime"+modeId)==0){
			localStorage.setItem("bestTime"+modeId, currentTime.innerHTML);
			timeBest.innerHTML = currentTime.innerHTML;
			endAlertWin.setAttribute("style","display: block; transform: translate3d(0px, 0px, 0px); right: 15vw;");
			endAlertRecord.setAttribute("style","display: block; transform: translate3d(0px, 0px, 0px);"); 
			if (localStorage.getItem("newBestTimeQuantity"+modeId)==null){
				localStorage.setItem("newBestTimeQuantity"+modeId,0);
			}else{
				var tempBestTime = localStorage.getItem("newBestTimeQuantity"+modeId);
				tempBestTime++;
				localStorage.setItem("newBestTimeQuantity"+modeId, tempBestTime);
			}
			if (localStorage.getItem("newBestTimeQuantity"+modeId) == 1 && localStorage.getItem("isGot60601")==null){
				var currentId = 60601;
				createAchievement(currentId);
				localStorage.setItem("isGot"+currentId, true);
			}
			if (localStorage.getItem("newBestTimeQuantity"+modeId) == 3 && localStorage.getItem("isGot60602")==null){
				var currentId = 60602;
				createAchievement(currentId);
				localStorage.setItem("isGot"+currentId, true);
			}
			if (localStorage.getItem("newBestTimeQuantity"+modeId) == 5 && localStorage.getItem("isGot60603")==null){
				var currentId = 60603;
				createAchievement(currentId);
				localStorage.setItem("isGot"+currentId, true);
			}
			if (localStorage.getItem("newBestTimeQuantity"+modeId) == 10 && localStorage.getItem("isGot60604")==null){
				var currentId = 60604;
				createAchievement(currentId);
				localStorage.setItem("isGot"+currentId, true);
			}
		}
	}
}

timer();
var restartButton = document.getElementById('restart-button');
restartButton.onclick = function(){
	location.reload();
}

achieveButton.onclick = function(){
	if (achieveTableOpen == false) {
		achieveTableOpen= true;
		achieveButton.setAttribute("style","display: block; transform: translate3d(calc(-35vw + 1px), 0px, 0px);");
		achieveTable.setAttribute("style","display: block; transform: translate3d(0px, 0px, 0px); box-shadow: -3px 0px 20px -1px rgba(0,0,0,0.52);");
	}else {
		achieveTableOpen= false;
		achieveButton.setAttribute("style","display: block; transform: translate3d(0px, 0px, 0px);");
		achieveTable.setAttribute("style","display: block; transform: translate3d(100%, 0px, 0px);");
	}	
}

function rotateAchieve(){
	achvButtonImg.style.transform = "rotate("+angle+"deg)";
	angle=angle+360;
}