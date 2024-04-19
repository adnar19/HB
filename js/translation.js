import dictionnaire from "dictionnary.js";

let selector = document.getElementById('language-selector')
let nodes = document.querySelectorAll('[data-lang]');

selector.addEventListener("change", (e)=>{
    localStorage.setItem("lang",e.target.value)
    let language = selector.options[selector.selectedIndex].value;
    translation(language)
    
})

document.addEventListener('DOMContentLoaded',()=>{
    const language = localStorage.getItem("lang");
    translation(language)
    selector.value= language
})

const translation =(langue)=>{
    for (let index = 0; index < nodes.length; index++) {
        let key = nodes[index].getAttribute('data-lang');
        nodes[index].innerHTML = dictionnaire[key][langue]
        
    }
}