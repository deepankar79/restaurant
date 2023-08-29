const rmenu = document.createElement("div");
const con = document.getElementById("content");

function menu() {
  rmenu.innerHTML = `
      <h2>Here's Our Menu:</h2>
      <div class ="box">
      <ul>
        <li class="list-menu"><img src="./imgs/cheeseburger.png" alt="Burger">
        <p>Cheeseburger: $5</p></li>
        <li class="list-menu"><img src="./imgs/pizza.png" alt="pizza"><p>Pepperoni Pizza: $10</p></li>
        <li class="list-menu"><img src="./imgs/wine.png" alt="">
        <p>Alcohol: $10</p></li>
        <li class="list-menu"><img src="./imgs/water.png" alt="">
        <p>Water: $20</p></li>
        <li class="list-menu"><img src="./imgs/milkshake.png" alt="">
        <p>Milkshake : $25</p></li>
        <li class="list-menu"><img src="./imgs/spaguetti.png" alt="spaguetti">
        <p>Pasta : $30</p></li>
        <li class="list-menu"><img src="./imgs/ramen.png" alt="ramen">
        <p>Ramen : $25</p></li>
        <li class="list-menu"><img src="./imgs/cocoa.png" alt="cocoa">
        <p>Hot chocolate: $15</p></li>
        <li class="list-menu"><img src="./imgs/coffee.png" alt="coffee">
        <p>Hot Tea/Coffee: $15</p></li>
        <li class="list-menu"><img src="./imgs/coffee.png" alt="coffee">
        <p>Black coffee: $20</p></li>
      </ul></div>
    `;
  rmenu.classList.add("hidden");
}

export { menu, rmenu };
