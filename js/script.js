const submitBtn = document.querySelector(".button");
const ratingDiv = document.querySelector(".rating-card__rate");
const rateBtns = document.querySelectorAll(".rating-card__rate-button");
const thankYou = document.querySelector(".thank-you");
const ratingCard = document.querySelector(".rating-card");
const userSelection = document.querySelector(".userSelection");

let userSelect;

rateBtns.forEach((btn) => {
	
    btn.addEventListener("click", function (event) {
		userSelect = event.target.value;
		btn.classList.add("selected");
	});

    btn.addEventListener('mouseover',  (event)=>{
        const button = event.target;
    const sibling = button.previousElementSibling;
    if(button.value == '1'){
        return 
    }
    sibling.classList.toggle('mouseOver');
})
btn.addEventListener('mouseout',  (event)=>{
    const button = event.target;
    const sibling = button.previousElementSibling;
    if(button.value == '1'){
        return 
    }
    sibling.classList.toggle('mouseOver');
    })
});

const submitHander = (event) => {
	event.preventDefault();
	console.log("submited");
	ratingCard.style.display = "none";
	thankYou.style.display = "flex";

	userSelection.textContent = userSelect;
};

submitBtn.addEventListener("click", submitHander);

