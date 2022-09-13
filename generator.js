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
    
    imgarr = ['/Images/0-The-Fool.JPG', '/Images/1-The-Magician.JPG', '/Images/2-The-High-Priestess.JPG', '/Images/3-The-Empress.JPG', '/Images/4-The-Emperor.JPG', '/Images/5-The-Hierophant.JPG', '/Images/6-The-Lovers.JPG', '/Images/7-The-Chariot.JPG', '/Images/8-Strength.JPG' , '/Images/9-The-Hermit.JPG', '/Images/10-The-Wheel-of-Fortune.JPG', '/Images/11-Justice.JPG', '/Images/12-The-Hanged-Man.JPG', '/Images/13-Death.JPG', '/Images/14-Temperance.JPG', '/Images/15-The-Devil.JPG', '/Images/16-The-Tower.JPG', '/Images/17-The-Star.JPG', '/Images/18-The-Moon.JPG', '/Images/19-The-Sun.JPG', '/Images/20-Judgment.JPG', '/Images/21-The-World.JPG']


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