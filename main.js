const btnBlec = document.querySelector(".blac__mod");
const darcBlec = document.querySelector(".darc__mod");
const inp = document.querySelector(".inp");
const form = document.querySelector(".form");
const btn = document.querySelector(".btn");
const ota = document.querySelector(".wraper");



function rendFlag() {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((country) => {
        const li = document.createElement("li");
        li.classList.add("country-item"); // Qo'shimcha: Filtrlash uchun class qo'shildi
        li.innerHTML = `
            <img class="bayro__img" src="${country.flags.png}">
            <h1 class="bayro__text">${country.name.common}</h1>
            `;
        ota.appendChild(li);
      });
    });
}

rendFlag();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = inp.value.toLowerCase();
  const countries = ota.querySelectorAll(".country-item"); // Barcha li elementlarini olish

  countries.forEach((li) => {
    const countryName = li.querySelector(".bayro__text").textContent.toLowerCase();
    if (countryName.includes(val)) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });
});
inp.addEventListener("input", () => {
    const val = inp.value.toLowerCase();
    const countries = ota.querySelectorAll(".country-item");
  
    countries.forEach((li) => {
      const countryName = li.querySelector(".bayro__text").textContent.toLowerCase();
      li.style.display = countryName.includes(val) ? "block" : "none";
    });
  });
  



// Toggle Dark/Light mode
btnBlec.addEventListener("click", () => {
  body.classList.remove("light-mode");
  btnBlec.style.display = "none";
  darcBlec.style.display = "inline-block";
});

darcBlec.addEventListener("click", () => {
  body.classList.add("light-mode");
  darcBlec.style.display = "none";
  btnBlec.style.display = "inline-block";
});
