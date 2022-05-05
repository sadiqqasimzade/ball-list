const input = document.getElementById("input1")
const btn = document.getElementById("f1b1")
const ul = document.getElementById("ul1")
const dangertext =document.getElementById("dangertext")


btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (isNotNull(input) && isNotRepeated(input)) {
        let li = document.createElement("li");
        let i = document.createElement("i");
        i.classList.add("las", "la-trash-alt", "float-end");
        li.innerText = input.value;
        li.classList.add("list-group-item");
        li.append(i);
        i.onclick = function () {
            this.parentElement.remove();
        }
        li.addEventListener("click", function () {
            activeLi(this);
        })
        ul.append(li);
    }
})


function isNotNull(elem) {
    if (elem.value.trim() == "") {
        dangertext.classList.remove("d-none");
        dangertext.innerText="CANT BE EMPTY";
        return false;
    }
    else {
        dangertext.classList.add("d-none");
        return true;
    }
}

function isNotRepeated(elem) {
    childs = document.getElementById("ul1").children;
    for (let i = 0; i < childs.length; i++) {
        if(elem.value==childs[i].innerText)
        {
            dangertext.innerText="Already exsists";
            dangertext.classList.remove("d-none");
            return false;
        }
    }
    return true;
}

function activeLi(elem) {
    for (let i = 0; i < elem.parentElement.children.length; i++) {
        elem.parentElement.children[i].classList.remove("active");
    }
    elem.classList.add("active");
}

function delLi(elem)
{
    elem.remove();
}

document.querySelector("body").onkeydown = function(e){
    if (e.key == "ArrowUp") {
        activeLi(document.querySelector("li.active").previousElementSibling);
    }
    if (e.key == "ArrowDown") {
        activeLi(document.querySelector("li.active").nextElementSibling);
    }
    if (e.key == "Delete"){
        next=document.querySelector("li.active").previousElementSibling;
        delLi(document.querySelector("li.active"));
        activeLi(next);
    }
}