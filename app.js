const btnsContainer = document.querySelector(".btns-container");
const submitBtn = document.querySelector(".submit-btn");
const ratingBtns = btnsContainer.querySelectorAll(".btn");
const selection = document.querySelector(".selection");
const thankYou = document.querySelector(".thank-you");
let selectionNumber = null;

ratingBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        ratingBtns.forEach((btn) => {
            btn.classList.remove("selected");
        });
        btn.classList.add("selected");
        selectionNumber = btn.id;
        console.log(selectionNumber);
    });
});

submitBtn.addEventListener("click", () => {
    if (!selectionNumber) return;
    thankYou.classList.remove("hidden");
    selection.textContent = `You selected ${selectionNumber} out of 5`;
});
