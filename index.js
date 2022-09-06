// const btnNextPage = document.querySelector('#next-page')
// function loudNextPage() {
//     const personalInfoContainer = document.querySelector('#personal-info-container')
//     personalInfoContainer.style.display = 'none';
// }
// btnNextPage.addEventListener('click', loudNextPage)


document.querySelector('#next-page').addEventListener('click', () => {
    document.querySelector('#personal-info-container').style.display = 'none'; 
})

