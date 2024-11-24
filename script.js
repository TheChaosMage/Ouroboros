
const start_button = document.getElementById("start_button")
const hero_button = document.createElement("button")
const sage_button = document.createElement("button")
const villain_button = document.createElement("button")
const TimeTravel_button = document.createElement("button")
const body = document.body
const main = document.createElement("section")
const ego_display = document.createElement("div")
const age_display = document.createElement("div")
const situation_display = document.createElement("h3")
const karma_display = document.createElement("div")
const hurt_display = document.createElement("div")
const helped_display = document.createElement("div")
const what_do_you_do = document.createElement("h4")
const you_died = document.createElement("h2")
what_do_you_do.textContent = "What Do You Do?"
you_died.textContent = "You Died..."
let ego = 2
let age = 0
let karma = 1
let people_hurt = 0
let people_helped = 0
let enlightened = false


// story arrays

const story_array = ['hello','goodbye','you are born to poor family','huh?','go away']
const story_array2 = ['2hello','2goodbye','2who are you','2huh?','2go away']
const story_array3 = ['3hello','3goodbye','3who are you','3huh?','3go away']
const story_array4 = ['4hello','4goodbye','4who are you','4huh?','4go away']
const story_array5 = ['5hello','5goodbye','5who are you','5huh?','5go away']
const story_array6 = ['6hello','6goodbye','6who are you','6huh?','6go away']
const story_array7 = ['7hello','7goodbye','7who are you','7huh?','7go away']
const story_array8 = ['8hello','8goodbye','8who are you','8huh?','8go away']
const age_array = [story_array, story_array2, story_array3 , story_array4, story_array5, story_array6, story_array7,story_array8]

// hero button array to store the strings that show the story option

const hero_story_array = ['hello','goodbye','beg for food','huh?','go away']
const hero_story_array2 = ['2hello','2goodbye','2who are you','2huh?','2go away']
const hero_story_array3 = ['3hello','3goodbye','3who are you','3huh?','3go away']
const hero_story_array4 = ['4hello','4goodbye','4who are you','4huh?','4go away']
const hero_story_array5 = ['5hello','5goodbye','5who are you','5huh?','5go away']
const hero_story_array6 = ['6hello','6goodbye','6who are you','6huh?','6go away']
const hero_story_array7 = ['7hello','7goodbye','7who are you','7huh?','7go away']
const hero_story_array8 = ['8hello','8goodbye','8who are you','8huh?','8go away']
const hero_age_array = [hero_story_array, hero_story_array2, hero_story_array3 ,
     hero_story_array4, hero_story_array5, hero_story_array6, hero_story_array7,hero_story_array8]



// sage button array to store the strings that show the story option
const sage_story_array = ['hello','goodbye','sell your jacket','huh?','go away']
const sage_story_array2 = ['2hello','2goodbye','2who are you','2huh?','2go away']
const sage_story_array3 = ['3hello','3goodbye','3who are you','3huh?','3go away']
const sage_story_array4 = ['4hello','4goodbye','4who are you','4huh?','4go away']
const sage_story_array5 = ['5hello','5goodbye','5who are you','5huh?','5go away']
const sage_story_array6 = ['6hello','6goodbye','6who are you','6huh?','6go away']
const sage_story_array7 = ['7hello','7goodbye','7who are you','7huh?','7go away']
const sage_story_array8 = ['8hello','8goodbye','8who are you','8huh?','8go away']
const sage_age_array = [sage_story_array, sage_story_array2, sage_story_array3 ,
     sage_story_array4, sage_story_array5, sage_story_array6, sage_story_array7,sage_story_array8]



// villain button array to store the strings that show the story option
const villain_story_array = ['hello','goodbye','steal food','huh?','go away']
const villain_story_array2 = ['2hello','2goodbye','2who are you','2huh?','2go away']
const villain_story_array3 = ['3hello','3goodbye','3who are you','3huh?','3go away']
const villain_story_array4 = ['4hello','4goodbye','4who are you','4huh?','4go away']
const villain_story_array5 = ['5hello','5goodbye','5who are you','5huh?','5go away']
const villain_story_array6 = ['6hello','6goodbye','6who are you','6huh?','6go away']
const villain_story_array7 = ['7hello','7goodbye','7who are you','7huh?','7go away']
const villain_story_array8 = ['8hello','8goodbye','8who are you','8huh?','8go away']
const villain_age_array = [villain_story_array, villain_story_array2, villain_story_array3 ,
    villain_story_array4, villain_story_array5, villain_story_array6, villain_story_array7,villain_story_array8]

// a function to put buttons on the screen and bascially make a "game state"
function start(){
    // gets rid of the start screen
    start_button.remove()
    you_died.remove()
    ego = 2

// the main diplays to make choices and display the story
    body.append(ego_display)
    body.append(karma_display)
    body.append(age_display)
    body.append(hurt_display)
    body.append(helped_display)
    body.append(situation_display)
    body.append(what_do_you_do)
   // buttons
    body.append(hero_button)
    body.append(sage_button)
    body.append(villain_button)
    if(enlightened){
        body.append(TimeTravel_button)
        TimeTravel_button.textContent = "Reverse time"
    }
}



//kill the soul
function death(){
    situation_display.remove()
    what_do_you_do.remove()
    hero_button.remove()
    villain_button.remove()
    sage_button.remove()
    TimeTravel_button.remove()
    body.append(you_died)
    setTimeout(()=>{body.append(start_button)},2000)
    start_button.textContent = "Reincarnate?"
    age = 0
    ego = 2
    if(karma<0 && age >7){
        enlightened = true
    }
}


// game over checks
function checkGameState(){
    if(age>=8 || ego > 4 || ego<0 ){
        death()

    } else{      
  
        situation_display.textContent = `Story: ${age_array[age][ego]}`
        ego_display.textContent = `ego: ${ego}`
        karma_display.textContent = `karma: ${karma}`
        age_display.textContent = `age: ${age}0`
        hurt_display.textContent = `people hurt: ${people_hurt}`
        helped_display.textContent = `people helped: ${people_helped}`
        hero_button.textContent = `${hero_age_array[age][ego]}`
        villain_button.textContent =`${villain_age_array[age][ego]}`
        sage_button.textContent = `${sage_age_array[age][ego]}`
    }

}

// the buttons values to keep track of how a soul develops 
start_button.addEventListener("click",start)

villain_button.addEventListener("click",()=>{
    ego++
    people_hurt++
    age++
    karma = Math.abs(karma) +  Math.abs(people_hurt)
})
hero_button.addEventListener("click",()=>{
    ego--
    age++
    people_helped++
    karma--

})

sage_button.addEventListener("click",()=>{
    age++
    people_helped++
})
TimeTravel_button.addEventListener("click",()=>{
    age--
})

setInterval(()=>{
    checkGameState()
}, 0)
