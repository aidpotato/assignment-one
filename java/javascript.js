// const button = documnet.querySelector('#note','#dark_theme', '#save', '#cancel')
const button = document.querySelector('#dark_boy')

function dark_mode(){
    var element = document.body;
    element.classList.toggle('text_back')
    var headBack = document.getElementById('backcolor')
    headBack.classList.toggle('head_background')
    // var back_element = document.body
    // back_element.classList.toggle('head_background')
    if (button.textContent === 'Dark Theme'){
        button.innerHTML = 'Light Theme'
        }
        else{
            button.textContent = 'Dark Theme'
        }
    }
button.addEventListener('click', dark_mode)

const cancel_button = document.querySelector('#cancel_button')

function story_hide(){
  console.log('monkey')
  var hstory = document.getElementById('story')
  hstory.style.display = "none";
}

function save_hide(){
  console.log('monkey')
  var hsave= document.getElementById('save_button')
  hsave.style.display = "none";    
}

function cancel_hide(){
  console.log('monkey')
  var hcancel = document.getElementById('cancel_button')
  hcancel.style.display = "none";
}
cancel_button.addEventListener('click', cancel_hide)
cancel_button.addEventListener('click', story_hide)
cancel_button.addEventListener('click', save_hide)


//  new note//

const newNote_Text = document.querySelector('#NewNote_button')

function showCancelbutton(){
  var hcancel = document.getElementById('cancel_button');
  hcancel.style.display = "block";
}


function showSavebutton(){
  var hcancel = document.getElementById('save_button');
  hcancel.style.display = "block";
}


function showStorybutton(){
  var hcancel = document.getElementById('story');
  hcancel.style.display = "block";
}


function newNote_removetext(){
  const textarea = document.querySelector('#story');
  textarea.value = '';

}

newNote_Text.addEventListener('click', showCancelbutton)
newNote_Text.addEventListener('click', showSavebutton)
newNote_Text.addEventListener('click', showStorybutton)
newNote_Text.addEventListener('click', newNote_removetext)