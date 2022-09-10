const nextPage = document.querySelector('#next-page');
const profInfoCont = document.querySelector('#professional-info-container');
const personalInfCont = document.querySelector('#personal-info-container');
const btnGenerateResume = document.querySelector('#btn-generate-resume');
const btnBackPersonalPage = document.querySelector('#btn-back-personal-page');
const btnBackPageAllInfo = document.querySelector('#btn-back-page-all-info');
const contPageAllInfo = document.querySelector('#container-page-all-info');
const footerPageAllInfo = document.querySelector('#footer');
const personalForm = document.querySelector('#personal-form');
// const inputNome = document.querySelector('#input-nome');
// const inputEmail = document.querySelector('#input-email');
// const inputContato = document.querySelector('#input-contato');
// const inputIdade = document.querySelector('#input-idade');
// const inputCargo = document.querySelector('#input-cargo');
// const scholarity = document.querySelector('#scholarity');

const renderProfesionalPage = () => {
    personalInfCont.classList.add('none')
    profInfoCont.classList.remove('none')
}

const getPersonalData = (form) => {
    return {
        nome: form.nome.value,
        email: form.email.value,
        contato: form.contato.value,
        idade: form.idade.value,
        cargo: form.cargo.value,
        sexo: document.querySelector('input[name="sexo"]:checked').value,
        escolaridade: form.escolaridade.value,
    }
}

personalForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const personalData = getPersonalData(event.target)

    console.log(personalData)
    renderProfesionalPage()
})

btnGenerateResume.addEventListener('click', () => {
    contPageAllInfo.classList.remove('none');
    profInfoCont.classList.add('none');
    footerPageAllInfo.classList.remove('none');
});
btnBackPageAllInfo.addEventListener('click', () => {
    profInfoCont.classList.remove('none');
    contPageAllInfo.classList.add('none');
    footerPageAllInfo.classList.add('none');
});

btnBackPersonalPage.addEventListener('click', () => {
    profInfoCont.classList.add('none');
    personalInfCont.classList.remove('none');
    console.log('btnmm')
});

