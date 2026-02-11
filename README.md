# Counter App – Bug Fixing Task

## 📌 Project Overview

This project was assigned as a debugging task.  
The objective was to identify issues in the provided HTML, CSS, and JavaScript code, fix them, and properly separate the files.

The focus of this task was:
- Debugging ability
- Identifying syntax and logical errors
- Fixing broken functionality
- Explaining the fixes clearly

---

## 🐞 Bugs Identified and Fixes Applied

### 1️⃣ HTML Issue

#### Problem:
The JavaScript code attempted to access an element using:
```js
document.getElementById("counter")
However, in the HTML file, the paragraph element had:

<p id="count">0</p>
There was no element with id="counter".

Fix:
Updated the JavaScript to correctly reference:

document.getElementById("count")
This resolved the issue where the increase button was not updating the counter value.


2️⃣ CSS Issues
Problem 1:
Missing semicolon after:

align-items: center
Problem 2:
Missing semicolon after:

border: 2px solid black
Why This Was an Issue:
In CSS, missing semicolons can cause the browser to stop reading further properties, leading to layout or styling problems.

Fix:
Added required semicolons:

align-items: center;
border: 2px solid black;
3️⃣ JavaScript Issues
Problem 1:
Incorrect DOM ID reference:

document.getElementById("counter")
Fix:
Corrected to:

document.getElementById("count")
Problem 2:
Inconsistent DOM update methods:

innerText used in one function

innerHTML used in another

Fix:
Standardized both functions to use:

innerText
Problem 3:
Missing semicolon at the end of a JavaScript statement.

Fix:
Added proper semicolons for cleaner and consistent code.

📁 Final File Structure
Counter-App/
│
├── index.html
├── style.css
├── script.js
└── README.md
🎨 Improvements Added (Beyond Bug Fixing)
Improved CSS styling for better UI appearance

Added proper spacing and layout structure

Enhanced button hover effects

Cleaned and organized JavaScript logic

🚀 Final Working Features
Counter increases when "+" button is clicked

Counter decreases when "-" button is clicked

UI updates dynamically without page reload

Code is clean and properly separated

🛠 Technologies Used
HTML5
CSS3
JavaScript