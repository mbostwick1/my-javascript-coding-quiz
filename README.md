# my-javascript-coding-quiz

## Table of Contents

* [Objective](#Objective)
* [Description](#Description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)

 ## Objective
 
 - To build a timed coding quiz with multiple choice questions with a high score page.
 
 ## Description
 
 [GitHub](https://github.com/mbostwick1/my-password-generator)
 
 [Live URL](https://mbostwick1.github.io/my-password-generator/)
 
 - This was the most challenging project to date but also a very rewarding one. 

## Installation
 
 - Created a repo on GitHub and cloned it to my local drive.
 
 - Added provided files (html, css, and js) to my-password-generator folder.
 
 - After looking through all files, I took a stab at adding prompts/confirms to get the user's input. While things did work, there were elements that didn't provide a good user experience. 
 
    LIST of issues:
    * If the user enters anything outside of 8 - 128, the user would get an alert but it would not allow the user to try again. 
    * It would ask the user for input but was not storing the answers. Missing variables. 
    * Working in the wrong function.
    
    Therefore, I realized I needed to do some digging into my notes and hit the google.
    
 - I copy/pasted my previous code attempt to a new file to reference. While it wasn't completely correct, it also was not completely wrong. 
    
 - Inside the generate password function, I first established my variables. 
    
 - I worked on the while loop that prompts the user to choose a number between 8 and 128. I was able to pull from my previous code and add to this while statement, also adding if, if else statements to address the issues before. Not only to look for a number in the set given but to throw alerts when a number is not entered *isNan* or if the user immediately hits cancel *null*. The while loop ensures that even if the user keeps providing the incorrect information, it will continuous ask and throw alerts until the user cancels or provides the correct info.
    
 - The next while loop contained the confirms for lowercase, uppercase, numbers, and special characters. Note for later: This is where I used the wrong variable for the password. Thankfully, I caught it quickly in the end. Keeping up with variable names has been challenging. 
    
 - I added an if/else to confirm the user would select at least 1 character option.
    
 - Lastly, I created the for loop to generate the actual password using the user input provided and replace the return with the generated password function.
    
 - While things appeared to work at first, I was generating **all** characters assigned to the different variables and throwing undefined errors multiple times. This told me that the users input was not being used. While I did mess around with a few other things to test for errors, I discovered I had used the incorrect variable to log the user input. 
    
 - Volia! Generating passwords!
        
 
 ## Usage

![Quiz Demo](x_usage/Demo.gif)

## Credits

[Stack Overflow Forums](https://stackoverflow.com/)
[W3 Schools JS](https://www.w3schools.com/js/)
[MDN web docs](https://developer.mozilla.org/en-US/)
