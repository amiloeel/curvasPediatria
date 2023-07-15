const infoArea = document.getElementById("newInfosArea")
const novaConsultaBtn = document.getElementById("novaConsultaBtn")
const anos = document.getElementById("anosInput")
const meses = document.getElementById("mesesInput")
const altura = document.getElementById("alturaInput")
const hints = document.getElementById("hintsArea")
const graph = document.getElementById("boundsArea")

function addPoint(){
    infoArea.removeAttribute("hidden")
    novaConsultaBtn.setAttribute("disabled","")
}

function doPoint(){
    if(checkValues()){
        hints.setAttribute("hidden","")
        infoArea.setAttribute("hidden","")
        novaConsultaBtn.removeAttribute("disabled")
        insertPoint(anos, meses, altura)
    }else{
        alert("Favor preencher corretamente os dados!")
        hints.removeAttribute("hidden")
    }
}

function checkValues(){
    if(meses.value>11) return false;
    if(anos.value==5 && meses.value>0) return false;
    if(altura.value>122 || altura.value<43) return false;
    if(anos.value=="" && meses.value=="") return false;
    if(anos.value=="" && meses.value==0) return false;
    if(anos.value==0 && meses.value=="") return false;
    if(altura.value=="") return false;
    else return true;
}

function insertPoint(anos, meses, altura){
    var idade = converteMeses(anos, meses)
    var novoPonto = document.createElement("div")
    novoPonto.classList.add("pointClass")
    
    var xLargura = graph.offsetWidth
    var yAltura = graph.offsetHeight
    var xStep = parseFloat(xLargura) / 60
    var yStep = parseFloat(yAltura) / 79

    var xValue = (parseFloat(idade) * xStep) - 4
    var yValue = yAltura - (parseFloat((altura.value) - 43) * yStep) - 4

    graph.appendChild(novoPonto)
    novoPonto.style.marginLeft = xValue + "px"
    novoPonto.style.marginTop = yValue + "px"
}

function converteMeses(anos, meses){
    var idade = 0
    if(anos.value!="" && anos.value!=0){
        var idade = 12 * parseFloat(anos.value)
    }
    if(meses.value!="" && meses.value!=0){
        idade = idade + parseFloat(meses.value)
    }
    return idade
}