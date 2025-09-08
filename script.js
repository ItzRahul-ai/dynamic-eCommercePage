// main section
const mainDiv = document.createElement("div");

// nav section 
const nav = document.createElement("nav");

// first nav child
const child1 = document.createElement("div");

// under frst child
const funchild1 = document.createElement("div");

funchild1.innerHTML = `
<span><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
</svg></span>
<span>Catagory</span>
`;

// under first child second child
const schild1 = document.createElement("div");

// nav links under second child
schild1.innerHTML = `

<a class= "cursor-pointer hover:text-rose-600 transition-all duration-700" herf="#">Home</a>

<a class= "cursor-pointer hover:text-rose-600 transition-all duration-700" herf="#">Shop</a>

<a class= "cursor-pointer hover:text-rose-600 transition-all duration-700" herf="#">Pages</a>

<a class= "cursor-pointer hover:text-rose-600 transition-all duration-700" herf="#">Blogs</a>
`;

// second nav child
const child2 = document.createElement("div");

// links 
child2.innerHTML = `

<p class= "cursor-pointer hover:text-rose-600 transition-all duration-700" id="addProduct">Sell on marcket</p>

<p class= "cursor-pointer hover:text-rose-600 transition-all duration-700">Track your order</p>

<p class= "cursor-pointer hover:text-rose-600 transition-all duration-700">Us dealers</p>

`;

//  end nav section

// start nav2 section
const nav2 = document.createElement("div");

// nav2 first child 
const firstChild = document.createElement("div");

// brand name
firstChild.innerHTML = `
<span>Easy</span>
<span style="color:yellow">Shop</span>
`;

// nav2 second child
const secondChild = document.createElement("div");

// sarch option
secondChild.innerHTML = `
<input id="sarch" placeholder="Sarch your product" type="text" style="width:90%; outline:none; border:1px solid white; border-radius:5px; height:40px; background-color:#fff9;" class="pl-4 pr-30">
`;




// nav2 third child
const thirdChild = document.createElement("div");

// all icons
thirdChild.innerHTML = `

<span class="rounded-full p-3 bg-transparent hover:bg-[#fff5] transition-all duration-700">
<svg class="w-6 h-6 text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clip-rule="evenodd"/>
</svg>
</span>

<span class="rounded-full p-3 bg-transparent hover:bg-[#fff5] transition-all duration-700">
<svg class="w-6 h-6 text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
</svg>
</span>

<span class="rounded-full p-3 bg-transparent hover:bg-[#fff5] transition-all duration-700">
<svg class="w-6 h-6 text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
</svg>
</span>

<span class="rounded-full p-3 bg-transparent hover:bg-[#fff5] transition-all duration-700">
<svg class="w-6 h-6 text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
</svg>
</span>

<span class="font-bold cursor-pointer transition-all duration-700 bg-transparent hover:bg-[#fff5] px-2 py-1 rounded-lg">Login</span>
`;

// hambarger icon
const hambarger = document.createElement("div")

hambarger.innerHTML = `
           
            <div class="flex items-center lg:hidden justify-end absolute right-5 top-2">
                <button id="menu-btn" class="cursor-pointer text-black hover:text-rose-600 focus:outline-none transition-all duration-700">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
`;

// mobile menu
const mobileMenu = document.createElement("div");
mobileMenu.id = "mobile-menu";
mobileMenu.classList = "lg:hidden max-h-0 rounded-xl opacity-0 absolute overflow-hidden transition-all duration-700";
mobileMenu.innerHTML = `
  <div class="flex flex-col gap-4 p-4 bg-[rgb(0,0,0,0.8)] text-white">
    <a href="#" class="cursor-pointer hover:text-rose-600 transition-all duration-700 bg-transparent hover:bg-[#fff5] px-2 py-2 rounded-full">Home</a>
    <a href="#" class="cursor-pointer hover:text-rose-600 transition-all duration-700 bg-transparent hover:bg-[#fff5] px-2 py-2 rounded-full">Shop</a>
    <a href="#" class="cursor-pointer hover:text-rose-600 transition-all duration-700 bg-transparent hover:bg-[#fff5] px-2 py-2 rounded-full">Pages</a>
    <a href="#" class="cursor-pointer hover:text-rose-600 transition-all duration-700 bg-transparent hover:bg-[#fff5] px-2 py-2 rounded-full">Blogs</a>

    
<p class= "cursor-pointer hover:text-rose-600 transition-all duration-700 bg-transparent hover:bg-[#fff5] px-2 py-2 rounded-full" id="addProduct">Sell on marcket</p>

<p class= "cursor-pointer hover:text-rose-600 transition-all duration-700 bg-transparent hover:bg-[#fff5] px-2 py-2 rounded-full">Track your order</p>

<p class= "cursor-pointer hover:text-rose-600 transition-all duration-700 bg-transparent hover:bg-[#fff5] px-2 py-2 rounded-full">Us dealers</p>


<span class="text-center rounded-full p-3 bg-transparent hover:bg-[#fff5] transition-all duration-700">
<svg class="w-6 h-6 text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clip-rule="evenodd"/>
</svg>
</span>

<span class="text-center rounded-full p-3 bg-transparent hover:bg-[#fff5] transition-all duration-700">
<svg class="w-6 h-6 text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
</svg>
</span>

<span class="text-center rounded-full p-3 bg-transparent hover:bg-[#fff5] transition-all duration-700">
<svg class="w-6 h-6 text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
</svg>
</span>

<span class="text-center rounded-full p-3 bg-transparent hover:bg-[#fff5] transition-all duration-700">
<svg class="w-6 h-6 text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
</svg>
</span>

<span class="font-bold cursor-pointer transition-all duration-700 bg-transparent hover:bg-[#fff5] px-2 py-2 rounded-full">Login</span>
  </div>
`;

// append mobile menu under nav
hambarger.appendChild(mobileMenu);

// now add event listener AFTER appending hambarger + mobileMenu
hambarger.addEventListener('click', () => {
  mobileMenu.classList.toggle('max-h-0');
  mobileMenu.classList.toggle('opacity-0');
  mobileMenu.classList.toggle('min-h-[500px]');
  mobileMenu.classList.toggle('opacity-100');
});


// end nav2 section

// start hero section
const mainHeroSection = document.createElement("div");

// hero content container
const heroContent = document.createElement("div");

// hero image
heroContent.innerHTML = `
<div>
<p>Virson 20255</p>
<h1 class="text-3xl font-bold ">Upto <span class="text-yellow-600">50%</span> discount</h1>
<p>New virson 2025 with new features</p>
<p class="font-bold text-[12px]">Faster, Easy interface $ Afordable price.</p>
</div>
<img src="./asset/hero.png" class="h-full">
`;
// end hero section

// products section start
const product = document.createElement("div");

// add product card section
const addProduct = document.createElement("div");

// add product card
const addCard = document.createElement("div");

addCard.innerHTML = `
<p><svg class="w-25 h-25 text-gray-300 md:h-40 md:w-40" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>
</p>
<p>Add Your Product</p>
`;

// product cards section
const mainCardsSection = document.createElement("div");

mainCardsSection.innerHTML = `
<div class="flex justify-between items-center pb-4 border-b border-gray-300">
<div><p>Top Deals</p></div>

<div><a class="underline cursor-pointer">View All</a></div>
</div>
`;

// card container
const cardContainer = document.createElement("div");

// declear a array
const cardData = [
  {
    image: "./asset/product1.jpeg",
    name: "Headphone",
    price: 1299
  },
  {
    image: "./asset/product2.jpeg",
    name: "Camera",
    price: 5099
  },
  {
    image: "./asset/product3.jpeg",
    name: "Camera",
    price: 2299
  },
  {
    image: "./asset/product4.jpeg",
    name: "Shoes",
    price: 299
  },
  {
    image: "./asset/product5.jpeg",
    name: "Camera",
    price: 11399
  }
];

// show cards in cards secton

cardData.forEach(item => {
  // card
  const card = document.createElement("div");

  //card image section
  const cardImg = document.createElement("img");
  // get image in array
  cardImg.src = item.image;
  cardImg.alt = item.name;

  // product name
  const productName = document.createElement("p");
  // get name in array
  productName.textContent = item.name;

  // product price 
  const productPrice = document.createElement("p");
  // get price
  productPrice.innerHTML = `<span>₹</span> ${item.price}`;

  // product purchse and save button 
  const produtBtn = document.createElement("div");

  produtBtn.innerHTML = `
<div>
<button type="submit" class="bg-blue-600 px-4 py-1 rounded-lg text-white cursor-pointer"><svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"/>
</svg>
</button>
</div>

<div>
<button type="submit" class="bg-blue-600 px-4 py-1 rounded-lg text-white cursor-pointer text-lg">Buy</button>
</div>
`;

  // end card section

  // design card
  card.classList = "bg-white rounded-xl px-2 py-1 w-full hover:scale-105 transition-all duration-700";
  cardImg.classList = "w-full h-[200px] rounded-xl mb-4";
  productName.classList = "w-full py-1 font-bold text-lg";
  productPrice.classList = "w-full py-1 font-bold text-lg";
  produtBtn.classList = "flex justify-between items-center w-full px-4 py-1";


  // card all items push in card
  card.appendChild(cardImg);
  card.appendChild(productName);
  card.appendChild(productPrice);
  card.appendChild(produtBtn);

  // push card in card container
  cardContainer.appendChild(card);
});

// style section {

//   nav 1 start  {

mainDiv.classList = "h-full"; // main div design

nav.classList = "flex font-bold p-4 py-2 shadow-xl sticky top-0 bg-gray-200 text-lg z-20"; // nav section design

child1.classList = "flex justify-center w-1/2"; // child 1

funchild1.classList = "flex gap-2 w-1/2 justify-center items-center" // under child 1 cetagory section

schild1.classList = "hidden w-1/2 lg:flex justify-center items-center gap-5"; // navlinks

child2.classList = "hidden lg:flex w-1/2 justify-center items-center gap-10"; // child 2 design

//   } nav 1 end

// nav 2 start {

nav2.classList = "bg-blue-600 w-full p-4 py-4 mt-2 shadow-xl text-white flex"; // nav2 style

firstChild.classList = "lg:w-1/5 w-1/2 lg:text-center text-left font-bold text-3xl"; // first child style

secondChild.classList = "lg:w-3/5 w-1/2 flex justify-center items-center relative" // second child style

thirdChild.classList = "w-1/5 hidden lg:flex justify-between items-center";

//   } nav 2 end

//  start hero section design

mainHeroSection.classList = "w-full mt-2 shadow-xl h-[300px] bg-[url('./asset/hero-bg.avif')] bg-cover bg-center"; // main hero section

heroContent.classList = "w-full h-full bg-[rgb(0,0,0,0.7)] px-4 py-2 flex justify-center items-center text-white text-[10px] gap-10";

// end hero section design

// product sction design

product.classList = "border-t border-gray-300 mt-2 px-4 py-2 shadow-xl h-full";

addProduct.classList = "flex hidden justify-center items-center w-full h-full";

addCard.classList = "border cursor-pointer gap-2 font-bold text-xl flex-col border-dashed border-gray-500 px-4 py-2 rounded-xl md:w-2/5 w-2/3 h-[400px] bg-gray-100 flex justify-center items-center";

mainCardsSection.classList = "w-full font-bold text-xl py-2";

cardContainer.classList = "mt-5 container mx-auto bg-[rgb(0,0,0,0.1)] py-4 px-4 rounded-xl grid gap-4 lg:grid-cols-5 md:grid-cols-3 grid-cols-1";

// end product section

//     }  end style section

// push secton {

// push nav in main section
mainDiv.appendChild(nav);

// push child1 in nav (first child)
nav.appendChild(child1);

// push child2 in nav (second child)
nav.appendChild(child2);

// push funchild1 (with category) inside child1
child1.appendChild(funchild1);

// push schild1 (nav links) inside child1
child1.appendChild(schild1);

// push nav2 section
mainDiv.appendChild(nav2);

// push nav2 first child
nav2.appendChild(firstChild);

// push nav2 second child
nav2.appendChild(secondChild);

// push nav2 third child
nav2.appendChild(thirdChild);

// push hambarger 
nav.appendChild(hambarger);

// push main hero section on main div
mainDiv.appendChild(mainHeroSection);

// heroContent push in main hero
mainHeroSection.appendChild(heroContent);

// main product section push in main div
mainDiv.appendChild(product);

// push addProduct section in product
product.appendChild(addProduct);

// add card push in add product
addProduct.appendChild(addCard);

// push main card section in product section
product.appendChild(mainCardsSection);

// push card container 
mainCardsSection.appendChild(cardContainer);

// push main section in body
document.body.appendChild(mainDiv);
// }  end push section

// Desktop button
const desktopSellBtn = document.querySelector("#addProduct"); // desktop
desktopSellBtn.addEventListener("click", () => {
  addProduct.classList.toggle("hidden");
  addProduct.classList.toggle("flex");
});

// Mobile button
const mobileSellBtn = document.querySelector("#mobile-menu #addProduct"); // mobile menu id
mobileSellBtn.addEventListener("click", () => {
  addProduct.classList.toggle("hidden");
  addProduct.classList.toggle("flex");
});
