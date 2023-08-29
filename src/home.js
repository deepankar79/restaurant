const wlcm = document.createElement("div");

function home() {
  wlcm.innerHTML = `
  <h2>Welcome</h2>
  <div class="box">
  <h4>Hot fast food. Enjoy.</h4>
  <ul><span class="cts">Timings:</span></ul>
  <li><span class="cts">Sunday:</span> 8am - 8pm</li>
  <li><span class="cts">Monday:</span> 6am - 6pm</li>
  <li><span class="cts">Tuesday:</span> 6am - 6pm</li>
    <li><span class="cts">Wednesday:</span> 6am - 6pm</li>
  <li><span class="cts">Thursday:</span> 6am - 10pm</li>
  <li><span class="cts">Friday:</span> 6am - 10pm</li>
  <li><span class="cts">Saturday:</span> 8am - 10pm</li>
  </ul>  </div>
  `;
  wlcm.classList.add("hidden");
}

export { home, wlcm };
