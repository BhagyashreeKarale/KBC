question_list = ["How many continents are there?",              // pehla question
                 "What is the capital of India?",               // doosra question
                 "NG mei kaun se course padhaya jaata hai?"]    // teesra question

options_list = [["1.Four", "2.Nine", "3.Seven", "4.Eight"],                              //pehle question ke liye options
                ["1.Chandigarh", "2.Bhopal", "3.Chennai", "4.Delhi"],                    //second question ke liye options
                ["1.Software Engineering", "2.Counseling", "3.Tourism", "4.Agriculture"]]//third question ke liye options

lifeline_list=[["3.Seven", "4.Eight"],                              //pehle question ke liye options
                ["2.Bhopal", "4.Delhi"],                    //second question ke liye options
                ["1.Software Engineering","4.Agriculture"]]//third question ke liye options
life_count=0
solution_list = [3, 4, 1]
for i in range(len(question_list)):
    print(question_list[i])
    for j in options_list[i]:
        print(j)
    
    if life_count<1:
        oinput=input("Do you want to use 50-50 lifeline?(yes/no)\n")
        if oinput=="yes":
            life_count=life_count+1
            for x in lifeline_list[i]:
                print(x) 
            
            ainput=int(input("\nEnter the correct option number:\n"))
            if solution_list[i] == ainput:
                print("Congratulations!Correct answer.\n")
            else:
                print("Better luck next time:)")
                break
                
            
        else:
            ainput=int(input("\nEnter the correct option number:\n"))
            if solution_list[i] == ainput:
                print("Congratulations!Correct answer.\n")
            else:
                print("Better luck next time:)")
                break
                       
    else:
        ainput=int(input("\nEnter the correct option number:\n"))
        if solution_list[i] == ainput:
            print("Congratulations!Correct answer.\n")
        else:
            print("Better luck next time:)")
            break
            
