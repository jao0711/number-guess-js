// Generates a random number between 1 and 100
var number = Math.floor(Math.random() * 100) + 1;

// Defines the maximum number of attempts
var maxAttempts = 10;

// Initializes the number of attempts
var attempts = 0;

// Asks the user to guess the number
WScript.StdOut.Write("I'm thinking of a number between 1 and 100. Can you guess what it is?\n");
var guess = WScript.StdIn.ReadLine();

// While the user still has attempts
while (attempts < maxAttempts) {
  // Converts the user's guess to an integer
  guess = parseInt(guess);
  
  // If the user's guess is equal to the number
  if (guess === number) {
    // Displays a success message and ends the game
    WScript.Echo("Congratulations! You guessed the number in " + (attempts + 1) + " attempts!");
    break;
  } else if (guess < number) {
    // If the user's guess is lower than the number
    WScript.Echo("The number I'm thinking of is higher than " + guess + ".");
  } else {
    // If the user's guess is higher than the number
    WScript.Echo("The number I'm thinking of is lower than " + guess + ".");
  }
  
  // Increments the number of attempts and asks the user to guess again
  attempts++;
  WScript.StdOut.Write("Guess again. You have " + (maxAttempts - attempts) + " attempts left.\n");
  guess = WScript.StdIn.ReadLine();
}

// If the user uses all the attempts without guessing the number
if (attempts === maxAttempts) {
  // Displays a failure message and the number the user should have guessed
  WScript.Echo("Sorry, you didn't guess the number in " + maxAttempts + " attempts. The number was " + number + ".");
}
