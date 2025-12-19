const reglas = {
  nombre: /^[a-zA-Z\s]{3,}$/,
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
  password: /(?=.*[A-Z])(?=.*\d).{8,}/,
};

const inputs = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  password: document.getElementById("password"),
  phone: document.getElementById("phone"),
};

function validarInput(input, regex) {
  const esValido = regex.test(input.value);

  if (esValido) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    if (input.value.length > 0) input.classList.add("invalid");
  }
}

// --- EVENT LISTENERS ---

inputs.name.addEventListener("input", (e) => {
  validarInput(e.target, reglas.nombre);
});

inputs.email.addEventListener("input", (e) => {
  validarInput(e.target, reglas.email);
});

inputs.password.addEventListener("input", (e) => {
  validarInput(e.target, reglas.password);
});

// --- GRUPOS DE CAPTURA Y REPLACE ---

inputs.phone.addEventListener("input", (e) => {
  let valor = e.target.value;

  valor = valor.replace(/\D/g, "");

  const regexFormato = /^(\d{3})(\d{3})(\d{2})(\d{3})$/;

  if (valor.length > 6) {
    valor = valor.replace(regexFormato, "($1) $2-$3-$4");
  }

  e.target.value = valor;
});

const toggleBtn = document.getElementById("toggleBtn");
const passwordInput = document.getElementById("password");

toggleBtn.addEventListener("click", () => {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";

  passwordInput.setAttribute("type", type);

  toggleBtn.style.color =
    type === "text" ? "var(--primary)" : "var(--text-muted)";
});
