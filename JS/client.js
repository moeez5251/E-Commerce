
(async function main() {
    let a = await fetch("https://chicfootwear.netlify.app/.netlify/functions/getimages");
    let b = await a.json();
    for (const element of b) {
        let fet = await fetch(`http://localhost:3000/${element}`)
        let response = await fet.json();
        for (const links of response) {
            if (links.endsWith(".webp")) {
                let a = links.split("+")
                document.querySelector(".products").innerHTML += ` <div class="sho">
            <div class="img">
                <div class="icon">
                    <span class="material-symbols-outlined">
                        add
                    </span>
                </div>

                <img src="assets/Images/${element}/${links}" alt="Shoes">
            </div>
            <span>${a[0]} ${a[1]}</span>
            <span>Men Foot Wear</span>
            <span class="Price">${Math.floor(Math.random() * (300 - 200) + 100)} $</span>
        </div>`

            }
            document.querySelectorAll(".sho").forEach(e => {
                e.addEventListener("click", () => {
                    document.querySelector(".ab").innerHTML++;
                    document.querySelector(".relative > span").style.color = "red"

                    document.querySelector(".alert").classList.add("animate");
                    setTimeout(() => {
                        document.querySelector(".alert").classList.remove("animate");

                    }, 2000);
                    document.querySelector(".cart").innerHTML += `
                      <div class="item">
            <div class="image">
                <img src="${e.querySelector(".img img").src}" alt="Shoes Image">

            </div>
            <div class="icons">
                <span class="plus">+</span>
                <span class="val">1</span>
                <span class="min" >-</span>
            </div>
            <span class="Prices">${e.querySelector(".Price").innerHTML}</span>
            </div>
                    `
                    document.querySelectorAll(".item").forEach(e => {
                        e.querySelector(".plus").addEventListener("click", () => {
                            e.querySelector(".val").innerHTML++;
                            e.querySelector(".Prices").innerHTML= e.querySelector(".val").innerHTML*e.querySelector(".Prices").innerHTML.split("$")[0] +"$";
                        })

                        e.querySelector(".min").addEventListener("click", () => {

                            if (e.querySelector(".val").innerHTML <= 0) {
                                e.querySelector(".min").classList.add("disabled");
                                if (confirm("Do You Want to Delete Item !")) {
                                    e.remove();
                                    document.querySelector(".ab").innerHTML--;
                                    
                                }
                                return;
                            }
                            e.querySelector(".val").innerHTML--;
                            e.querySelector(".Prices").innerHTML= e.querySelector(".val").innerHTML*e.querySelector(".Prices").innerHTML.split("$")[0] +"$";
                        })

                    })
                    document.querySelector(".cart span").addEventListener("click", () => {
                        document.querySelector(".cart").style.display = "none";
                    })
                })


            })


        }

    }

})();
document.querySelector(".relative span").addEventListener("click", () => {
    document.querySelector(".cart").style.display = "block";
})


