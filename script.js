function validarLetras(texto) {
    var mensagem = texto;
    var letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var validacao = false;
    for (let i of mensagem) {
        if (letras.includes(i)) {
            var validacao = true;
        }
        else {
            var validacao = false;
            break;
        }
    }
    return validacao;
}

function criptografarTexto() {
    var mensagemDescriptografada = document.getElementById("textoDescriptografado").value;
    var validacao = validarLetras(mensagemDescriptografada);
    if (validacao == true) {
        var mensagemCriptografada = mensagemDescriptografada.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        document.getElementById("imagemMensagemNaoEncontrada").style.display = 'none';
        document.getElementById("mensagemFinal").style.display = 'inline';
        document.getElementById('mensagemFinal').innerText = mensagemCriptografada;
        document.getElementById("botaoCopiar").style.display = 'inline';
    }
    else {
        document.getElementById("mensagemAlerta").style.color = "#ff0000";
        document.getElementById("mensagemAlerta").style.fontSize = "20px";
    }
}


function descriptografarTexto() {
    var mensagemCriptografada = document.getElementById("textoDescriptografado").value;
    var mensagemDescriptografada = mensagemCriptografada.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById("imagemMensagemNaoEncontrada").style.display = 'none';
    document.getElementById("mensagemFinal").style.display = 'inline';
    document.getElementById('mensagemFinal').innerText = mensagemDescriptografada;
    document.getElementById("botaoCopiar").style.display = 'inline';
}


function copiarMensagem() {
    var mensagemCopiada = document.getElementById("mensagemFinal").value;
    navigator.clipboard.writeText(mensagemCopiada);
    alert("Mensagem copiada!");
}
