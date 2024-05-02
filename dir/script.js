let userScore = 0;
let compScore = 0;
let user_score = document.getElementById('user_score')
let comp_score = document.getElementById('comp_score')
let msg_box = document.getElementById('message_box')
let msg = document.getElementById('message')
const choices = document.querySelectorAll('.choice')

const compChoice = () => {
    const option = ['rock', 'paper', 'scissor']
    const math = Math.trunc(Math.random() * 3);
    const compCho = option[math]
    return compCho;
}
const showWin = (userWin) => {
    if (userWin) {
        msg.innerText = 'You Win!'
        msg_box.style.backgroundColor = 'green'
        userScore++;
        user_score.innerText = `${userScore}`
    } else {
        msg.innerText = 'You Lose!'
        msg_box.style.backgroundColor = 'red'
        compScore++;
        comp_score.innerText = `${compScore}`
    }
}
const playGame = (userChoice) => {
    const com = compChoice();
    if (userChoice === com) {
        msg.innerText = 'Game was draw. Play again!'
        msg_box.style.backgroundColor = 'orange'
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            userWin = com === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userWin = com === 'scissor' ? false : true;
        } else {
            userWin = com === 'rock' ? false : true;
        }
        showWin(userWin);

    }

}

choices.forEach(e => {
    e.addEventListener('click', () => {
        const userChoice = e.getAttribute('id')
        playGame(userChoice)
    })
})