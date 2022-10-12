const submitBtn = document.querySelector('.button');
const ratingDiv = document.querySelector('.rating-card__rate');
const rateBtns = document.querySelectorAll('.rating-card__rate-button')
console.log(rateBtns);

rateBtns.forEach((btn)=>{
    btn.addEventListener('click', function(event){
        console.log(event.target.value);
        btn.classList.add('selected');
})})

const submitHander = (event) =>{
    event.preventDefault();
console.log('submited');
}

submitBtn.addEventListener('click', submitHander);
// rateBtns.addEventListener('click', function(event){
// console.log(event.target.value);
// })