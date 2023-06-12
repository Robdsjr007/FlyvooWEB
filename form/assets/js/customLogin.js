const loginForm = document.getElementById("formLogin");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (document.getElementById("email").value === "") {
        alert("Necessário preencher o Email!")
    } else if (document.getElementById("senha").value === "") {
        alert("Necessário preencher a Senha!")
    } else {
        const dadosForm = new FormData(loginForm);

<<<<<<< HEAD
        const dados = await fetch("./login/validar.php", {
=======
        const dados = await fetch("./validar.php", {
>>>>>>> 1a23113ea8753353b4d17b464538c9393e5efa52
            method: "POST",
            body: dadosForm
        });

        const resposta = await dados.json();

        if(resposta['erro']){
<<<<<<< HEAD
            alert(resposta['msg'])
=======
            console.log(resposta['msg'])
>>>>>>> 1a23113ea8753353b4d17b464538c9393e5efa52
        }else{
            loginForm.reset();
            window.location.replace("../index.php")
        }
    }
})

