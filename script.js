const cookieBox = document.querySelector('.wrapper');
let Counter = 0;
let TapAmount = 25;
function OnPageLoad() {
    cookieBox.classList.add('show');
}

function Decline() {
    const DeclineTextOptions = ["Oops! Something went wrong. Please try again.", "Error: Unable to process your request. Give it another shot.", "Looks like we hit a snag. Retry, and let's make it work!", "Oh no! The button didn't do its thing. Try pressing it again, please.", "Error 404: Button action not found. Retry for success!", "Houston, we have a problem! Please try hitting that button again.", "Whoopsie daisy! The button didn't cooperate. Try one more time.", "Error: Button malfunction. Try again to make the magic happen.", "Failed to execute. Please press the button once more for success.", "Gremlins in the system! Retry the button press to banish them.", "Oopsie! Our servers got a little shy. Give your request another go.", "Uh-oh! The digital gremlins are at it again. Retry for a smoother experience.", "Error: Request lost in cyberspace. Don't worry, try again for a rescue mission.", "Looks like our code is feeling a bit camera shy. Retry and let's capture success!", "Error 503: Button on vacation. Convince it to come back with another try!", "Whoops-a-daisy! The button took a coffee break. Wake it up with another click.", "Oh no! The button's on strike. Negotiate its return by trying again, please.", "System hiccup! Your request got lost in the digital hiccups. Retry for clarity.", "Error: Button caught stage fright. Encourage an encore with another press.", "Gremlins in the algorithm! Show them who's boss by retrying the button press.", "Houston, we have a glitch! Launch your request again for a smooth touchdown.", "Error 502: Bad gateway to success. Reopen the door with another attempt!", "Oh dear! The button needs a confidence boost. Prove it with a retry, please.", "Looks like our code is playing hide and seek. Seek success by trying again!", "Error: Button on a coffee break. Tempt it back with another sip, I mean click.", "Oops! Our servers went for a walk. Bring them back with another request.", "System got stage fright! Encore, please, to make the performance flawless.", "Error 505: Button rebellion. Convince it to join the cause with a retry!", "Oh snap! The button did a disappearing act. Make it reappear with a retry.", "Gremlins playing hide and seek with your request. Seek success with a retry!"]
    let indexNumber = Math.floor(Math.random() * (DeclineTextOptions.length - 1));
    let CookieText = document.getElementById("CookieText");
    CookieText.innerHTML = DeclineTextOptions[indexNumber];
    Counter++;
    console.log(Counter);

    if (Counter == TapAmount) {
        cookieBox.classList.remove('show');
    }
}

function Accept() {
    cookieBox.classList.remove('show');
}

window.addEventListener("load", OnPageLoad);
