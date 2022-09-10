const nextPage = document.querySelector('#next-page');
const profInfoCont = document.querySelector('#professional-info-container');
const personalInfCont = document.querySelector('#personal-info-container');
const btnGenerateResume = document.querySelector('#btn-generate-resume');
const btnBackProfInfo = document.querySelector('#btn-back-prof-info');
const btnBackPageAllInfo = document.querySelector('#btn-back-page-all-info');
const contPageAllInfo = document.querySelector('#container-page-all-info');
const footerPageAllInfo = document.querySelector('#footer');
const inputNome = document.querySelector('#input-nome');
const inputEmail = document.querySelector('#input-email');
const inputContato = document.querySelector('#input-contato');
const inputIdade = document.querySelector('#input-idade');
const inputCargo = document.querySelector('#input-cargo');
const scholarity = document.querySelector('#scholarity');

nextPage.addEventListener('click', () => {
    const sexo = document.querySelector('input[name="sexo"]:checked')
    // profInfoCont.classList.remove('none');
    // personalInfCont.classList.add('none');
    const personalData = {
        nome: inputNome.value,
        email: inputEmail.value,
        contato: inputContato.value,
        idade: inputIdade.value,
        cargo: inputCargo.value,
        escolaridade: scholarity.value,
        sexo: sexo.value,
    }
    console.log(personalData)
});

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

btnBackProfInfo.addEventListener('click', () => {
    profInfoCont.classList.add('none');
    personalInfCont.classList.remove('none');
});

