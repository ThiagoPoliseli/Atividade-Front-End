const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const telefoneInput = document.getElementById('telefone');

    const nome = nomeInput.value;
    const email = emailInput.value;
    const telefone = telefoneInput.value;

    const nomeValido = validarNome(nome);
    const emailValido = validarEmail(email);
    const telefoneValido = validarTelefone(telefone);

    if (nomeValido && emailValido && telefoneValido) {
        nomeInput.value = '';
        emailInput.value = '';
        telefoneInput.value = '';
    } else {
        const mensagensErro = [];

        if (!nomeValido) {
            mensagensErro.push('Nome inválido: Máximo 100 caracteres e sem números.');
        }

        if (!emailValido) {
            mensagensErro.push('Email inválido.');
        }

        if (!telefoneValido) {
            mensagensErro.push('Telefone inválido (formato brasileiro).');
        }

        alert(mensagensErro.join('\n'));
    }
});

function validarNome(nome) {
    const regexNome = /^[A-ZãáàèéêíìóòõúüçÇ][A-ZãáàèéêíìóòõúüçÇ\s]{0,99}$/i;
    return regexNome.test(nome);
}

function validarEmail(email) {
    const regexEmail = /^[\w+\.-]+@[\w+\.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(email);
}

function validarTelefone(telefone) {
    const regexTelefone = /^\(?\d{2}\)?\s*(?:\d{4,5}-?\d{4}|\d{4}-?\d{3})$/;
    return regexTelefone.test(telefone);
}
