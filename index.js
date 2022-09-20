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
const divInserted = document.querySelector('#elementos-inseridos');


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






const jobsList = [];

profesionalForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const profesionalData = getProfesionalInfo(event.target);
    jobsList.push(profesionalData)


    divInserted.innerHTML = '';


    for (let i = 0; i < jobsList.length; i++) {
        const divJobWrapper = document.createElement('div');
    
        const divJobData = document.createElement('div');
        divJobData.classList.add('container-txt-info');
        divJobWrapper.appendChild(divJobData);
    
        const h2CompanyName = document.createElement('h2');
        h2CompanyName.classList.add('txt-green');
        h2CompanyName.innerText = jobsList[i].empresa;
        // não colocamos Id pq não precisamos usar o querySelector para pegar o elemento no DOM
        // pois como criamos já estamos com ele acessivel na variável h2
        divJobData.appendChild(h2CompanyName);
    
        const spanJobDescription = document.createElement('span');
        spanJobDescription.classList.add('txt-info');
        spanJobDescription.innerText = jobsList[i].texto;
        divJobData.appendChild(spanJobDescription);
    
        const divDate = document.createElement('div');
        divJobData.classList.add('txt-green');
    
        const spanDate = document.createElement('span');
        spanDate.innerText = `${jobsList[i].entrada} até ${jobsList[i].saida}`;
        divDate.appendChild(spanDate);
    
        divJobData.appendChild(divDate);
        divJobData.appendChild(divDate);
    
        divInserted.appendChild(divJobWrapper)
            // gera HTML dos dados do resumo
    }
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

