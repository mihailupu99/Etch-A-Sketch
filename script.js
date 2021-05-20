
const container = document.querySelector('#container');



startGame = () => {
for (let i = 0; i < 512; i++){
    const div = document.createElement('div');
    div.classList.add('cell');
    container.appendChild(div);
    
}}
var theInput = document.getElementById('changecolorboard');
// var theColor = theInput.value;



// theInput.addEventListener("input", function(){
//     theColor = theInput.value;});

// startPaint = () => {
//         const containerDivs = document.querySelectorAll('#container > div');
//         containerDivs.forEach((item) => {
//             item.addEventListener('mouseover',
//             (e) => e.target.style.backgroundColor = theColor
//             )})}
        


function paintColor() {
    theInput.addEventListener("input", function(){
        const containerDivs = document.querySelectorAll('#container > div');
        var theColor = theInput.value;
        containerDivs.forEach((item) => {
            item.addEventListener('mouseover',
            (e) => e.target.style.backgroundColor = theColor
            )})})}


function randColor() {
    var letters = '0123456789ABCDEF';
    var color = '#'; 
    for ( let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}
            
var rainbow = document.getElementById('rainbowbord')
rainbow.addEventListener("click", function(){
    const containerDivs = document.querySelectorAll('#container > div');
    containerDivs.forEach((item) => {
        item.addEventListener('mouseover',
        (e) => e.target.style.backgroundColor = randColor()
        )})})

            




function resetBoard() {
    const board = document.querySelectorAll('#container > div');

    board.forEach((item) => {
        item.style.backgroundColor = '#D8D8D8';
        
    });
    
    const eraseButton = document.querySelector('#resetboard');
    eraseButton.addEventListener('click', resetBoard);

}




startGame()
paintColor()
resetBoard()
    
