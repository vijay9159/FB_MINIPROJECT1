const Questions = [{
    q: "1.Which states top the country in terms of food-grain production, as per recent data?",
    a: [{ text: "a) Punjab and Uttar Pradesh", isCorrect: false },
    { text: "b) Punjab and Haryana", isCorrect: true },
    { text: "c)  Andhra Pradesh and West Bengal", isCorrect: false },
    { text: "d) Punjab and West Bengal", isCorrect: false }
    ]
},
{
    q: " 2.Who is the founder of Microsoft?",
    a: [{ text: "a) C.V. Raman", isCorrect: false, isSelected: false },
    { text: "b) Steve Henry", isCorrect: false },
    { text: "c) Andrew Wilson", isCorrect: false },
    { text: "d) Bill Gates", isCorrect: true }
    ]
},
{
    q: "3.Who is the founder of Apple?;",
    a: [{ text: "a) Jackson Henry", isCorrect: false },
    { text: "b)  Phil Hughes", isCorrect: false },
    { text: "c) Steve Job", isCorrect: true },
    { text: "d) Simpson    ", isCorrect: false }
    ]
},
{
    q: "4.What is the parent company of Google?",
    a: [{ text: "a)  Microsoft Corporation", isCorrect: false },
    { text: "b)  Alphabet Inc", isCorrect: true },
    { text: "c)  Oracle Corporation", isCorrect: false },
    { text: "d)Google", isCorrect: false }
    ]
},
{
    q: "5.In which decade was the American Institute of Electrical Engineers (AIEE) founded?",
    a: [{ text: "a)  1850s", isCorrect: false },
    { text: "b) 1880s", isCorrect: true },
    { text: "c)1930s", isCorrect: false },
    { text: "d)1950s", isCorrect: false }
    ]
}
]
let currQuestion = 0
let score = 0
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
loadQues();
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}
