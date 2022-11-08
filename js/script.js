function validar() {
    var result_email = validar_email();
    var result_pass1 = validar_pass1();
    var result_pass2 = validar_pass2();
    var result_addr = validar_addr();
    var result_tlphone = validar_tlphone();
    var result_checkbox = validar_checkbox();
    var result_state = validar_state();
    var result_check = validar_check();
    return result_email && result_pass1 && result_pass2 && result_addr && result_tlphone && result_checkbox && result_state && result_check;
}

function validar_email() {
    var input = document.getElementById("email");
    var div = document.getElementById("msj_email");
    if (input.value != "") {

        var arroba = input.value.indexOf("@");
        var punto = input.value.lastIndexOf(".");
        var extension = input.value.split(".")[1];

        if (arroba > 3 && (punto-arroba) > 1 && extension.length < 4) {
            div.innerText = "";
            div.className = "";
            return true;
        } else {
            div.innerText = "El formato del correo no es válido";
            div.className = "m-2 text-danger";
            return false;
        }
    } else {
        div.innerText = "El correo electrónico es obligatorio";
        div.className = "m-2 text-danger";
        return false;
    }
}

function validar_pass1() {
    var input = document.getElementById("pass1");
    var div = document.getElementById("msj_pass1");
    if (input.value.length !=""){
        if (input.value.length >=3 && input.value.length <=6){
            div.innerText = "Contraseña aceptada";
            div.className = "m-2 text-danger";
            return true; 
        } else{
            div.innerText = " La Contraseña tiene que tener entre 3 a 6 caracteres";
            div.className = "m-2 text-danger";
            return false;
        }
    } else{
        div.innerText = "La contraseña es obligatoria";
        div.className = 'm-2 text-danger';
        return false;
    }
}

function validar_pass2(){
    var input = document.getElementById("pass1");
    var input2 = document.getElementById("pass2");
    var div = document.getElementById("msj_pass2");
    if (input.value !=  "")
    { 

        if (input.value == input2.value){
            div.innerText = "";
            div.className = "";
            return true;
        } else {
        
        
            div.innerText = "La contraseña no coincide";
            div.className = "m-2 text-danger";
            
            
            return false;
        }   
    }else {
    
    
        div.innerText = "La contraseña es obligatoria";
        div.className = "m-2 text-danger";
        
        return false;
    }
    

    
} 
    


function validar_addr() {
    var input = document.getElementById("addr");
    var div = document.getElementById("msj_addr");
    if (input.value != "") {
        return true;
    } else {
        div.innerText = "La dirección es obligatorio";
        div.className = "m-2 text-danger";
        return false;
    }
}
function validar_tlphone() {
    var input = document.getElementById("tlphone");
    var div = document.getElementById("msj_tlphone");
    if (input.value != "") {
        return true;
    } else {
        div.innerText = "El teléfono es obligatorio";
        div.className = "m-2 text-danger";
        return false;
    }
}
function validar_checkbox(){
    var check1 = document.getElementById("checkbox1");
    var check2 = document.getElementById("checkbox2");
    var check3 = document.getElementById("checkbox3");
    var check4 = document.getElementById("checkbox4");
    var check5 = document.getElementById("checkbox5");
    var div = document.getElementById("div_checkbox");
    var cont = 0;

    if (check1.checked){
        cont++
    }
    if (check2.checked){
        cont++
    }
    if (check3.checked){
        cont++
    }
    if (check4.checked){
        cont++
    }
    if (check5.checked){
        cont++
    }


    if (cont >= 2){
        div.innerText = '';
        div.className = "";
        return true;
    }
    else{
        div.innerText = 'Debe seleccionar mas de 2 opciones';
        div.className = "m-2 text-danger";
        return false;
    }
}
function validar_state(){
    var input = document.getElementById("state");
    var div = document.getElementById("msj_state");
    if (input.value == "0") {
        div.innerText = 'Debe seleccionar una comuna';
        div.className = "m-2 text-danger";
        return false;
    } else {
        div.innerText = '';
        div.className = "";
        return true;
    } 


    
}   
function validar_check() {
    var check = document.getElementById("check");
    var div = document.getElementById("msj_check");
    if(check.checked == true) {
        return true;

    } else {
        div.innerText = 'Debe aceptar las condiciones de uso';
        div.className = 'm-2 text-danger';
        return false;
        

    }
    
}         



