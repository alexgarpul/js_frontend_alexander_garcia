const box= document.querySelector(".Box")

for (let i = 1; i <=100; i++) {
    const element=document.createElement("div")
    element.innerHTML=i
    element.className="element"
    if(i%2 === 0) {
        element.className="element"
    }else{
        element.classList.add("element1")
    }
    box.appendChild(element)

}