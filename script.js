const questions = [
  {
    question: "Which part of the CPU performs calculations?",
    options: ["Control Unit", "ALU", "Cache", "GPU"],
    answer: 1
  },
  {
    question: "What mainly increases multitasking ability?",
    options: ["Higher temperature", "More cores", "Smaller cache", "Less RAM"],
    answer: 1
  },
  {
    question: "What is an embedded computer?",
    options: [
      "A gaming PC",
      "A system built for one specific task",
      "A laptop",
      "A cloud server"
    ],
    answer: 1
  },
  {
    question: "Why are embedded systems energy efficient?",
    options: [
      "They run every program",
      "They use large GPUs",
      "They are designed for specific tasks",
      "They need desktop operating systems"
    ],
    answer: 2
  }
];

const quizContainer = document.getElementById("quizContainer");

questions.forEach((q, index) => {
  const div = document.createElement("div");
  div.innerHTML = `<p><b>${index + 1}. ${q.question}</b></p>`;
  
  q.options.forEach((option, i) => {
    div.innerHTML += `
      <label>
        <input type="radio" name="q${index}" value="${i}">
        ${option}
      </label><br>
    `;
  });

  quizContainer.appendChild(div);
});

function gradeQuiz() {
  let score = 0;

  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) {
      score++;
    }
  });

  document.getElementById("result").textContent =
    "Your Score: " + score + " / " + questions.length;
}
