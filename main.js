let element1 = document.querySelector(".ul .one");
let element2 = document.querySelector(".ul .two");
let element3 = document.querySelector(".ul .three");
let element4 = document.querySelector(".ul .four");
let element5 = document.querySelector(".ul .five");

element1.onclick = () =>{
    element1.classList.add("active");
}
element2.onclick = () =>{
    element2.classList.add("active");
}
element3.onclick = () =>{
    element3.classList.add("active");
}
element4.onclick = () =>{
    element4.classList.add("active");
}
element5.onclick = () =>{
    element5.classList.add("active");
}

let elements = [element1, element2 , element3 , element4, element5];
let submit = document.querySelector(".submit");
let box = document.querySelector(".box");
let box1 = document.querySelector(".box1");
let select = document.querySelector(".sel");

submit.onclick = () => {
    box.classList.add("none");
    box1.classList.remove("none");
    for(let i = 0; i < elements.length; i++){
        if(elements[i].classList.contains("active")){
            switch (elements[i]){
                case elements[0] :
                    select.innerHTML = 1;
                break;
                case elements[1] :
                    select.innerHTML = 2;
                break;
                case elements[2] :
                    select.innerHTML = 3;
                break;
                case elements[3] :
                    select.innerHTML = 4;
                break;
                case elements[4] :
                    select.innerHTML = 5;
                break;
            }
        };
    }
}