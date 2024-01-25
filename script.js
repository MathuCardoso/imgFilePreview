const file =
document.querySelector('#fileImg')

const img = 
document.querySelector('#img');

var verSenha = 
document.querySelector('#ver');

var inpSenha =
document.querySelector('#inp__senha');

img.addEventListener("click", function() {
    file.click();
});

file.addEventListener("change", function(e) {

    if(file.files.lenght <= 0) {
        return;
    }

    let reader = new FileReader();

    reader.onload = function() {
        img.src = reader.result;
        console.log(reader.result);
    }

    reader.readAsDataURL(file.files[0]);

})

verSenha.addEventListener("click", function() {
    if (inpSenha.type === "password") {
        inpSenha.type = "text";
        verSenha.textContent = "Ocultar senha";
    } else if (inpSenha.type === "text") {
        inpSenha.type = "password";
        verSenha.textContent = "Mostrar senha";
    }
});


