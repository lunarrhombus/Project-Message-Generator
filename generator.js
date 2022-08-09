function random_number_index(){
    Number = Math.floor(Math.random() * 100);

    return Number;
}
x = random_number_index();
console.log(x)

tarot_card = {

    card: ['The Fool', 'The Magician', 
    'The High Priestess', 'The Empress', 
    'The Emperor', 'The Hierophant', 
    'The Lovers', 'The Chariot', 
    'Strength', 'The Hermit', 
    'Wheel of Fortune', 'Justice', 
    'The Hanged Man', 'Death', 'Temperance',
    'The Devil', 'The Tower', 'The Star', 
    'The Moon', 'The Sun', 'Judgment', 
    'The World'],

    reader_message: ['This is good!', 'This is bad.'],

    what_to_do: ['Be careful.', 'Buy a lottery ticket.',
    'Can not do anything']
}

function make_for(){
let user_future = [];
for (let prop in tarot_card){

}
}
function output() {

    let result = 'mohamed'
    document.getElementById("stuff").innerHTML = result;
    
}