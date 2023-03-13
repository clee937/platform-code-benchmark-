# Platform Code Benchmark Main


## Further developments
 - Write tests using mocha / chai to ensure code works as intended and to make future additions to the code / refactoring easier.
 - Another important aspect is type checking so I would implement with TypeScript to enforce type safety.
 - Improve error handling

### Observations
Code is difficult to read with syntax errors and inconsistencies. Some examples are:  
 - Mixed usage of double/single quotes.
 - Variable name 'City' starts with capital letter.
 - 'response_code' not in camel case.
 - Missing semi-colons.
 - Long variable name 'dayOfTheWeekInStandardEnglishForm' could be shortened for improved readability.
 - Inconsistent accessing of object properties: event.headers['day'] and then event.headers.day.
 - Different ways of preparing the statement to console.log the received inputs.
 - Would consider adding curly braces on the if statements where they've been omitted, for consistency and readability.
 - In the first if statement, we could move the name variable to the beginning and use template literals/variable interpolation to avoid repetition and improve readability.
 - Lots of if statements and repetition of code eg. if (event.headers && event.headers['day']).
 - Missing properties in event object: .queryStringParameters, .headers, .body - variables are not changed from the default values when inputs are received.
 - Code to check and assign the time variable is different to the checks for the name, city, and dayOfTheWeekInStandardEnglishForm variables.
 - No type checking.
 - No error handling.
 - Difficult to test.
 - async, no await.

### What I have done to improve the code
 - I have used functions with descriptive function names to improve readability and clarity of what the code is doing.

 - The first function assigns the inputs based on the contents of the event object. I have stored the inputs inside an object so that a loop can be used to iterate over and update them if they are present in the event object, and remain at their default value if not. I did this to reduce repetition of the if statements and to make future additions to the code easy.

 - I have used try/ catch blocks to assist with error handling.

 - If this were a bigger application I would consider having the functions and variables in a separate file. This would help to keep the code organised and make extending the project easier.

 - I used eslint for formatting and correcting the inconsistencies mentioned above.

- If I were to work on this further, I would look into refactoring the assignInputs function to include Object.keys() so the loop iterates over a resulting array instead of the prototype chain.



