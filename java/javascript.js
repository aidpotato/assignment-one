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

