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
    const colors = ["1a3e5f"
    ,"b72d4e"
    ,"8f6c23"
    ,"d94a87"
    ,"5071a9"
    ,"e5b8cf"
    ,"3f9e42"
    ,"a67d29"
    ,"6c2f8b"
    ,"f15e2c"
    ,"9d1b4f"
    ,"72c8e0"
    ,"4f7e61"
    ,"c36a2f"
    ,"5b349d"
    ,"a8cf57"
    ,"217685"
    ,"e3486b"
    ,"8b5693"
    ,"d21f7c"
    ,"654a8e"
    ,"c9a24f"
    ,"3e854d"
    ,"b16f98"
    ,"7c4521"
    ,"f39a6d"
    ,"4d2c5f"
    ,"a31e3b"
    ,"628fbc"
    ,"e07532"
    ,"9c5d81"
    ,"52ab67"
    ,"dc3f9e"
    ,"876214"
    ,"ba87cf"
    ,"31546a"
    ,"e2b549"
    ,"5f3d72"
    ,"9a8e54"
    ,"4586b3"
    ,"f7642a"
    ,"6d198b"
    ,"aef5c7"
    ,"397ab8"
    ,"c1582f"
    ,"73496c"
    ,"e97c45"
    ,"62438f"
    ,"b1d364"
    ,"2c5e71"]
    let randomIndex = Math.round(Math.random() * (colors.length - 1))
    let randomColor = colors[randomIndex]
    document.body.innerHTML += '<div class="news" style="bottom:' + getRandomInt(1, window.innerHeight) + 'px; left:' + getRandomInt(1, window.innerWidth) + 'px;background-color:#'+ randomColor +';"><h1>Subscribe to our Newsletter!</h1><input type="email"><button>Send!</button><button onclick="this.parentElement.style.display = `none`;">Decline</button></div>'
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
    if (event.key == "q" ) {
        CloseAllNewsPopups();
    }
});

// News End

generateNewsPopups(20)

// Select the element
let element = document.getElementsByClassName("download");

// Initialize move variable
let moveX = 0;
let moveY = 0;

for (let index = 0; index < element.length; index++) {
  // Add an event listener for the mouseover event
  element[index].addEventListener("mouseover", function () {
    // Increment move
    moveX += Math.floor(Math.random() * 200);
    moveY += Math.floor(Math.random() * 200);
    console.log(moveX, moveY);

    // Add the .hovered class to the element
    this.classList.add("hovered");

    // Apply the transformation
    this.style.transform = `translateX(${moveX}px) translateY(-${moveY}px)`;
  });

  element[index].addEventListener("transitionend", function () {
    // Check if the element is out of bounds
    if (!isInViewport(element)) {
      // Subtract the overflow from the move variable
      moveX = 0;
      moveY = 0;

      // Apply the transformation to move the element back
      this.style.transform = `translateX(${moveX}px) translateY(-${moveY}px)`;
    }
  });

  element[index].addEventListener("mouseout", function () {
    if (!isInViewport(element)) {
      // Subtract the overflow from the move variable
      moveX = 0;
      moveY = 0;

      // Apply the transformation to move the element back
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
