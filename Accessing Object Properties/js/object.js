var person = {
    name : 'Sarah',
    country : 'US',
    age : 35,
    treehouseStudent : true,
    skills : ['JavaScript', 'HTML', 'CSS']
  };
  
  function print(message) {
    var div = document.getElementById('output');
    output.innerHTML = message;
  }

  var message = '<p>Hello. My name is ' + person.name + '</p>';
  print(message);
