const countries = [
    "Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Costa Rica", "Cuba", "Ecuador", "El Salvador", "España", "Estados Unidos", 
        "Guatemala", "Honduras", "México", "Nicaragua", "Paraguay", 
        "Perú", "República Dominicana", "Uruguay", "Venezuela"
];
function filterCountries(value) {
    const countryList = document.getElementById("countryList");
    countryList.innerHTML = ""; // Limpiar la lista
    if (!value) return;

    const filteredCountries = countries.filter(country => 
        country.toLowerCase().includes(value.toLowerCase())
    );

    filteredCountries.forEach(country => {
        const item = document.createElement("div");
        item.classList.add("autocomplete-item");
        item.textContent = country;
        item.onclick = () => selectCountry(country);
        countryList.appendChild(item);
    });
}

function selectCountry(country) {
    document.getElementById("nacionalidad").value = country;
    document.getElementById("countryList").innerHTML = ""; // Limpiar la lista
}


function nextStep(step) {
    const currentStep = document.getElementById(`step${step}`);
    const nextStep = document.getElementById(`step${step + 1}`);
    
    if (validateStep(step)) {
        currentStep.classList.remove('active');
        nextStep.classList.add('active');
        document.getElementById(`step${step}Circle`).classList.add('completed');
    }
}

function prevStep(step) {
    const currentStep = document.getElementById(`step${step}`);
    const previousStep = document.getElementById(`step${step - 1}`);
    
    currentStep.classList.remove('active');
    previousStep.classList.add('active');
    document.getElementById(`step${step}Circle`).classList.remove('completed');
}

function validateStep(step) {
    const inputs = document.querySelectorAll(`#step${step} input`);
    for (let input of inputs) {
        if (!input.value) {
            alert('Por favor completa todos los campos.');
            input.classList.add('Por favor completa todos los campos.')
            return false;
        }
    }
    return true;
}

function completeRegistration() {
    alert('Registro completado con éxito!');
    // Aquí puedes agregar la lógica para enviar los datos del formulario
}

// Redirigir a la página de inicio de sesión 
{
window.location.href = 'indeex.html'; // Cambia 'login.html' por la URL de tu página de inicio de sesión
}