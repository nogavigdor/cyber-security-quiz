

//Quiz
//declaring an array of objects which contains the quiz question's details
const questionsStock=[
    {
        picture: false,
        question: "What is Phising?",
        answers: {
            a: "Catching fishes",
            b: "A kind of bird",
            c: "Phishing is a form of fraud in which an attacker masquerades as a reputable entity or person in email or other forms of communication.",
            d: "All of the above"
           

        },
        correctAnswer: "c",
        theAnswer:"Phishing is a form of fraud in which an attacker masquerades as a reputable entity or person in email or other forms of communication.",

      

        moreInfo: "Scammers can attack in a variety of ways. They’re all generally trying to get some sort of personal information out of you, whether it’s your social security number, Medicare information, retirement accounts, email accounts, or credit card information. They often appear as pop-ups and advertisements on websites, and within email campaigns."
    
    },
    {
        picture: false,
        question: "What are the most common signs of a phishing scams?",
        answers: {
            a: "Nice graphics and layout",
            b: "Contains personal information",
            c: "Proper spelling and grammar",
            d: "Unknown sender, sense of urgency, unexpected attachment, or too good to be true"
           

        },
        correctAnswer: "d",
        theAnswer:  "Unknown sender, sense of urgency, unexpected attachment, or too good to be true",
        moreInfo: "Phishing emails often use a sense of urgency to make you click on a link or open an attachment without thinking. Often these emails come from someone you don't know and contain attachments or links that you don't recognize. Remember: If it's too good to be true, it probably is."
    
    },
       {
        picture: false,
        question: "What can happen if you click on a phishing email link or attachment?",
        answers: {
            a: "The email sender could gain access to your computer.",
            b: "The email sender could steal your personal information ",
            c: "The email sender could distribute malware into your computer",
            d: "All of the above"
          

        },
        correctAnswer: "d",
        theAnswer:"All of the above",
        moreInfo: "If you click on a link in a phishing email or open an attachment, the email sender could gain access to your computer, steal information, or distribute malware into your personal computer. Avoid clicking on links or opening attachments unless you know the sender and are sure the email is valid."
    
    },

    {
        picture: false,
        question: "You receive an email from your bank. It says that the personal information in your profile has expired  and asks you to use that link to provide your personal information. What should you do?",
        answers: {
            a: "Reply to the email asking for more information.",
            b: "Click the link because you trust your bank to treat your information confidentially.",
            c: "Click the link and if the website looks trustworthy, provide the needed details",
            d: "Contact your financial institution immediately to report this suspicious activity."
          

        },
        correctAnswer: "d",
        theAnswer:"Contact your financial institution immediately to report this suspicious activity.",
        moreInfo: "Scammers create email messages and websites that are replicas of those of existing, legitimate financial institutions, tricking people into submitting confidential information, including passwords and financial data, with the intent to commit fraud."
    
    },
    
    {
        picture: false,
        question: "Which of the following is an example of a “phishing” attack?",
        answers: {
            a: "Sending someone an email that contains a malicious link that is disguised to look like an email from someone the person knows",
            b: "Creating a fake website that looks nearly identical to a real website in order to trick users into entering their login information",
            c: "Sending someone a text message that contains a malicious link that is disguised to look like a notification that the person has won a contest",
            d: "All of the above"
          

        },
        correctAnswer: "d",
        theAnswer:"All of the above",
        moreInfo: "phishing attacks attempts to get a user to click on a malicious link or file by impersonating a trusted source the user is familiar with. "
    
    },
    
    {
        picture: false,
        question: "You notice an ad That is requesting a monetary donation to help victims of a recent earthquake. You naturally feel for the victims and want to help. What should you do?",
        answers: {
            a: "Send cash immediately.",
            b: "Collect money from all your friends so you can make a real impact.",
            c: "Find out more about the organization that behind the donation request",
            d: "Send the link to all your friends online."
          

        },
        correctAnswer: "c",
        theAnswer:"Find out more about the organization that behind the donation request",
        moreInfo: "Our natural instinct to respond helpfully to a humanitarian crisis provides an excellent opportunity for scammers to take advantage. Be on the lookout for scammers who falsely present themselves as belonging to a humanitarian relief group. Their true goal is to prey on your kindness and to profit from a disaster."
    
    },
    
    {
        picture: false,
        question: "You receive an email and think that this might be a scam.  What  should you do:",
        answers: {
            a: "Delete the message",
            b: "Reply and ask the sender not to send more mail.",
            c: "Click that link inside the message and see where it goes",
            d: "Forward the message to her friends to see if they think it's a scam too."
          

        },
        correctAnswer: "a",
        theAnswer:"Delete the message",
        moreInfo: "If you get an email from a sender claiming to be your grandson or granddaughter and it is written that there’s an emergency and asks you to send money immediately, there’s a good chance this is an imposter trying to steal your money! You should delete this email immediately."
    
    },
    
    {
        picture: false,
        question: "Which is NOT a phishing feature?",
        answers: {
            a: "Sense of urgency",
            b: "Addressed to you",
            c: "Link to a website",
            d: "Generic greeting"
        },

        
        correctAnswer: "c",
        theAnswer:"Addressed to you",

        moreInfo: "Every year, roughly 7 million adults 65 and older fall victim to senior scams, according to data from Comparitech. The best way to avoid losing money or confidential information to a scammer is by learning to recognize the different types of fraud and when you may be the target."
    
    }
  
    
    


];









//prpepares the next questions screen
const nextQuestion=(e)=>{
    
    if(counter<questionsStock.length) {

        questionNumber.classList.remove('hide');
        questionNumber.innerText=`Question ${counter+1}/${questionsStock.length}`;

    //show the "next" button
    next.classList.remove('hide');
    next.classList.add('show-box');
    //remove the "got it" button
    gotIt.classList.add('hide');


    //presenting the question-box div
      answerBox.classList.add('hide');
      answerBox.classList.remove('show-box');
      questionBox.classList.remove('hide');
      questionBox.classList.add('show-box');

                //fills out the quiz form with the current question's details
                allAnswers.forEach(e=>{

                    //clears the checked radio buttons before the next question and optional answers will appear
                    e.checked=false ;
                     
                    
                    //updating the question and the optional answers
                    console.log(counter);
                    //updating the labels text with the current object's optional answers
                    quizQuestion.innerText=questionsStock[counter].question;
                    quizAnswerA.innerText=questionsStock[counter].answers.a;
                    quizAnswerB.innerText=questionsStock[counter].answers.b;
                    quizAnswerC.innerText=questionsStock[counter].answers.c;
                    quizAnswerD.innerText=questionsStock[counter].answers.d;
            
            
                     }
            
                     
                );

  }
      //counter is is greater the number of questions
      else {
        

        answerBox.classList.add('hide');
        answerBox.classList.remove('show-box');
        questionBox.classList.add('hide');
        questionBox.classList.remove('show-box');
        
        showResults();
    
       
      
   
}

}
//declaration

//quiz variables
let counter=0;
let scores=0;


//general constants
const mainContent=document.getElementById('main-content');
const theHeader=document.getElementsByTagName('header');
const headerHeadings=document.getElementById('header-headings');
//quiz constants
const startQuizBtn=document.querySelector("#start-quiz-btn");
const getAnswer=document.getElementById('next');
const quiz=document.querySelector("#quiz");
const quizHeadline=document.getElementById('quiz-headline');
const quizForm=document.getElementById('quiz-form');
const allAnswers=Array.from(document.getElementsByClassName('quiz-radio'));
const quizAnswerA=document.getElementById('answer_a_text');
const quizAnswerB=document.getElementById('answer_b_text');
const quizAnswerC=document.getElementById('answer_c_text');
const quizAnswerD=document.getElementById('answer_d_text');
const quizQuestion=document.getElementById('quiz-question');
const feedback=document.getElementById('feedback');
const moreInfo=document.getElementById('more-info');
const gotIt=document.getElementById('got-it');
const isCorrect=document.getElementById('is-correct');
const isCorrectWrapper=document.getElementById('is-correct-wrapper');
const theCorrectAnswerIs=document.getElementById('the-correct-answer-is');
const theCorrectAnswer=document.getElementById('the-correct-answer');
const questionBox=document.getElementById('question-box');
const answerBox=document.getElementById('answer-box');
const reportBox=document.getElementById('report-box');
const yourScores=document.getElementById('your-scores');
const homePage=document.getElementById('home-page');
const questionNumber=document.getElementById('question-number');
const getResults=document.getElementById('get-results');
const resultsFeedback=document.getElementById('results-feedback');




const showResults=()=>{

    reportBox.classList.remove('hide');
    reportBox.classList.add('show-box');
    gotIt.classList.add('hide');  
    
    console.log(Math.floor(questionsStock.length*80/100));
    
    yourScores.innerText=`You have managed to answer correctly on ${scores} out of ${questionsStock.length}`;
    
   //if the scores above the 80% posibble correct answers
    if (scores>=Math.floor(questionsStock.length*80/100)) {
        resultsFeedback.innerText="Great result! your phishing awarness is high, but it never hurts to learn some more.";
    }
    //if the scores beneath the 80% but above the 50% of possible correct answers
    else if ((scores>Math.floor(questionsStock.length*50/100))&(scores<Math.floor(questionsStock.length*80/100))) {

        resultsFeedback.innerText="Not bad... your phishing awarness is quite good. Try doing the quiz and see if your can improve or checkout the tips section right below.";
        
    //if the scores beneath the 20% of possible correct answers 
    } else {

        resultsFeedback.innerText="Not so good... your phishing awarness is low. Try doing the quiz again or checkout the tips section right below.";

    }

   
}

const startQuiz=()=>{
   
    headerHeadings.classList.add('hide');
    quiz.style.height="500px"
    quizHeadline.style.backgroundColor="blue";
    quizHeadline.style.color="white";
    

 
    quiz.style.backgroundImage="url('img/phishing-blog.jpg')";
    startQuizBtn.classList.add('hide');
    
   
    nextQuestion();


}

const nextAnswer=(e)=>{
    e.preventDefault();
     
    
    if(counter<questionsStock.length) { 

         //remove the "next" button
        next.classList.add('hide');
        //show the "got it" button
        gotIt.classList.remove('hide');
        
        //will used to check if none of the radio buttons was clicked
        var i=0; 
        
        allAnswers.forEach(e=>{
            if (e.checked) {
                    //this variable indicates that an answer was clicked
                    i++
                    if(e.value==questionsStock[counter].correctAnswer) {
                        isCorrect.innerText="Your answer is correct!";
                        isCorrectWrapper.style.backgroundColor="blue";
                        scores++;
                        
                        
                    
                    }
                        
                    else {
                        isCorrect.innerText="Your answer is not correct!";
                        //theCorrectAnswerIs.innerText=questionsStock[counter].correctAnswer;
                        theCorrectAnswer.innerText=`The correct answer is ${questionsStock[counter].correctAnswer}: ${questionsStock[counter].theAnswer}`;
                        isCorrectWrapper.style.backgroundColor="red";

                    
                        
                    }
               }
            }
        ); 
        //if no answer was clicked
        if (i==0) {

            isCorrect.innerText="You didn't click any answer.";
            theCorrectAnswer.innerText=`The correct answer is ${questionsStock[counter].correctAnswer}: ${questionsStock[counter].theAnswer}`;
            isCorrectWrapper.style.backgroundColor="red";

        }

                   
                    moreInfo.innerText=questionsStock[counter].moreInfo;
       

     

    
            
        
        
    }

    counter++;
    
    //presenting the answer-box div
    answerBox.classList.remove('hide');
    answerBox.classList.add('show-box');
    questionBox.classList.add('hide');
    questionBox.classList.remove('show-box');
    
    
     //advancing to the next question
    
}


startQuizBtn.addEventListener('click', startQuiz );
getAnswer.addEventListener('click', nextAnswer);
gotIt.addEventListener('click', nextQuestion)
getResults.addEventListener('click', showResults);


//tips constants
//array of tips
const tipsStock=["Don’t click on any links found within emails or text messages if the original message was not initiated by you.",
                 "Navigate to trusted websites by typing the web address directly into the browser address bar—instead of clicking on a link.",
                 "Verify security certificates of websites by clicking the small padlock icon in the left corner of the browser address bar. Make sure the URL begins with “HTTPS.” An HTTPS connection is protected by a special type of security technology, which means that any information you send through the website is kept private.",
                 "Do not send personal information in email or text messages. Again, this information is not secure, and you can’t be sure who the recipient is.",
                
                 "Don't give cash or financial information if you have any doubts about the legitimacy of a website, organization, or individual asking for money",
                 "Remember that legitimate banks or credit unions will not ask their customers for confidential information through email, text or voicemail",
                 "Never reply to an email that requests your confidential information",
                 "Never wire money to any organization that tells you they need to receive a small fee from you before you receive your winnings.",
                 "Never give out your bank account number or other private information if you’re told you’ve won money or a large-ticket item."

                 ]
const tipsButton=document.getElementById('tips-button');
const tipText=document.getElementById('tip-text');


let current_tip=0;

tipText.innerText=tipsStock[current_tip];
const changeTip=()=>{
    //returns a number between 0 and the number of tips minus one
   /* current_tip=Math.floor(Math.random() * tipsStock.length);*/

   current_tip++;
   if(current_tip<tipsStock.length)  {

    tipText.innerText=tipsStock[current_tip];
    //when we have reached the final tip in the array, the counter_tips should reset
    if (current_tip==tipsStock.length-1)
        current_tip=0;

    }

    
      
    


}

tipsButton.addEventListener('click', changeTip)