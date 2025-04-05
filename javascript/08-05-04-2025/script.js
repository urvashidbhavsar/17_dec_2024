let products = [
    {
        id: "p001",
        brand: "Motorola",
        description: "Motorola G85 5G (Olive Green, 128 GB)  (8 GB RAM)",
        oldprice: 20999,
        newprice: 17999,
        pimage: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/l/u/-original-imah2fjd7wfd9ksh.jpeg?q=70"
    },
    {
        id: "p002",
        brand: "Realme",
        description: "realme P3x 5G (Midnight Blue, 128 GB)  (6 GB RAM)",
        oldprice: 16999,
        newprice: 13999,
        pimage: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/n/1/-original-imah9gtmya9qhqse.jpeg?q=70"
    },
    {
        id: "p003",
        brand: "Google Pixel",
        description: "Google Pixel 8a (Obsidian, 128 GB)  (8 GB RAM)",
        oldprice: 52999,
        newprice: 37999,
        pimage: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/y/n/pixel-8a-ga04432-in-google-original-imahyn3mqzdbzywg.jpeg?q=70"
    },
]

let box = document.querySelector(".card-data")
products.forEach(item => {
    box.innerHTML += `
     <div class="card">
        <img src=${item.pimage} alt="">

        <div class="details">
            <h2>${item.brand}</h2>
            <p>${item.description}</p>
            <p>₹${item.newprice} <del>₹${item.oldprice}</del></p>
            <button class="btn btn-primary w-100">Add to cart</button>
        </div>
    </div>
    `
})