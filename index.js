const personalInfoContainer = document.querySelector('#personal-info-container');
const profesionalInfoContainer = document.querySelector('#profesional-info-container');
const personalForm = document.querySelector('#personal-form');
const allInfoName = document.querySelector('#all-info-name');
const allInfoOffice = document.querySelector('#all-info-office');
const allInfoEmail = document.querySelector('#all-info-email');
const allInfoSchooling = document.querySelector('#all-info-schooling');
const allInfoContact = document.querySelector('#all-info-contact');
const allInfoAge = document.querySelector('#all-info-age');
const backBtnPersonalInfoPage = document.querySelector('#back-btn-personal-info-page');
const btnGenerateResume = document.querySelector('#btn-generate-resume');
const containerPageAllInfo = document.querySelector('#container-page-all-info');
const backBtnProfecionalInfoPage = document.querySelector('#back-btn-profecional-info-page');
const footerPageAllInfo = document.querySelector('#footer-page-all-info');
const footerContent = document.querySelector('#footer-content');
const allInfoSex = document.querySelector('#all-info-sex');
const profesionalForm = document.querySelector('#profesional-form');
const nameFirm = document.querySelector('#name-firm');
const textDescription = document.querySelector('#text-description');
const expDate = document.querySelector('#exp-date');
const cambioHoje = document.querySelector('#cambio-hoje');
const feedNoticias = document.querySelector('#feed-noticias');
const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputContac = document.querySelector('#input-contac');
const inputAge = document.querySelector('#input-age');
const inputOffice = document.querySelector('#input-Office');
const removeExperience = document.querySelector('#remove-experience');
const firm = document.querySelector('#firm');
const post = document.querySelector('#post');
const description = document.querySelector('#description');


const renderProfesionalPage = () => {
    personalInfoContainer.classList.add('none');
    profesionalInfoContainer.classList.remove('none');
}

const clearInputsPersonal = () => {
    inputName.value = ''
    inputEmail.value = ''
    inputContac.value = ''
    inputAge.value = ''
    inputOffice.value = ''
}

const clearInputsprofesional = () => {
    firm.value = ''
    post.value = ''
    description.value = ''
    
}

const getPersonalInfo = (form) => {
    return {
        nome: form.name.value,
        correio: form.email.value,
        contato: form.contact.value,
        idade: form.age.value,
        cargo: form.office.value,
        genero: document.querySelector('input[name="sexo"]:checked').value,
        escolaridade: form.scholarity.value,
    }
}

personalForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const personalData = getPersonalInfo(event.target);

    allInfoName.innerText = personalData.nome
    allInfoEmail.innerText = personalData.correio
    allInfoContact.innerText = personalData.contato
    allInfoAge.innerText = personalData.idade
    allInfoOffice.innerText = personalData.cargo
    allInfoSchooling.innerText = personalData.escolaridade
    allInfoSex.innerText = personalData.genero

    renderProfesionalPage()
    clearInputsPersonal()
    checkInputs()
});

function checkInputs() {
    const inputNameValue = inputName.value.trim()
    const inputEmailValue = inputEmail.value.trim()
    const inputContacValue = inputContac.value.trim()
    const inputAgeValue = inputAge.value.trim()
    const inputOfficeValue = inputOffice.value.trim()
    
    if (inputNameValue === '') {

        errorValidation(inputName, 'Preencha este campo')
    } else {

    }
}

function errorValidation(input, menssage) {
    const inputParent = input.parentElement;

    inputParent.className = 'input-container error'
}

const getProfesionalInfo = (form) => {
    return {
        empresa: form.firm.value,
        entrada: form.entry.value.replaceAll('-', '/'),
        saida: form.exit.value.replaceAll('-', '/'),
        cargo: form.post.value,
        texto: form.description.value,
    }
}

profesionalForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const profesionalData = getProfesionalInfo(event.target);

     nameFirm.innerText = profesionalData.empresa
     textDescription.innerText = profesionalData.texto
     expDate.innerText = `${profesionalData.entrada} até ${profesionalData.saida}`
})

backBtnPersonalInfoPage.addEventListener('click', () => {
    profesionalInfoContainer.classList.add('none')
    personalInfoContainer.classList.remove('none')
});

btnGenerateResume.addEventListener('click', () => {

    let totalServiços = 0
    if (feedNoticias.checked) {
        totalServiços ++
    }
    if (cambioHoje.checked) {
        totalServiços ++
    }
    if (totalServiços > 0) {
        footerContent.innerText = `Obrigado por assinar mais ${totalServiços} serviços conosco! =)` 
    } else {
        footerContent.innerText = 'Obrigado por gerar seu curriculum conosco! =)'
    }

    profesionalInfoContainer.classList.add('none')
    containerPageAllInfo.classList.remove('none')
    footerPageAllInfo.classList.remove('none')
    footerContent.classList.remove('none')
})

backBtnProfecionalInfoPage.addEventListener('click', () => {
    containerPageAllInfo.classList.add('none')
    footerPageAllInfo.classList.add('none')
    profesionalInfoContainer.classList.remove('none')
})

removeExperience.addEventListener('click', () => {

    clearInputsprofesional()
})

