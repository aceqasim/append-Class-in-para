 
let  newBtn = document.createElement("button") 
newBtn.innerText="Click me"
console.log(newBtn)


document.body.append(newBtn)



// question # 2
let para = document.querySelector("p")
// para.setAttribute("newClass")
para.classList.add("newClass")
console.log(para.getAttribute('class'));