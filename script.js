
// This script is used to play the intro video and redirect to the next page after the video ends.
// The video is played when the user clicks the "Get Started" button.

document.addEventListener("DOMContentLoaded", function() {
    var getStartedBtn = document.getElementById("getStarted");
    var animationContainer = document.getElementById("animationContainer");
    var introVideo = document.getElementById("introVideo");

    if (!getStartedBtn) {
        console.error("❌ Button with ID 'getStarted' not found!");
        return;
    }

    getStartedBtn.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("✅ Button Clicked!");

        animationContainer.style.display = "flex"; // Show video
        introVideo.play();

        introVideo.onended = function() {
            console.log("✅ Video Ended. Redirecting...");
            window.location.href = "get/get_started.html";
        };
    });
});


// 
window.addEventListener("scroll", function () {
    let footer = document.querySelector(".footer-container");
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        footer.style.display = "block"; // Show footer when scrolled to bottom
    } else {
        footer.style.display = "none"; // Hide footer otherwise
    }
});


