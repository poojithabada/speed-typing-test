let speedTypingTest = document.getElementById("speedTypingTest");
let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let quoteInput = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");
let counter = 0;
let intervalID = setInterval(function() {
    timer.textContent = counter + " seconds";
    counter += 1;
}, 1000);
submitBtn.onclick = function() {
    if (quoteDisplay.textContent === quoteInput.value) {
        result.textContent = "You typed in " + counter + " seconds";
    } else if (quoteDisplay.textContent !== quoteInput.value) {
        result.textContent = "You typed Incorrect Sentence";
    } else {
        result.textContent = "";
    }
};

function quotedisplay() {
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };
    spinner.classList.remove("d-none");
    speedTypingTest.classList.add("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none");
            speedTypingTest.classList.remove("d-none");
            quoteDisplay.textContent = jsonData.content;
        });
}
quotedisplay();
resetBtn.onclick = function() {
    quotedisplay();
    clearInterval(intervalID);
    counter = 0;
    intervalID = setInterval(function() {
        timer.textContent = counter + " seconds";
        counter += 1;
    }, 1000);
};