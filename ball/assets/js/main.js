ballw = document.getElementById("ballw");
ballh = document.getElementById("ballh");
ball = document.getElementById("ball");

boxw = document.getElementById("boxw");
boxh = document.getElementById("boxh");
box = document.getElementById("box");


step = document.getElementById("step");

dangertext = document.getElementById("dangertext");

updVal();
step.value = 1;

//#region upd
function updErr() {
    dangertext.innerText = `ball top:${ball.style.top} | ball left:${ball.style.left}`;
}

function updVal() {
    ballw.value = parseFloat(ball.style.width);
    ballh.value = parseFloat(ball.style.height);

    boxw.value = parseFloat(box.style.width);
    boxh.value = parseFloat(box.style.height);
}

function resetBallPos()
{
    ball.style.top = "0px";
    ball.style.left = "0px";
    updErr();
}
//#endregion

//#region ball
ballw.addEventListener('blur', () => {
    if (Number( ballw.value) > 0)
        if (Number( ballw.value) < Number( boxw.value)) {
            ball.style.width = ballw.value+"px";
            resetBallPos();
            return true;
        }
        else {
            alert("ball-w Must be less than box-w:" + boxw.value);
            updVal();
            return false;
        }
    alert("ball-w Must be greater than 0");
    updVal();
    return false;
});

ballh.addEventListener('blur', () => {
    if (Number( ballh.value) > 0)
        if (Number(ballh.value) < Number(boxh.value)){
            ball.style.height = ballh.value+"px";
            resetBallPos();
            return true;
        }
        else {
            alert("ball-h Must be less than box-h:" + boxh.value);
            updVal();
            return false;
        }
    alert("ball-h Must be greater than 0");
    updVal();
    return false;
});
//#endregion

step.addEventListener('blur', () => {
    if (Number(step.value) > 0)
        if (Number(step.value) < Number(boxw.value))
            if (Number(step.value) < Number(boxh.value))
                return true;
            else {
                alert("Step cant be greater than box-h" + boxh.value);
                return false;
            }
        else {
            alert("Step cant be greater than box-w" + boxw.value);
            return false;
        }
    alert("step must be greater than 0");
    return false;
})

//#region box
boxw.addEventListener('blur', () => {
    if (Number(boxw.value) > 0)
        if (Number(boxw.value) > Number(ballw.value)){
            box.style.width=boxw.value+"px";
            resetBallPos();
            return true;
        }
        else {
            alert("box-w Must be greater than ball-w:" + ballw.value);
            updVal();
            return false;
        }
    alert("box-w Must be greater than 0");
    updVal();
    return false;
});

boxh.addEventListener('blur', () => {
    if (Number(boxh.value) > 0)
        if (Number(boxh.value) > Number(ballh.value)){
            box.style.height=boxh.value+"px";
            resetBallPos();
            return true;
        }
        else {
            alert("box-h Must be greater than ball-h:" + ballh.value);
            updVal();
            return false;
        }
    alert("box-h  Must be greater than 0");
    updVal();
    return false;
});
//#endregion

//#region movement

document.getElementById("btnlu").addEventListener('click', () => {

    if (checkDistanceLeft(-(parseFloat(ball.style.left) - step.value)) && checkDistanceTop(-(parseFloat(ball.style.top) - step.value))) {
        ball.style.top = parseFloat(ball.style.top) - step.value + "px";
        ball.style.left = parseFloat(ball.style.left) - step.value + "px";
        updErr();
    }
})
document.getElementById("btnu").addEventListener('click', () => {
    if (checkDistanceTop(-(parseFloat(ball.style.top) - step.value))) {
        ball.style.top = parseFloat(ball.style.top) - step.value + "px";
        updErr();
    }
})
document.getElementById("btnru").addEventListener('click', () => {
    if (checkDistanceLeft(parseFloat(ball.style.left) + Number(step.value)) && checkDistanceTop(-(parseFloat(ball.style.top) - step.value))) {
        ball.style.top = parseFloat(ball.style.top) - step.value + "px";
        ball.style.left = parseFloat(ball.style.left) + Number(step.value) + "px";
        updErr();
    }
})



document.getElementById("btnl").addEventListener('click', () => {
    if (checkDistanceLeft(-(parseFloat(ball.style.left) - step.value))) {
        ball.style.left = parseFloat(ball.style.left) - step.value + "px";
        updErr();
    }
})
document.getElementById("btnc").addEventListener('click',()=> resetBallPos())
document.getElementById("btnr").addEventListener('click', () => {
    if (checkDistanceLeft(parseFloat(ball.style.left) + Number(step.value)))
        ball.style.left = parseFloat(ball.style.left) + Number(step.value) + "px";
    updErr();
})



document.getElementById("btnld").addEventListener('click', () => {
    if (checkDistanceLeft(-(parseFloat(ball.style.left) - step.value)) && checkDistanceTop(parseFloat(ball.style.top) + Number(step.value))) {
        ball.style.top = parseFloat(ball.style.top) + Number(step.value) + "px";
        ball.style.left = parseFloat(ball.style.left) - step.value + "px";
        updErr();
    }
})
document.getElementById("btnd").addEventListener('click', () => {
    if (checkDistanceTop(parseFloat(ball.style.top) + Number(step.value))) {
        ball.style.top = parseFloat(ball.style.top) + Number(step.value) + "px";
        updErr();
    }
})
document.getElementById("btnrd").addEventListener('click', () => {
    if (checkDistanceLeft(parseFloat(ball.style.left) + Number(step.value)) && checkDistanceTop(parseFloat(ball.style.top) + Number(step.value))) {
        ball.style.top = parseFloat(ball.style.top) + Number(step.value) + "px";
        ball.style.left = parseFloat(ball.style.left) + Number(step.value) + "px";
        updErr();
    }
})

//#endregion



function checkDistanceLeft(val) {
    if (parseFloat(box.style.width) / 2 - parseFloat(ball.style.width) / 2 >= val) return true;
    return false;
}

function checkDistanceTop(val) {
    if (parseFloat(box.style.height) / 2 - parseFloat(ball.style.height) / 2 >= val) return true;
    return false;
}



document.querySelector("body").onkeydown = function(e){
    if (e.key == "ArrowUp") {
        if (checkDistanceTop(-(parseFloat(ball.style.top) - step.value))) {
            ball.style.top = parseFloat(ball.style.top) - step.value + "px";
            updErr();
        }
    }
    if (e.key == "ArrowDown") {
        if (checkDistanceTop(parseFloat(ball.style.top) + Number(step.value))) {
            ball.style.top = parseFloat(ball.style.top) + Number(step.value) + "px";
            updErr();
        }
    }
    if (e.key == "ArrowLeft"){
        if (checkDistanceLeft(-(parseFloat(ball.style.left) - step.value))) {
            ball.style.left = parseFloat(ball.style.left) - step.value + "px";
            updErr();
        }
    }
    if (e.key == "ArrowRight"){
        if (checkDistanceLeft(parseFloat(ball.style.left) + Number(step.value)))
        ball.style.left = parseFloat(ball.style.left) + Number(step.value) + "px";
    updErr();
    }
}