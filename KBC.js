var question_list = ["How many continents are there?",              // pehla question
                 "What is the capital of India?",               // doosra question
                 "NG mei kaun se course padhaya jaata hai?"]    // teesra question

var options_list = [["1.Four", "2.Nine", "3.Seven", "4.Eight"],                              //pehle question ke liye options
                ["1.Chandigarh", "2.Bhopal", "3.Chennai", "4.Delhi"],                    //second question ke liye options
                ["1.Software Engineering", "2.Counseling", "3.Tourism", "4.Agriculture"]]//third question ke liye options

var lifeline_list=[["3.Seven", "4.Eight"],                              //pehle question ke liye options
                ["2.Bhopal", "4.Delhi"],                    //second question ke liye options
                ["1.Software Engineering","4.Agriculture"]]//third question ke liye options
let life_count=0
const input = require("readline-sync")
var solution_list = [3, 4, 1]
for (var i = 0 ; i < question_list.length ; i++){
    console.log(question_list[i])
    for (j of options_list[i]){
        console.log(j)
    }
    if (life_count<1){
        var oinput=input.question("Do you want to use 50-50 lifeline?(yes/no)\n")
        if (oinput=="yes"){
            life_count=life_count+1
            for (x of lifeline_list[i]){
                console.log(x) 
            }
            ainput=input.questionInt("\nEnter the correct option number:\n")
            if (solution_list[i] == ainput){
                console.log("Congratulations!Correct answer.\n")
            }else{
                console.log("Better luck next time:)")
                break
                }
            }
        else{
            ainput=input.questionInt("\nEnter the correct option number:\n")
            if (solution_list[i] == ainput){
                console.log("Congratulations!Correct answer.\n")
            }else{
                console.log("Better luck next time:)")
                break
                }

            }  
        }      
    else{
        ainput=input.questionInt("\nEnter the correct option number:\n")
        if (solution_list[i] == ainput){
            console.log("Congratulations!Correct answer.\n")
        }else{
            console.log("Better luck next time:)")
            break
            }
        }
    }
