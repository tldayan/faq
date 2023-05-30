"use strict"

function answerReveal(questionNumber) {

    let dropDownArrow = document.querySelector(`.drop_down_arrow`+ questionNumber)
    let revealAnswerContainer = document.querySelector(`.answer_container`+ questionNumber)
    
    if (revealAnswerContainer.classList.contains(`reveal`)) {
        revealAnswerContainer.classList.remove(`reveal`)
        dropDownArrow.classList.remove(`rotate`)

    } else {
        
        let rotate = document.querySelector(`.rotate`)
        if (rotate) {
            rotate.classList.remove(`rotate`)
        }

        let revealed = document.querySelector(`.reveal`)
        if(revealed) {
            revealed.classList.remove(`reveal`)
        }

        dropDownArrow.classList.add(`rotate`)
        revealAnswerContainer.classList.add(`reveal`)

    }
}




