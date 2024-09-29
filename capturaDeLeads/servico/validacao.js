function validaNome(nome){
    const regEx = /^[A-ZÀ-ÖØ-Ýa-zà-öø-ý]+([ '-][A-ZÀ-ÖØ-Ýa-zà-öø-ý]+)*$/;
    let isValid = nome.length >= 3 && regEx.test(nome);
    return isValid
};

function validaEmail(email){
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = regexEmail.test(email);
    return isValid; 
  }

function validaTelefone(telefone){
    const regExTelone = /^\+?[1-9]\d{0,2}\s?\(?\d{2,4}\)?[\s.-]?\d{4,5}[\s.-]?\d{4}$/;
    const isValid = regExTelone.test(telefone);
    return isValid;
}

function validaUsuario(nome, email, telefone){

    const nome_Valido = validaNome(nome);
    const email_Valido = validaEmail(email);
    const telefone_Valido = validaTelefone(telefone);

    if (!nome_Valido) {
        return {status: false, mensagem:"Nome inválido"}
    } else if (!email_Valido) {
        return {status: false, mensagem:"e-mail inválido"}
    } else if (!telefone_Valido) {
        return {status: false, mensagem:"Telefone inválido"}
    } else if (nome_Valido && email_Valido && telefone_Valido) {
        return {status: true, mensagem:"Dados válidados com sucesso!"}
    }

}

export default validaUsuario;