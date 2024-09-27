(async function main() {
    let a = await fetch("https://stridestyle.netlify.app/.netlify/functions/getimages");
    let b = await a.json();
    document.querySelector(".products").innerHTML="";
    for (const element of b) {
        let fet = await fetch(`https://stridestyle.netlify.app/.netlify/functions/getslug?slug=${element}`)
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

                <img src="public/assets/Images/${element}/${links}" alt="Shoes">
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
                    document.querySelectorAll(".item").forEach(a => {
                        a.querySelector(".plus").addEventListener("click", () => {
                            a.querySelector(".val").innerHTML++;
                            a.querySelector(".Prices").innerHTML = a.querySelector(".val").innerHTML*e.querySelector(".Price").innerHTML.split("$")[0]+" $";

                        })

                        a.querySelector(".min").addEventListener("click", () => {
                            
                            if (a.querySelector(".val").innerHTML <1) {
                                console.log(a);
                                a.querySelector(".min").classList.add("disabled");
                                if (confirm("Do You Want to Delete Item !")) {
                                    a.remove();
                                    document.querySelector(".ab").innerHTML--;
                                    
                                }
                                return;
                            }
                            a.querySelector(".val").innerHTML--;
                            a.querySelector(".Prices").innerHTML = a.querySelector(".val").innerHTML*e.querySelector(".Price").innerHTML.split("$")[0]+" $";
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
    document.querySelector(".cart").style.display = "flex";
})
document.querySelector(".inp").addEventListener("input",(e)=>{
    document.querySelector(".products").innerHTML=`<div class="loader"></div>`
    fetch(`https://stridestyle.netlify.app/.netlify/functions/getslug?slug=${e.target.value}`)
    .then(response => response.json())
    .then(response => {
    document.querySelector(".products").innerHTML="";

        console.log(e.target.value, response);
        document.querySelector(".inp").innerHTML = ""; 
        for (const links of response) {
            if (links.endsWith(".webp")) {
                let a = links.split("+");
                document.querySelector(".products").innerHTML += `
                    <div class="sho">
                        <div class="img">
                            <div class="icon">
                                <span class="material-symbols-outlined">
                                    add
                                </span>
                            </div>
                            <img src="public/assets/Images/${e.target.value}/${links}" alt="Shoes">
                        </div>
                        <span>${a[0]} ${a[1]}</span>
                        <span>Men Foot Wear</span>
                        <span class="Price">${Math.floor(Math.random() * (300 - 200) + 100)} $</span>
                    </div>`;

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
                            document.querySelectorAll(".item").forEach(a => {
                                a.querySelector(".plus").addEventListener("click", () => {
                                    a.querySelector(".val").innerHTML++;
                                    a.querySelector(".Prices").innerHTML = a.querySelector(".val").innerHTML*e.querySelector(".Price").innerHTML.split("$")[0]+" $";
        
                                })
        
                                a.querySelector(".min").addEventListener("click", () => {
                                    
                                    if (a.querySelector(".val").innerHTML <1) {
                                        console.log(a);
                                        a.querySelector(".min").classList.add("disabled");
                                        if (confirm("Do You Want to Delete Item !")) {
                                            a.remove();
                                            document.querySelector(".ab").innerHTML--;
                                            
                                        }
                                        return;
                                    }
                                    a.querySelector(".val").innerHTML--;
                                    a.querySelector(".Prices").innerHTML = a.querySelector(".val").innerHTML*e.querySelector(".Price").innerHTML.split("$")[0]+" $";
                                })
        
                            })
                            document.querySelector(".cart span").addEventListener("click", () => {
                                document.querySelector(".cart").style.display = "none";
                            })
                        })
        
        
                    })
            }
        }
    })
    .catch(()=>{
    document.querySelector(".products").innerHTML=`<img src="public/assets/other/Not-found.png" ></img>`
        console.clear();
    })
      

})