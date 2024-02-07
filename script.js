function criptografarTexto() {
    var mensagemDescriptografada = document.getElementById("textoDescriptografado").value;
    var mensagemCriptografada = mensagemDescriptografada.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    console.log(mensagemCriptografada);
    document.getElementById("imagemMensagemNaoEncontrada").style.display = 'none';
    document.getElementById("mensagemFinal").style.display = 'inline';
    document.getElementById('mensagemFinal').innerText = mensagemCriptografada;
    document.getElementById("botaoCopiar").style.display = 'inline';
}

function descriptografarTexto() {
    var mensagemCriptografada = document.getElementById("textoDescriptografado").value;
    var mensagemDescriptografada = mensagemCriptografada.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    console.log(mensagemDescriptografada);
    document.getElementById("imagemMensagemNaoEncontrada").style.display = 'none';
    document.getElementById("mensagemFinal").style.display = 'inline';
    document.getElementById('mensagemFinal').innerText = mensagemDescriptografada;
    document.getElementById("botaoCopiar").style.display = 'inline';
}

function copiarMensagem() {
    var mensagemCopiada = document.getElementById("mensagemFinal").value;
    navigator.clipboard.writeText(mensagemCopiada);
    alert("Mensagem copiada!")
}
//verificar se tem maiusculas e outros caracters