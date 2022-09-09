// const btnNextPage = document.querySelector('#next-page')
// function loudNextPage() {
//     const personalInfoContainer = document.querySelector('#personal-info-container')
//     personalInfoContainer.style.display = 'none';
// }
// btnNextPage.addEventListener('click', loudNextPage)


// document.querySelector('#next-page').addEventListener('click', () => {
//     document.querySelector('#personal-info-container').style.display = 'none'; 
// })
const nextPage = document.querySelector('#next-page');
const profInfoCont = document.querySelector('#professional-info-container');
const personalInfCont = document.querySelector('#personal-info-container');
const btnGenerateResume = document.querySelector('#btn-generate-resume');
const contPageAllInfo = document.querySelector('#container-page-all-info');
const footerPageAllInfo = document.querySelector('#footer');
const inputNome = document.querySelector('#input-nome');
const inputEmail = document.querySelector('#input-email');
const inputContato = document.querySelector('#input-contato');
const inputIdade = document.querySelector('#input-idade');
const inputCargo = document.querySelector('#input-cargo');
const scholarity = document.querySelector('#scholarity');

nextPage.addEventListener('click', continuePageInfoProf);
btnGenerateResume.addEventListener('click', GenerateResume);

function continuePageInfoProf() {
    profInfoCont.classList.remove('none');
    personalInfCont.classList.add('none');
}

function GenerateResume(){
    contPageAllInfo.classList.remove('none');
    profInfoCont.classList.add('none')
    footerPageAllInfo.classList.remove('none')
}