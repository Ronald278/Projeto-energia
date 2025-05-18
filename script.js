const bt1 = document.querySelector("#search");

bt1.addEventListener("click", function procurar(e){
    e.preventDefault();
    const vp = document.querySelector("#cabinput");
    let pesquisa = vp.value;
    console.log(pesquisa)
})















const ch1 = document.querySelector("#b1");
const ch2 = document.querySelector("#b2");
let cont1 = 1

ch1.addEventListener("click",function comp(){
    
    const valor = document.getElementById("oculto")
    const valor2 = document.getElementById("propostas")
    if(valor.id=="oculto" && cont1==1){
        valor.id="comparar";
        valor2.id="oculto";
        cont1++

    }
})

ch2.addEventListener("click",function prop(){

    const valor = document.getElementById("comparar")
    const valor2 = document.getElementById("oculto")
    if(valor2.id == "oculto" && cont1==2){
        valor2.id = "propostas";
        valor.id = "oculto";
        cont1--
    }

})

