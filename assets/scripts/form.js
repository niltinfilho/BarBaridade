const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const button = document.getElementById("button");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const dataRegex = /^\d{4}-\d{2}-\d{2}$/;
let nomeValidado = false;
let telefoneValidado = false;
let emailValidado = false;
let dataValidado = false;
let numeroValidado = false;

function setError(index) {
  campos[index].style.border = "2px solid var(--red)";
  spans[index].style.display = "block";
}

function removeError(index) {
  campos[index].style.border = "";
  spans[index].style.display = "none";
}

function isValidDateReal(dateString) {
  const [ano, mes, dia] = dateString.split("-").map(Number);
  const dataAtual = new Date(ano, mes - 1, dia);

  return (
    dataAtual.getFullYear() === ano &&
    dataAtual.getMonth() === mes - 1 &&
    dataAtual.getDate() === dia
  );
}

function mascaraDeTelefone(telefone) {
  const numeroAtual = telefone.value;
  if (telefoneValidate(telefone)) {
    let numeroAjustado = numeroAtual.replace(/\D+/g, "").trim();
    const hasDDD = numeroAjustado.length === 10 || numeroAjustado.length === 11;

    if (hasDDD) {
      const ddd = numeroAjustado.slice(0, 2);
      numeroAjustado = numeroAjustado.slice(2);
      const isCelular = numeroAjustado.length === 9;

      if (isCelular) {
        const parte1 = numeroAjustado.slice(0, 5);
        const parte2 = numeroAjustado.slice(5, 9);
        numeroAjustado = `(${ddd}) ${parte1}-${parte2}`;
      } else {
        const parte1 = numeroAjustado.slice(0, 4);
        const parte2 = numeroAjustado.slice(4, 8);
        numeroAjustado = `(${ddd}) ${parte1}-${parte2}`;
      }
    } else {
      const isCelular = numeroAjustado.length === 9;
      if (isCelular) {
        const parte1 = numeroAjustado.slice(0, 5);
        const parte2 = numeroAjustado.slice(5, 9);
        numeroAjustado = `${parte1}-${parte2}`;
      } else {
        const parte1 = numeroAjustado.slice(0, 4);
        const parte2 = numeroAjustado.slice(4, 8);
        numeroAjustado = `${parte1}-${parte2}`;
      }
    }
    telefone.value = numeroAjustado;
  }
}

function nameValidate() {
  const index = 0;
  const valor = campos[index].value;
  if (valor.length > 0 && valor.length < 3) {
    setError(index);
    validaTodosCampos("nomeInvalido");
    return false;
  } else {
    removeError(index);
    validaTodosCampos("nomeValido");
    return true;
  }
}

function telefoneValidate(telefone) {
  const index = 1;
  telefone.value = telefone.value.replace(/\D+/g, "").trim();
  telefone.maxLength = 11;
  if (telefone.value.length > 0 && telefone.value.length < 8) {
    setError(index);
    validaTodosCampos("telefoneInvalido");
    return false;
  } else {
    removeError(index);
    validaTodosCampos("telefoneValido");
    return true;
  }
}

function emailValidate() {
  const index = 2;
  if (campos[index].value.length > 0 && !emailRegex.test(campos[index].value)) {
    setError(index);
    validaTodosCampos("emailInvalido");
    return false;
  } else {
    removeError(index);
    validaTodosCampos("emailValido");
    return true;
  }
}

function dataValidate() {
  const index = 3;
  const valor = campos[index].value;

  console.log(valor);

  if (valor.length > 0 && (!dataRegex.test(valor) || !isValidDateReal(valor))) {
    setError(index);
    validaTodosCampos("dataInvalido");
    return false;
  } else {
    removeError(index);
    validaTodosCampos("dataValido");
    return true;
  }
}

function numeroValidate() {
  const index = 4;
  const valor = campos[index].value;

  if (valor.length > 0 && valor == 0) {
    setError(index);
    validaTodosCampos("numeroInvalido");
    return false;
  } else {
    removeError(index);
    validaTodosCampos("numeroValido");
    return true;
  }
}

function sendWhatsapp() {
  const name = document.getElementById("name").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const data = document.getElementById("data").value;
  const numero = document.getElementById("numero").value;

  const phoneNumber = "+5517991248918";

  const url =
    "https://api.whatsapp.com/send?phone=" +
    phoneNumber +
    "&text=" +
    "*Dados para Reserva* " +
    "%0A" +
    "%0A" +
    "*Nome:* " +
    name +
    "%0A" +
    "*Telefone:* " +
    telefone +
    "%0A" +
    "*Email:* " +
    email +
    "%0A" +
    "*Data:* " +
    data +
    "%0A" +
    "*Número de pessoas:* " +
    numero +
    "%0A";
  window.open(url, "_blank");
}

function validaTodosCampos(campo) {
  if (campo == "nomeValido") {
    nomeValidado = true;
  }
  if (campo == "telefoneValido") {
    telefoneValidado = true;
  }
  if (campo == "emailValido") {
    emailValidado = true;
  }
  if (campo == "dataValido") {
    dataValidado = true;
  }
  if (campo == "numeroValido") {
    numeroValidado = true;
  }
  if (campo == "nomeInvalido") {
    nomeValidado = false;
  }
  if (campo == "telefoneInvalido") {
    telefoneValidado = false;
  }
  if (campo == "emailInvalido") {
    emailValidado = false;
  }
  if (campo == "dataInvalido") {
    dataValidado = false;
  }
  if (campo == "numeroInvalido") {
    numeroValidado = false;
  }

  if (
    nomeValidado &&
    telefoneValidado &&
    emailValidado &&
    dataValidado &&
    numeroValidado
  ) {
    button.classList.remove("disabled");
    button.disabled = false;
  } else {
    button.classList.add("disabled");
    button.disabled = true;
  }
}
