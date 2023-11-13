function sample (button){
        button.remove(button)
}


function logout(element) {
    var text=element.innerText;
    console.log(text)
    if(text == "Log In") {
        element.innerText = "Log Out"
    } else {
        element.innterText = "Log In"
    }
}

// function addone(likes){
//     console.log("in the addone function", likes)
//     likes.innerText = 13 + 1
// }

// var likes=13
