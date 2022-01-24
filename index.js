import data from "./data/data.json" assert { type: "json" };

const rollButton = document.querySelector('.roll')
const boyButton = document.querySelector('.boy')
const girlButton = document.querySelector('.girl')

const resultFild = document.querySelector('.result-name')
let boy = false;
let girl = false;

function getRandomName(){
    const randomNumber = Math.floor(Math.random()*(1017) +1)
    const randomPerson = data.Arkusz1[randomNumber]
    checkSex(randomPerson)
}

function checkSex(toCheck){
    if(boy){
        if(boy && toCheck.Płeć === 'M'){
            handleRoll(toCheck.Imię)

        } else {
            getRandomName()
        }
    } else if(girl){
        if(girl && toCheck.Płeć === 'K'){
            handleRoll(toCheck.Imię)
        } else (
            getRandomName()
        )
    }

}


function handleRoll(name){
resultFild.innerText = name
}

rollButton.addEventListener('click', getRandomName)

boyButton.addEventListener('click', function(){
    boyButton.classList.add('selected')
    if(girlButton.classList.contains('selected')){
        girlButton.classList.remove('selected')
    }
    boy = true;
    girl = false;
})
girlButton.addEventListener('click', function(e){
    girlButton.classList.add('selected')
    if(boyButton.classList.contains('selected')){
        boyButton.classList.remove('selected')
    };
    girl = true;
    boy = false;
})

