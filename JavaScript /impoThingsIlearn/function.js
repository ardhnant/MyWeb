// Normal Functions (Named Functions) 
 function funkyFunction(music, isWhiteBoy) {
  if (isWhiteBoy) {
    console.log('Play: ' +  music);
  }
}

// Calling a function
funkyFunction('that funky music', true);

// This prints "Play: that funky music" in the terminal.




// This example is still an anonymous function even though we used the `function` keyword, as it doesn't have a name.
const funkyFunction = function(music, isWhiteBoy) {
  if (isWhiteBoy) {
    console.log('Play: ' +  music);
  }
}

// This is called an arrow function, we'll get into these soon.
const funkyFunction = (music, isWhiteBoy) => {
  if (isWhiteBoy) {
    console.log('Play: ' +  music);
  }
}

//Each of the above functions can be called exactly the same way:
funkyFunction('that funky music', true);