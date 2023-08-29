const info = document.createElement("div");

function contact() {
  info.innerHTML = `
  <h2>Contact us</h2>
  <div class="box">
  <p><span class="cts">Address:</span> 711-2880 Nulla St.Mankato Mississippi 96522</p>
  <p><span class="cts">Timimgs:</span> 7 a.m. to 9 p.m.</p>
  <p><span class="cts">Telephone:</span>(257) 563-7401</p>
  <p><span class="cts">Email:</span> tastyfood@bla.com</p>
  </div>
  `;
  info.classList.add("hidden");
}

export { contact, info };
