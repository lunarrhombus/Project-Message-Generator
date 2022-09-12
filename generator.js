function random_number_index() {

    Number = Math.floor(Math.random() * 22);
    return Number;

}

    card = ['The Fool', 'The Magician', 
    'The High Priestess', 'The Empress', 
    'The Emperor', 'The Hierophant', 
    'The Lovers', 'The Chariot', 
    'Strength', 'The Hermit', 
    'Wheel of Fortune', 'Justice', 
    'The Hanged Man', 'Death', 'Temperance',
    'The Devil', 'The Tower', 'The Star', 
    'The Moon', 'The Sun', 'Judgment', 
    'The World'];
    
    imgarr = ['/Images/0-The-Fool.jpg', '/Images/1-The-Magician.jpg', '/Images/2-The-High-Priestess.jpg', '/Images/3-The-Empress.jpg', '/Images/4-The-Emperor.jpg', '/Images/5-The-Hierophant.jpg', '/Images/6-The-Lovers.jpg', '/Images/7-The-Chariot.jpg', '/Images/8-Strength.jpg' , '/Images/9-The-Hermit.jpg', '/Images/10-The-Wheel-of-Fortune.jpg', '/Images/11-Justice.jpg', '/Images/12-The-Hanged-Man.jpg', '/Images/13-Death.jpg', '/Images/14-Temperance.jpg', '/Images/15-The-Devil.jpg', '/Images/16-The-Tower.jpg', '/Images/17-The-Star.jpg', '/Images/18-The-Moon.jpg', '/Images/19-The-Sun.jpg', '/Images/20-Judgment.jpg', '/Images/21-The-World.jpg']

    discription = [ , , , , , ,]

    leger = [];

function nonrepeat(i){

    num_alpha = random_number_index();
    if (leger.includes(num_alpha) === false){
        leger[i] = num_alpha;
    }
    else {
        nonrepeat(i)
    }
    return num_alpha;
}

count = 0;

function output() {
    
    if (count >= 5 ){
        window.location.reload();
        leger.splice(0,leger.length)
        //setTimeout({},500000)
        count = 0
        return 
    }
    
    console.log(count)
    console.log(leger)
    let result = nonrepeat(count)
    console.log(result)
    document.getElementById("stuff").innerHTML = card[result];

    var img = document.createElement("img"); 
    img.src = imgarr[result]; 
    
    var src = document.getElementById("x"); 
    src.appendChild(img);
    //console.log(img)
    count++;

}