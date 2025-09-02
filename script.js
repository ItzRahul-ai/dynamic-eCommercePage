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

<a herf="#">Home</a>

<a herf="#">Shop</a>

<a herf="#">Pages</a>

<a herf="#">Blogs</a>
`;

// second nav child
const child2 = document.createElement("div");

// links 
child2.innerHTML = `

<p>Sell on marcket</p>

<p>Track your order</p>

<p>Us dealers</p>
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
<input type="text" style="width:90%; outline:none; border:1px solid white; border-radius:5px; height:40px; background-color:#fff9;" class="pl-4 pr-30">

<button type="submit" style="background-color:black;" class="px-4 absolute py-2 rounded-lg font-bold text-xl right-10 cursor-pointer">Sarch</button>
`;

// nav2 third child
const thirdChild = document.createElement("div");

// all icons
thirdChild.innerHTML = `

<span>
<svg class="w-6 h-6 text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clip-rule="evenodd"/>
</svg>
</span>

<span>
<svg class="w-6 h-6 text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
</svg>
</span>

<span><svg class="w-6 h-6 text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
</svg>
</span>

<span>
<svg class="w-6 h-6 text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
</svg>
</span>

<span class="font-bold cursor-pointer">Logout</span>
`;
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

// style section {

//   nav 1 start  {

mainDiv.classList = "h-full"; // main div design

nav.classList = "flex font-bold p-4 py-2 shadow-xl sticky top-0 bg-gray-200 text-lg"; // nav section design

child1.classList = "flex justify-center w-1/2"; // child 1

funchild1.classList = "flex gap-2 w-1/2 justify-center items-center" // under child 1 cetagory section

schild1.classList = "w-1/2 flex justify-center items-center gap-5"; // navlinks

child2.classList = "flex w-1/2 justify-center items-center gap-10"; // child 2 design

//   } nav 1 end

// nav 2 start {

nav2.classList = "bg-blue-600 w-full p-4 py-4 mt-2 shadow-xl text-white flex"; // nav2 style

firstChild.classList = "w-1/5 text-center font-bold text-3xl"; // first child style

secondChild.classList ="w-3/5 flex justify-center items-center relative" // second child style

thirdChild.classList = "w-1/5 flex justify-between items-center";

//   } nav 2 end

//  start hero section design

mainHeroSection.classList = "w-full mt-2 shadow-xl h-[300px] bg-[url('./asset/hero-bg.avif')] bg-cover bg-center"; // main hero section

heroContent.classList = "w-full h-full bg-[rgb(0,0,0,0.7)] px-4 py-2 flex justify-center items-center text-white text-[10px] gap-10";

// end hero section design

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

// push main hero section on main div
mainDiv.appendChild(mainHeroSection);

// heroContent push in main hero
mainHeroSection.appendChild(heroContent);

// push main section in body
document.body.appendChild(mainDiv);
// }  end push section