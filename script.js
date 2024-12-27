async function details() {
    let data=await fetch('https://fakestoreapi.com/products')
    let productsList=document.querySelector(".row")
    let products= await data.json()
    console.log(products)
    for(let item of products){
        let col=document.createElement("div")
        col.className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
        let card=document.createElement("div")
        card.className="card"
        let image=document.createElement("img")
        image.src=item.image
        image.className="card-img-top pic"
        let cardBody=document.createElement("div")
        cardBody.className="card-body"
        let cardTitle=document.createElement("h5")
        cardTitle.className="card-title"
        cardTitle.innerHTML=item.title
        let cardText=document.createElement("p")
        cardText.innerHTML=item.description
        cardText.className="card-text"
        let price=document.createElement("p")
        price.innerHTML=`$ ${item.price}` 
        let btn=document.createElement("a")
        btn.className="btn btn-primary"
        btn.innerHTML="buy"
        
        
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardText)
        cardBody.appendChild(price)
        cardBody.appendChild(btn)
        card.appendChild(image)
        card.appendChild(cardBody)
        col.appendChild(card)
        productsList.appendChild(col)

        
    }
    
}
details()