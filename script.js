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

<p>Us Dealers</p>
`;


// style section
mainDiv.classList = ""; // main div design

nav.classList = "flex font-bold p-4 py-2 shadow-xl sticky top-0"; // nav section design

child1.classList = "flex justify-center w-1/2"; // child 1

funchild1.classList = "flex gap-2 w-1/2 justify-center items-center" // under child 1 cetagory section

schild1.classList = "w-1/2 flex justify-center items-center gap-5"; // navlinks

child2.classList = "flex w-1/2 justify-center items-center gap-10"; // child 2 design

// push secton
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

// push main section in body
document.body.appendChild(mainDiv);
