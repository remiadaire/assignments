console.log("page loaded...");

const video = document.getElementById("video")
console.log(video)

video.pause()

// video.addEventListener("mouseover", function playAction(){
//     video.play()
// })

// video.addEventListener("mouseout", function pauseAction(){
//     video.pause()
// })

function playAction() {
    video.play()
}


function pauseAction() {
    video.pause()
}
