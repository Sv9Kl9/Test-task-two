let cardsSecond = document.querySelectorAll('.second');
let cardsFirst = document.querySelectorAll('.first');
let carouselCard =  document.querySelector('.cards');
let cards =document.querySelectorAll('.card');

let step = 0;
let ofset = 0;

function drawOne(){
  let boxOne = document.querySelector('.box-one');
  boxOne = cards[step];
  carouselCard.appendChild(boxOne);
  boxOne.style.left = ofset*1420+ 'px';
  if(step + 1 == cards.length){
    step = 0;
  } else{
    step++;
  }
  // ofset++
}

function drawTwo(){
  let boxTwo = document.querySelector('.box-two');
  boxTwo = cards[step];
  boxTwo.style.left = (ofset+1)*1420+ 'px';
  carouselCard.appendChild(boxTwo);
}

function left(){
  let cards2 = document.querySelectorAll('.card');
  let ofset2=0;
  
  for(let i=0; i<cards2.length; i++){
    cards2[i].setAttribute('style', `left: ${ofset2}*1420-1420+px; transition: left 1s`);
    cards2[i].classList.toggle('second');
    cards2[i].classList.toggle('first');
    ofset2++;
  }
  cards2[0].remove()
  drawOne()
  drawTwo()
}

drawOne()
drawTwo()

let carousel = document.querySelector('.carousel-cards');
carousel.addEventListener('click', left);

// cardsSecond.forEach(card => {
//   card.addEventListener('click',()=>{
//     // carouselCard.classList.add('transform')
//     // card.style.left = ofset*1400 +'px'
//     card.classList.remove('second')
//     card.classList.add('first')
    
//     cardsFirst.forEach(el=>{
//       carouselCard.classList.add('transform')
//       // el.style.left = ofset*1400 +'px'
//       el.classList.remove('first')
//       el.classList.add('second')
      
//     })
  
//   })
// })

