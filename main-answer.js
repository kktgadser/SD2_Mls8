/*
    Create 3 variables acts as querySelector. Name them
    'img', 'message', and 'total_text'. They points on 
    specific components in the HTML
    img         -> img.image-item
    message     -> h2.message
    total_text  -> h2.total_price
*/

let img = document.querySelector('img.image-item');
let message = document.querySelector('h2.message');
let total_text = document.querySelector('h2.total-price');

/*
    Create variables that stores the price of each goods.
    Below is the list of the price if each goods;
    butterscotch    -> 50
    hotdog          -> 30
    rockcandy       -> 5
    spiderdonut     -> 7
    temmieflakes    -> 20
*/

let butterscotch = 50;
let hotdog = 30;
let rockcandy = 5;
let spiderdonut = 7;
let temmieflakes = 20;

/*
    Create a variable that stores the total of the purchase. 
    Initially, set them to 0, then create a variable that stores
    the currently picked item. Initially, set them to '', for
    there are no items are currently picked.
    total           -> 0
    current_picked  -> ''
*/

let total = 0;
let current_picked = '';

/*
    In each functions, please do the following;
    - set 'img' source to 'assets/[item-name].png'.
      change [item-name] to the item's name
    - set 'message' text content to the description
      text provided on the test page
    - set 'current_picked' to the name of the item
*/

function butterscotchPie(){
    img.src = 'assets/butterscotch-pie.png';
    message.textContent = 'Butterscotch-cinnamon pie, one slice.';
    current_picked = 'butterscotch';
}

function hotDog(){
    img.src = 'assets/hot-dog.png';
    message.textContent = 'The meat is made of something called a water sausage.';
    current_picked = 'hotdog';
}

function rockCandy(){
    img.src = 'assets/rock-candy.png';
    message.textContent = 'Here is a recipe to make this at home: 1. Find a rock';
    current_picked = 'rockcandy';
}

function spiderDonut(){
    img.src = 'assets/spider-donut.png';
    message.textContent = 'A donut made with Spider Cider in the batter.'
    current_picked = 'spiderdonut';
}

function temmieFlakes(){
    img.src = 'assets/temmie-flakes.png';
    message.textContent = 'Its just torn up pieces of construction paper.';
    current_picked = 'temmieflakes';
}

/*
    On the 'buy' function, do the followings;
    - set 'message' text content to the 'buy' message
      provided on the test page
    - set 'total' to 0
    - set 'total_text' to 'Total: ' + total
*/

function buy(){
    message.textContent = 'Thank you for shopping at Temmie Shop! Please come again';
    total = 0;
    total_text.textContent = 'Total: ' + total;
}

/*
    On the 'pick' function, do the followings,
    If the currently picked item is ...;
    - change 'total' to the variable which contains the
      price of the item
    - set 'message' text content to 'You picked ...', which
      is the name of the item
*/

function pick(){
    if (current_picked == 'butterscotch') {
        total += 3;
        message.textContent = 'You picked Butterscotch Pie!';
    }
    else if (current_picked == 'hotdog'){
        total += 3;
        message.textContent = 'You picked Hot Dog!';
    }
    else if (current_picked == 'rockcandy'){
        total += 3;
        message.textContent = 'You picked Rock Candy!';
    }
    else if (current_picked == 'spiderdonut'){
        total += 3;
        message.textContent = 'You picked Spider Donut!';
    }
    else if (current_picked == 'temmieflakes'){
        total += 3;
        message.textContent = 'You picked Temmie Flakes!';
    }
    total_text.textContent = 'Total: ' + total;
}