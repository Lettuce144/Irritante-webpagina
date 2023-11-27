// Cookie Start

const cookieBox = document.querySelector(".wrapper");
let Counter = 0;
let TapAmount = 25;

function OnPageLoad() {
  cookieBox.classList.add("show");
}

function Decline() {
  var error = document.getElementById("error");
  error.play();
  const DeclineTextOptions = [
    "Oops! Something went wrong. Please try again.",
    "Error: Unable to process your request. Give it another shot.",
    "Looks like we hit a snag. Retry, and let's make it work!",
    "Oh no! The button didn't do its thing. Try pressing it again, please.",
    "Error 404: Button action not found. Retry for success!",
    "Houston, we have a problem! Please try hitting that button again.",
    "Whoopsie daisy! The button didn't cooperate. Try one more time.",
    "Error: Button malfunction. Try again to make the magic happen.",
    "Failed to execute. Please press the button once more for success.",
    "Gremlins in the system! Retry the button press to banish them.",
    "Oopsie! Our servers got a little shy. Give your request another go.",
    "Uh-oh! The digital gremlins are at it again. Retry for a smoother experience.",
    "Error: Request lost in cyberspace. Don't worry, try again for a rescue mission.",
    "Looks like our code is feeling a bit camera shy. Retry and let's capture success!",
    "Error 503: Button on vacation. Convince it to come back with another try!",
    "Whoops-a-daisy! The button took a coffee break. Wake it up with another click.",
    "Oh no! The button's on strike. Negotiate its return by trying again, please.",
    "System hiccup! Your request got lost in the digital hiccups. Retry for clarity.",
    "Error: Button caught stage fright. Encourage an encore with another press.",
    "Gremlins in the algorithm! Show them who's boss by retrying the button press.",
    "Houston, we have a glitch! Launch your request again for a smooth touchdown.",
    "Error 502: Bad gateway to success. Reopen the door with another attempt!",
    "Oh dear! The button needs a confidence boost. Prove it with a retry, please.",
    "Looks like our code is playing hide and seek. Seek success by trying again!",
    "Error: Button on a coffee break. Tempt it back with another sip, I mean click.",
    "Oops! Our servers went for a walk. Bring them back with another request.",
    "System got stage fright! Encore, please, to make the performance flawless.",
    "Error 505: Button rebellion. Convince it to join the cause with a retry!",
    "Oh snap! The button did a disappearing act. Make it reappear with a retry.",
    "Gremlins playing hide and seek with your request. Seek success with a retry!",
  ];
  let indexNumber = Math.floor(Math.random() * (DeclineTextOptions.length - 1));
  let CookieText = document.getElementById("CookieText");
  CookieText.innerHTML = DeclineTextOptions[indexNumber];
  Counter++;
  console.log(Counter);

  if (Counter == TapAmount) {
    document.getElementsByClassName("wrapper")[0].style.display = "none";
  }
}

function Accept() {
  document.getElementsByClassName("wrapper")[0].style.display = "none";
  console.log("Accept");
  document.cookie =
    "cookieBy= Jens Zeef en Micha Koster; max-age= " + 60 * 60 * 24 * 30;
}

// Cookie End
// Adblock Start
function adBlockCheck() {
  setTimeout(function () {
    const testAd = document.getElementById("test-ad");
    const testAdStyle = getComputedStyle(testAd);

    if (testAdStyle.display === "none") {
      console.log("Adblock detected");
      document.getElementById("adblock").classList.add("show");
    } else {
      console.log("Adblock not detected");
    }
  }, 1000);
}

adBlockCheck();

// Adblock End
// News Start

function addNewsPopup() {
  const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FF4500",
    "#8A2BE2",
    "#A52A2A",
    "#DAA520",
    "#2F4F4F",
    "#4B0082",
    "#556B2F",
    "#800000",
    "#800080",
    "#808000",
    "#008080",
    "#FFD700",
    "#008000",
    "#7CFC00",
    "#DC143C",
    "#20B2AA",
    "#FF6347",
    "#00FA9A",
    "#FF1493",
    "#8B0000",
    "#00CED1",
    "#9400D3",
    "#32CD32",
    "#FF8C00",
    "#483D8B",
    "#2E8B57",
    "#B22222",
    "#4682B4",
    "#B8860B",
    "#556B2F",
    "#696969",
    "#8B4513",
    "#191970",
    "#00BFFF",
    "#8B008B",
    "#FF69B4",
    "#CD5C5C",
    "#808080",
    "#FFDAB9",
    "#F0E68C",
    "#7B68EE",
    "#00FF7F",
    "#B0E0E6",
    "#8B4513",
  ];
  let randomIndex = Math.round(Math.random() * (colors.length - 1));
  let randomColor = colors[randomIndex];
  document.body.innerHTML +=
    '<div class="news" style="bottom:' +
    getRandomInt(1, window.innerHeight) +
    "px; left:" +
    getRandomInt(1, window.innerWidth) +
    "px;background-color:" +
    randomColor +
    ';"><h1>Subscribe to our Newsletter!</h1><input type="email"><button>Send!</button><button onclick="this.parentElement.style.display = `none`;">Decline</button></div>';
}

function generateNewsPopups(amount) {
  for (let i = 0; i <= amount; i++) {
    addNewsPopup();
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CloseAllNewsPopups() {
  let NewsPopUps = document.getElementsByClassName("news");
  console.log(NewsPopUps.length);
  for (var i = 0; i < NewsPopUps.length; i++) {
    NewsPopUps[i].style.display = "none";
  }
}

document.addEventListener("keypress", function (event) {
  if (event.key == "q") {
    CloseAllNewsPopups();
  }
});

// News End

generateNewsPopups(20);

// Jens:

// Select the element
let element = document.getElementsByClassName("download");

// Initialize move variable
let moveX = 0;
let moveY = 0;

for (let index = 0; index < element.length; index++) {
  element[index].addEventListener("mouseover", function () {
    moveX += Math.floor(Math.random() * 200);
    moveY += Math.floor(Math.random() * 200);
    this.classList.add("hovered");
    this.style.transform = `translateX(${moveX}px) translateY(-${moveY}px)`;
  });

  element[index].addEventListener("transitionend", function () {
    if (!isInViewport(this)) {
      moveX = 0;
      moveY = 0;
      this.style.transform = `translateX(${moveX}px) translateY(-${moveY}px)`;
    }
  });

  element[index].addEventListener("mouseout", function () {
    if (!isInViewport(this)) {
      moveX = 0;
      moveY = 0;
      this.style.transform = `translateX(${moveX}px) translateY(-${moveY}px)`;
    }
  });
}

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}
