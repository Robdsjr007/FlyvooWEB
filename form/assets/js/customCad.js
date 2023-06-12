const cadForm = document.getElementById("formCadastro");
<<<<<<< HEAD
const cademail = document.getElementById("cademail");
const cadsenha = document.getElementById("cadsenha");
=======
>>>>>>> 1a23113ea8753353b4d17b464538c9393e5efa52

cadForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const dadosForm = new FormData(cadForm);
<<<<<<< HEAD
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (cademail.value === "") {
        alert("Necessário preencher o Email!")
    } else if (cadsenha.value === "") {
        alert("Necessário preencher a Senha!")
    } else if (!emailRegex.test(cademail.value)) { 
        alert("Email, inválido!")
        cademail.focus();

    } else {
        const dados = await fetch("../cadastro/cadastrar.php", {
            method: "POST",
            body: dadosForm 
        });

        const resposta = await dados.json();

        //console.log(resposta);

        if(resposta['erro']){
            alert(resposta['msg']);
        }else{
            alert(resposta['msg']);
            cadForm.reset();
            window.location.replace("../login/login.html");
        } 
    }
=======

    const dados = await fetch("./cadastrar.php", {
        method: "POST",
        body: dadosForm 
    });

    const resposta = await dados.json();

    //console.log(resposta);

    if(resposta['erro']){
        msgAlertErroCad.innerHTML = resposta['msg'];
    }else{
        alert('Dados enviados com sucesso!')
        cadForm.reset();
        window.location.replace("./login.html")
    }   
>>>>>>> 1a23113ea8753353b4d17b464538c9393e5efa52
})
