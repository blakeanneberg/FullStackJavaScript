var inStock = [
    'apples', 
    'eggs' , 
    'milk' , 
    'cookies' ,
    'cheese' , 
    'bread',
    'lettace',
    'carrot' ,
    'broccoli' ,
    'pizza' ,
    'potato' ,
    'crackers',
    'onion', 
    'tofu', 
    'frozen dinner',
    'cucumber' 
];
let search;

function print(message) {
    document.write( '<p>' + message + '</p>');
}

while (true) {
    search = prompt("Search for a Prodcut in our store. Type 'list' to show all the produce and 'quit' to exit.");
    search = search.toLowerCase();
    
    if ( search === 'quit' ) {
        break;
    }  else if ( search === 'list'){
        print ( inStock.join(', ')); //join adds a space
    } else {
        if ( inStock.indexOf( search ) > -1 ) { // if item is in array it returns a number greater than 1
            print ('Yes, we have ' + search + ' in the store.');
        } else {
            print( search + ' is not in stock.');
        }
    }
}