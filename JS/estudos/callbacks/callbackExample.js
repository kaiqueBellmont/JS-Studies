function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
    let name = 'Kaique';
    callback(name);
  }
  
  processUserInput(greeting);