document.addEventListener('DOMContentLoaded',function(){
    
    let quizData=
    {
        sections: [
          {
            sectionTitle: "DSA",
            questions: [
              {
                questionType: "mcq",
                question: "Which data structure uses LIFO (Last In, First Out) principle?",
                options: [
                  "Queue",
                  "Stack",
                  "Linked List",
                  "Tree"
                ],
                answer: "Stack"
              },
              {
                questionType: "mcq",
                question: "Which traversal method is used to traverse a tree in a depth-first manner?",
                options: [
                  "DFS",
                  "BFS",
                  "Inorder",
                  "Preorder"
                ],
                answer: "DFS"
              },
              {
                questionType: "text",
                question: "In which data structure are elements added and removed from the same end?",
                answer: "Stack"
              },
              {
                questionType: "text",
                question: "What is the data structure used for breadth-first traversal of a graph?",
                answer: "Queue"
              },
              {
                questionType: "number",
                question: "What is the time complexity of the binary search algorithm?",
                answer: 1
              },
              {
                questionType: "number",
                question: "How many vertices are there in a complete binary tree with height 4?",
                answer: 15
              },
              {
                questionType: "mcq",
                question: "Which of the following problems can be solved using a dynamic programming approach?",
                options: [
                  "Depth-First Search in a graph",
                  "Binary Search in a sorted array",
                  "Longest Common Subsequence",
                  "Traveling Salesman Problem"
                ],
                answer: "Longest Common Subsequence"
              },
              {
                questionType: "mcq",
                question: "Which sorting algorithm has a time complexity of O(n log n) in the average and worst-case scenarios?",
                options: [
                  "Quick Sort",
                  "Bubble Sort",
                  "Merge Sort",
                  "Insertion Sort"
                ],
                answer: "Merge Sort"
              },
              {
                questionType: "mcq",
                question: "Which data structure organizes data in a hierarchical manner?",
                options: [
                  "Array",
                  "Linked List",
                  "Stack",
                  "Tree"
                ],
                answer: "Tree"
              },
              {
                questionType: "text",
                question: "What is the name of the process used to remove elements from a stack?",
                answer: "Pop"
              },
              {
                questionType: "text",
                question: "What is the term used to describe the process of inserting elements into a queue?",
                answer: "Enqueue"
              },
              {
                questionType: "number",
                question: "What is the maximum number of edges in a complete undirected graph with n vertices?",
                answer: "n(n-1)/2"
              },
              {
                questionType: "number",
                question: "How many leaf nodes are there in a binary tree with 10 vertices?",
                answer: 5
              },
              {
                questionType: "mcq",
                question: "Which algorithm is used to find the shortest path in a weighted graph?",
                options: [
                  "BFS",
                  "DFS",
                  "Dijkstra's",
                  "Bellman-Ford"
                ],
                answer: "Dijkstra's"
              },
              {
                questionType: "mcq",
                question: "Which data structure is suitable for implementing a dictionary with fast search, insert, and delete operations?",
                options: [
                  "Queue",
                  "Hash Table",
                  "Heap",
                  "Binary Search Tree"
                ],
                answer: "Hash Table"
              },
              {
                questionType: "mcq",
                question: "Which algorithm is used to sort elements by repeatedly partitioning the array into two halves?",
                options: [
                  "Bubble Sort",
                  "Quick Sort",
                  "Merge Sort",
                  "Selection Sort"
                ],
                answer: "Quick Sort"
              }
            ]
          },
          {
            sectionTitle: "Web-Dev",
            questions: [
              {
                questionType: "mcq",
                question: "Which language is used for styling web pages?",
                options: [
                  "HTML",
                  "JavaScript",
                  "CSS",
                  "Python"
                ],
                answer: "CSS"
              },
              {
                questionType: "mcq",
                question: "Which of the following tags is used to define a hyperlink in HTML?",
                options: [
                  "<a>",
                  "<link>",
                  "<h1>",
                  "<p>"
                ],
                answer: "<a>"
              },
              {
                questionType: "text",
                question: "What does CSS stand for?",
                answer: "Cascading Style Sheets"
              },
              {
                questionType: "text",
                question: "What is the purpose of the 'alt' attribute in an <img> tag?",
                answer: "Alternative"
              },
              {
                questionType: "number",
                question: "How many heading tags (<h1> to <h6>) are available in HTML?",
                answer: 6
              },
              {
                questionType: "number",
                question: "How many columns are there in a Bootstrap grid system by default?",
                answer: 12
              },
              {
                questionType: "number",
                question: "What is the maximum number of edges in a complete undirected graph with n vertices?",
                answer: "n(n-1)/2"
              }
            ]
          },
          {
            sectionTitle: "SQL",
            questions: [
              {
                questionType: "mcq",
                question: "Which keyword is used to retrieve data from a database in SQL?",
                options: [
                  "SELECT",
                  "FROM",
                  "WHERE",
                  "JOIN"
                ],
                answer: "SELECT"
              },
              {
                questionType: "mcq",
                question: "Which SQL keyword is used to retrieve only unique values?",
                options: [
                  "DISTINCT",
                  "UNIQUE",
                  "SELECT DISTINCT",
                  "ALL"
                ],
                answer: "DISTINCT"
              },
              {
                questionType: "text",
                question: "What does SQL stand for?",
                answer: "Structured Query Language"
              },
              {
                questionType: "text",
                question: "What is the purpose of the 'GROUP BY' clause in SQL?",
                answer: "To group rows that have the same values into summary rows"
              },
              {
                questionType: "number",
                question: "How many primary key columns can a table have in SQL?",
                answer: 1
              },
              {
                questionType: "number",
                question: "What is the maximum number of characters allowed in a VARCHAR column in SQL?",
                answer: 65535
              },
              {
                questionType: "number",
                question: "What is the result of 5 + NULL in SQL?",
                answer: "NULL"
              },
              {
                sectionTitle: "Communication",
                questions: [
                  {
                    questionType: "mcq",
                    question: "Which of the following is an example of non-verbal communication?",
                    options: [
                      "Writing a letter",
                      "Using sign language",
                      "Sending an email",
                      "Making a phone call"
                    ],
                    answer: "Using sign language"
                  },
                  {
                    questionType: "mcq",
                    question: "Which communication skill involves paying attention to both verbal and non-verbal cues?",
                    options: [
                      "Active listening",
                      "Public speaking",
                      "Negotiation",
                      "Conflict resolution"
                    ],
                    answer: "Active listening"
                  },
                  {
                    questionType: "text",
                    question: "What does 'empathy' mean in the context of communication?",
                    answer: "Understanding and sharing the feelings of others"
                  },
                  {
                    questionType: "text",
                    question: "What is the purpose of paraphrasing in communication?",
                    answer: "To restate or rephrase what someone else has said in your own words"
                  },
                  {
                    questionType: "number",
                    question: "On a scale of 1 to 10, how important is body language in effective communication?",
                    answer: 9
                  },
                  {
                    questionType: "number",
                    question: "How many components are there in the communication process model?",
                    answer: 5
                  },
                  {
                    questionType: "number",
                    question: "What is the recommended distance for personal space in most Western cultures?",
                    answer: 18
                  }
                ]
              }
            ]
          },
          {
            sectionTitle: "Communication",
            questions: [
              {
                questionType: "mcq",
                question: "Which keyword is used to retrieve data from a database in SQL?",
                options: [
                  "SELECT",
                  "FROM",
                  "WHERE",
                  "JOIN"
                ],
                answer: "SELECT"
              },
              {
                questionType: "mcq",
                question: "Which SQL keyword is used to retrieve only unique values?",
                options: [
                  "DISTINCT",
                  "UNIQUE",
                  "SELECT DISTINCT",
                  "ALL"
                ],
                answer: "DISTINCT"
              },
              {
                questionType: "text",
                question: "What does SQL stand for?",
                answer: "Structured Query Language"
              },
              {
                questionType: "text",
                question: "What is the purpose of the 'GROUP BY' clause in SQL?",
                answer: "To group rows that have the same values into summary rows"
              },
              {
                questionType: "number",
                question: "How many primary key columns can a table have in SQL?",
                answer: 1
              },
              {
                questionType: "number",
                question: "What is the maximum number of characters allowed in a VARCHAR column in SQL?",
                answer: 65535
              },
              {
                questionType: "number",
                question: "What is the result of 5 + NULL in SQL?",
                answer: "NULL"
              }
            ]
          }
        ]
      } ;
      initSections();   
    function initSections(){
        let sections=document.querySelectorAll('.card');
        sections.forEach((section)=>{
            section.addEventListener('click',()=>{
                let sectionNumber=parseInt(section.getAttribute("data-section"));
                startQuiz(sectionNumber);
            })
        })
    }
    function startQuiz(index){
        let bodystyle=document.getElementById("bg");
        bodystyle.style.background="url(/img/test_start.jpg)";
        let currentQuestions=quizData.sections[index].questions;
        let currentQuestionIndex=0;
        let score=0;
        let answerSelected=false;
        document.getElementById("quiz-container").style.display="none";
        document.getElementById("question-container").style.display="block";
        document.getElementById("question-container").innerHTML=`
        <div  id="score">
            <p >score: 0</p>
        </div>
        <div id="question"></div>
        <div id="options"></div>
        <button class="btn btn-primary" id="next-button">Next </button>
        `;
        
        showQuestions();
        function showQuestions(){
            const questionobj=currentQuestions[currentQuestionIndex];
            const questionElement=document.getElementById('question');
            const optionsElement=document.getElementById('options');
            questionElement.textContent=questionobj.question;
            optionsElement.innerHTML='';

            if(questionobj.questionType==='mcq'){
                questionobj.options.forEach((option)=>{
                    const optionElement=document.createElement('div');
                    optionElement.textContent=option;
                    optionElement.addEventListener('click',function (){
                        if(!answerSelected){
                            answerSelected=true;
                            optionElement.classList.add("selected");
                            checkAnswer(option,questionobj.answer);
                            console.log("sel",option);
                        }
                        
                    });
                    optionsElement.appendChild(optionElement);
                })
                

            }
            else{
                const inputElement=document.createElement('input');
                inputElement.type=questionobj.questionType ==='number'? 'number':'text';
                const submitButton=document.createElement('button');
                submitButton.className='btn btn-secondary';
                submitButton.textContent="Submit";
                submitButton.onclick=()=>{
                    if(!answerSelected){
                        answerSelected=true;
                        checkAnswer(inputElement.value.toString(),questionobj.answer.toString());
                    }
                };
                optionsElement.appendChild(inputElement);
                optionsElement.appendChild(submitButton);

            }
            function checkAnswer(givenAnswer,correctAnswer){
                const feedbackElement=document.createElement('div');
                feedbackElement.id='feedback';
                if(givenAnswer==correctAnswer ||givenAnswer.toLowerCase()==correctAnswer.toLowerCase() ){
                    score++;
                    feedbackElement.textContent='correct';
                    feedbackElement.style.color='green';
                }
                else{
                    feedbackElement.textContent=`Wrong Answered. Correct option is ${correctAnswer}`;
                    feedbackElement.style.color='red';
                }
                const optionsElement=document.getElementById('options');
                optionsElement.appendChild(feedbackElement);
                updateScore(score);
            }
            function updateScore(score){
                document.getElementById("score").textContent=`Score: ${score}`;
            }
        }
        

        function endtest(){
            let questionContainer=document.getElementById('question-container');
            let quizContainer=document.getElementById('quiz-container');
            let body=document.querySelector("body");
            questionContainer.innerHTML=`
            <h1 style="color:black;">Quiz Completed!!!💫</h1>
            <p  style="color:red">Your Final Score: ${score}/${currentQuestions.length}</p>
            <button id="homebtn" class="btn btn-primary">Go To Home</button>`;
            
            document.getElementById('homebtn').addEventListener('click', function(){
                let bodystyle=document.getElementById("bg");
                questionContainer.style.display='none';
                quizContainer.style.display="flex";
                bodystyle.style.background="url(./img/test_yourself.jpg)";
                
            });
        }
        document.getElementById("next-button").addEventListener("click",()=>{
            if(currentQuestionIndex==currentQuestions.length-1){
              
               endtest();
            }
            else{
                answerSelected=false;
                currentQuestionIndex++;
                showQuestions();
            }
        })
    }
});