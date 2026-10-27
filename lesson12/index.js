let array = [
  {
    id: 1,
    title: "BESTSELLER",
    image: "./img/image copy 7.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    price: 100,
  },
  {
    id: 2,
    title: "BESTSELLER",
    image: "./img/image copy 7.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    price: 100,
  },
  {
    id: 3,
    title: "BESTSELLER",
    image: "./img/image copy 7.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    price: 100,
  },
  {
    id: 4,
    title: "BESTSELLER",
    image: "./img/image copy 7.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    price: 100,
  },
];

let products = document.querySelector(".products");
let show = array.map((item) => {
  return `
<div class="cart">
      <img src="./img/image copy 7.png" alt="">
      <h3>BESTSELLER</h3>
      <p>Trendy models of our experts, for the love of your life selected</p>
      <button onclick="addcart(${item.id})">Discover now</button>
    </div>
    `;
});
products.innerHTML = show.join("");

// ----------------

const container = document.getElementById("container");
const raings = [
  {
    id: 1,
    name: "123GOLD",
    img: "./img/image copy 8.png",
    description: "Gold 585 | 0,100 ct. | tw, si",
  },
  {
    id: 2,
    name: "123GOLD",
    img: "./img/image copy 8.png",
    description: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
  },
  {
    id: 3,
    name: "123GOLD",
    img: "./img/image copy 9.png",
    description: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
  },
  {
    id: 4,
    name: "123GOLD",
    img: "./img/image copy 9.png",
    description: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
  },
  {
    id: 5,
    name: "123GOLD",
    img: "./img/image copy 8.png",
    description: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
  },
  {
    id: 6,
    name: "123GOLD",
    img: "./img/image copy 8.png",
    description: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
  },
  {
    id: 7,
    name: "123GOLD",
    img: "./img/image copy 8.png",
    description: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
  },
  {
    id: 8,
    name: "123GOLD",
    img: "./img/image copy 8.png",
    description: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
  },
  {
    id: 9,
    name: "123GOLD",
    img: "./img/image copy 9.png",
    description: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
  },
  {
    id: 10,
    name: "123GOLD",
    img: "./img/image copy 8.png",
    description: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
  },
];

const cards = raings.map((item) => {
  return `
    <div class="Gold">
      <div class="img1">
        <img src="${item.img}" alt="">
        <H1>${item.name}</H1>
        <p>${item.description}</p>
      </div>
    </div>`;
});
container.innerHTML = cards.join("");

// ---------------------------------------

let openbtn = document.getElementById('open')
let modal = document.querySelector(".modal")
openbtn.onclick= function(){
  modal.style.display = 'block'
}


// --------------------------------------------------------
let basket = []
function  addcart(id){
  let findproduct = array.find((item) => item.id === id) 
  if(findproduct) {
    basket.push(findproduct)
  }

  Counter()
  showcart()
}

// -------------------------------------------------------------
let count = document.querySelector('.count')

function Counter(){
  count.innerHTML = basket.length
}
let modalcart = document.querySelector('.modal-main')
function showcart(){
  let cart = basket.map((item) => {
   result `

                  <div class="mcart">
                  <img src="${item.image}" alt="">
                  <div>
                    <span>${item.title}</span>
                    <p>${item.price}$</p>
                    <button>remove</button>
                  </div>
                </div>


`
  })
    modalcart.innerHTML = cart.join('')
  }
// ----------------------------------------------------
