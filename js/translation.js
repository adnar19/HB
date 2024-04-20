import dictionnaire from "./dictionnary.js";

let selector = document.getElementById('language-selector')
let nodes = document.querySelectorAll('[data-lang]');
selector.addEventListener("change", (e)=>{
    console.log("eeeeee");
    localStorage.setItem("lang",e.target.value)
    let language = selector.options[selector.selectedIndex].value;
    translation(language)
    
})

document.addEventListener('DOMContentLoaded',()=>{
    const language = localStorage.getItem("lang");
    if (language===null) {
        language="fr"
    }
    translation(language)
    selector.value= language
})

const translation =(langue)=>{
    for (let index = 0; index < nodes.length; index++) {
        let key = nodes[index].getAttribute('data-lang');
        console.log(key);
        nodes[index].innerHTML = dictionnaire[key][langue]
        
    }
}