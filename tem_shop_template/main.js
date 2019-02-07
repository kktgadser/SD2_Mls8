/*
    1.
    Create 3 variables acts as querySelector. Name them
    'img', 'message', and 'total_text'. They points on 
    specific components in the HTML
    img         -> img.image-item
    message     -> h2.message
    total_text  -> h2.total_price

    Hint: let var-name to document's querySelector(component-name)
*/


/*
    2.
    Create variables that stores the price of each goods.
    Below is the list of the price if each goods;
    butterscotch    -> 50
    hotdog          -> 30
    rockcandy       -> 5
    spiderdonut     -> 7
    temmieflakes    -> 20

    Hint: let butterscotch equals to 50
*/


/*
    3.
    Create a variable that stores the total of the purchase. 
    Initially, set them to 0, then create a variable that stores
    the currently picked item. Initially, set them to '', for
    there are no items are currently picked.
    total           -> 0
    current_picked  -> ''

    Hint: let current_picked to ''
*/


/*
    4.
    In each functions, please do the following;
    - set 'img' source to 'assets/[item-name].png'.
      change [item-name] to the item's name
    - set 'message' text content to the description
      text provided on the test page
    - set 'current_picked' to the name of the item

*/

function butterscotchPie(){
    
}

function hotDog(){
    
}

function rockCandy(){
    
}

function spiderDonut(){
    
}

function temmieFlakes(){
    
}

/*
    5.
    On the 'buy' function, do the followings;
    - set 'message' text content to the 'buy' message
      provided on the test page
    - set 'total' to 0
    - set 'total_text' to 'Total: ' + total
*/

function buy(){
    
}

/*
    On the 'pick' function, do the followings,
    If the currently picked item is ...;
    - change 'total' to the variable which contains the
      price of the item
    - set 'message' text content to 'You picked ...', which
      is the name of the item

    Hint: total is equals to total plus price
*/

function pick(){
    if (current_picked == 'butterscotch') {
        
    }
    else if (current_picked == 'hotdog'){
        
    }
    else if (current_picked == 'rockcandy'){
        
    }
    else if (current_picked == 'spiderdonut'){
        
    }
    else if (current_picked == 'temmieflakes'){
        
    }
    total_text.textContent = 'Total: ' + total;
}