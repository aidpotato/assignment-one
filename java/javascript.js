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
    var hstory = document.getElementById('story', 'cancel_button', 'save_button')
    if (hstory.style.display === "none") {
        hstory.style.display = "block";
      } else {
        hstory.style.display = "none";
      }
}

function save_hide(){
    console.log('monkey')
    var hsave= document.getElementById('save_button')
    if (hsave.style.display === "none") {
        hsave.style.display = "block";
      } else {
        hsave.style.display = "none";
      }
    
}

function cancel_hide(){
    console.log('monkey')
    var hcancel = document.getElementById('cancel_button')
    if (hcancel.style.display === "none") {
        hcancel.style.display = "block";
      } else {
        hcancel.style.display = "none";
      }
    
}
cancel_button.addEventListener('click', cancel_hide)
cancel_button.addEventListener('click', story_hide)
cancel_button.addEventListener('click', save_hide)


//  new note//

const newNote_Text = document.querySelector('#NewNote_button')

function newNote_removetext(){
  const textarea = document.querySelector('#story');
  textarea.value = '';

}
newNote_Text.addEventListener('click', newNote_removetext)