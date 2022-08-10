window.addEventListener("scroll", function(){
    let animacion = document.getElementById("introduce");
    let posicion = animacion.getBoundingClientRect().top;
    let pantalla = window.innerHeight/1.4;
    if(posicion < pantalla){
        var addClassT = document.getElementById("introduce");
        addClassT.classList.add("textAnimated");
    }
    let animaSec1 = this.document.getElementById("studyCase1");
    let posSec1 = animaSec1.getBoundingClientRect().top;
    let screenSec1 = window.innerHeight/1.4;
    if(posSec1 < screenSec1){
        var addClassSec1 = document.getElementById("sc1");
        addClassSec1.classList.add("sectAnimated");
    }
    let animaSec2 = this.document.getElementById("studyCase2");
    let posSec2 = animaSec2.getBoundingClientRect().top;
    let screenSec2 = window.innerHeight/1.4;
    if(posSec2 < screenSec2){
        var addClassSec2 = document.getElementById("sc2");
        addClassSec2.classList.add("sectAnimated");
    }
    let animaSec3 = this.document.getElementById("studyCase3");
    let posSec3 = animaSec3.getBoundingClientRect().top;
    let screenSec3 = window.innerHeight/1.4;
    if(posSec3 < screenSec3){
        var addClassSec3 = document.getElementById("sc3");
        addClassSec3.classList.add("sectAnimated");
    }
    let animaSec4 = this.document.getElementById("studyCase4");
    let posSec4 = animaSec4.getBoundingClientRect().top;
    let screenSec4 = window.innerHeight/1.4;
    if(posSec4 < screenSec4){
        var addClassSec4 = document.getElementById("sc4");
        addClassSec4.classList.add("sectAnimated");
    }
    let animaSec5 = this.document.getElementById("studyCase5");
    let posSec5 = animaSec5.getBoundingClientRect().top;
    let screenSec5 = window.innerHeight/1.4;
    if(posSec5 < screenSec5){
        var addClassSec5 = document.getElementById("sc5");
        addClassSec5.classList.add("sectAnimated");
    }
    let animaSec6 = this.document.getElementById("studyCase6");
    let posSec6 = animaSec6.getBoundingClientRect().top;
    let screenSec6 = window.innerHeight/1.4;
    if(posSec6 < screenSec6){
        var addClassSec6 = document.getElementById("sc6");
        addClassSec6.classList.add("sectAnimated");
    }
    let animaSec7 = this.document.getElementById("studyCase7");
    let posSec7 = animaSec7.getBoundingClientRect().top;
    let screenSec7 = window.innerHeight/1.4;
    if(posSec7 < screenSec7){
        var addClassSec7 = document.getElementById("sc7");
        addClassSec7.classList.add("sectAnimated");
    }
    let animaSec8 = this.document.getElementById("studyCase8");
    let posSec8 = animaSec8.getBoundingClientRect().top;
    let screenSec8 = window.innerHeight/1.4;
    if(posSec8 < screenSec8){
        var addClassSec8 = document.getElementById("sc8");
        addClassSec8.classList.add("sectAnimated");
    }
    let animaSec9 = this.document.getElementById("studyCase9");
    let posSec9 = animaSec9.getBoundingClientRect().top;
    let screenSec9 = window.innerHeight/1.4;
    if(posSec9 < screenSec9){
        var addClassSec9 = document.getElementById("sc9");
        addClassSec9.classList.add("sectAnimated");
    }
    let animaSec10 = this.document.getElementById("studyCase10");
    let posSec10 = animaSec10.getBoundingClientRect().top;
    let screenSec10 = window.innerHeight/1.4;
    if(posSec10 < screenSec10){
        var addClassSec10 = document.getElementById("sc10");
        addClassSec10.classList.add("sectAnimated");
        canvas.removeEventListener("scroll");
    }
})

function closeFloatMenu(){
    let floatMenuBack = this.document.getElementById("menuFlotante");
    let floatMenuButtons = this.document.getElementById("menuFlotanteCont");
    floatMenuBack.setAttribute('style', 'left: 150%');
    floatMenuButtons.setAttribute('style', 'left: 100%');
}

function openFloatMenu(){
    let floatMenuBack = this.document.getElementById("menuFlotante");
    let floatMenuButtons = this.document.getElementById("menuFlotanteCont");
    let screenWidth = window.innerWidth;
    if (screenWidth < 800){
        floatMenuButtons.setAttribute('style', 'left: 50%');
        floatMenuBack.setAttribute('style', 'left: 0; width:100%');
    }else{
        floatMenuButtons.setAttribute('style', 'left: 75%');
        floatMenuBack.setAttribute('style', 'left: 0');
    }
    
}
if(!localStorage.getItem('themeA')) {
	localStorage.setItem('themeA',3);
}

function theme(x,y){
    var index = x;
    var load = y;
    var themeActive = localStorage.getItem('themeA');
    //alert("El valor de load es: "+ load + " el valor actual del tema es: "+ themeActive);
    if(load == 1){
        switch (themeActive){
            case '1':
                localStorage.setItem('themeA', 2);
                //alert("ahora el tema activo es "+ localStorage.getItem('themeA'));
                break;
            case '2':
                localStorage.setItem('themeA', 3);
                //alert("ahora el tema activo es "+ localStorage.getItem('themeA'));
                break;
            case '3':
                localStorage.setItem('themeA', 1);
                //alert("ahora el tema activo es "+ localStorage.getItem('themeA'));
                break;
        }
    }/*else{
        alert("mantiene tema");
    }*/
    var themeActiveUpdated = localStorage.getItem('themeA');
    switch (themeActiveUpdated) {
        case '1':
            case '1':
                var archivo= "css/light.css";
                var archivo2= "css/sectionsLight.css";
                document.getElementById("styleMode").href = archivo;
                document.getElementById("sectionMode").href = archivo2;
                document.getElementById("menuIco").src="icos/menuLight.png";
                if(index == 1){
                    document.getElementById("message").src="icos/mailLight.png";
                    document.getElementById("linkedin").src="icos/linkedinLight.png";
                    document.getElementById("whatsapp").src="icos/whatsLight.png";
                    document.getElementById("uxApps").src="galeries/home/Sw-UIX-Light.png";
                    document.getElementById("adobeApps").src="galeries/home/Sw-Adobe-Light.png";
                    document.getElementById("proApps").src="galeries/home/Sw-ProApps-Light.png";
                    document.getElementById("officeApps").src="galeries/home/Sw-Office-Light.png";
                }
            break;
        case '2':
            var archivo= "css/dark.css";
            var archivo2= "css/sectionsDark.css";
            document.getElementById("styleMode").href = archivo;
            document.getElementById("sectionMode").href = archivo2;
            document.getElementById("menuIco").src="icos/menuR.png";
            if(index == 1){
                document.getElementById("message").src="icos/mailR.png";
                document.getElementById("linkedin").src="icos/linkedinR.png";
                document.getElementById("whatsapp").src="icos/whatsR.png";
                document.getElementById("uxApps").src="galeries/home/Sw-UIX.png";
                document.getElementById("adobeApps").src="galeries/home/Sw-Adobe.png";
                document.getElementById("proApps").src="galeries/home/Sw-ProApps.png";
                document.getElementById("officeApps").src="galeries/home/Sw-Office.png";
            }
            break;
        case '3':
            var archivo= "css/main.css";
            var archivo2= "css/sections.css";
            document.getElementById("styleMode").href = archivo;
            document.getElementById("sectionMode").href = archivo2;
            document.getElementById("menuIco").src="icos/menu.png";
            if(index == 1){
                document.getElementById("message").src="icos/mail.png";
                document.getElementById("linkedin").src="icos/linkedin.png";
                document.getElementById("whatsapp").src="icos/whats.png";
            }
            break;
      }
}

var counter=0;

function desGal(x){
    counter++;
    if (x==0){
        x = counter;
    } else{
        counter = x;
    }
    let currentDes= this.document.getElementById("desGal");
    let currentDesDesc = this.document.getElementById("desDesc"); 
    var photoName = "galeries/multimedia/D-0" + x + ".png";
    currentDes.src= photoName;
    switch (x) {
        case 1:
            currentDesDesc.innerHTML="D 01";
        break;
        case 2:
            currentDesDesc.innerHTML="D 02";
        break;
        case 3:
            currentDesDesc.innerHTML="D 03";
        break;
        case 4:
            currentDesDesc.innerHTML="D 04";
        break;
        case 5:
            currentDesDesc.innerHTML="D 05";
        break;
        case 6:
            currentDesDesc.innerHTML="D 06";
        break;
        case 7:
            currentDesDesc.innerHTML="D 07";
        break;
    }
    if(counter==7){
        counter=0;
    }
}

function photGal(x){
    let currentDes= this.document.getElementById("photoGal");
    let currentDesDesc = this.document.getElementById("photoDesc"); 
    var photoName = "galeries/multimedia/F-" + x + ".png";
    currentDes.src= photoName;
    switch (x) {
        case 1:
            currentDesDesc.innerHTML="F 01";
        break;
        case 2:
            currentDesDesc.innerHTML="F 02";
        break;
        case 3:
            currentDesDesc.innerHTML="F 03";
        break;
        case 4:
            currentDesDesc.innerHTML="F 04";
        break;
        case 5:
            currentDesDesc.innerHTML="F 05";
        break;
        case 6:
            currentDesDesc.innerHTML="F 06";
        break;
        case 7:
            currentDesDesc.innerHTML="F 07";
        break;
        case 8:
            currentDesDesc.innerHTML="F 08";
        break;
        case 9:
            currentDesDesc.innerHTML="F 09";
        break;
        case 10:
            currentDesDesc.innerHTML="F 10";
        break;
        case 11:
            currentDesDesc.innerHTML="F 11";
        break;
    }
}
