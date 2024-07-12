const btn=document.getElementById('btn');
const main=document.getElementById('main');

btn.addEventListener('click',(e)=>{
    let check=e.target.innerHTML;
    if(check==="Men"){
        main.innerHTML=""
        console.log("men");
        let ajax=new XMLHttpRequest()
        // console.log(ajax);
     ajax.open("GET","https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json")
     ajax.onload=()=>{
        // console.log(ajax.response)
        let rest=JSON.parse(ajax.response)
        let allKids=rest.categories[0].category_products
        console.log(allKids)
        allKids.map((res)=>{
         console.log();
            let card=`
                   <div class="card">
        <div>
            <img id="img1" src=${res.image} alt="">
            <p>${res.title}</p>
        </div>
        <div>
            <p>price:${res.price}-${res.compare_at_price}</p>
            <p id="vendor">${res.vendor}</p>
            <p id="text">${res.badge_text}</p>
            <button id="cart">Add to cart</button>
        </div>
    </div>
                    `
                    main.innerHTML+=card
                })
        }
        ajax.send()

    }else if(check==="Women"){
        main.innerHTML=""
        console.log("women");
        let ajax=new XMLHttpRequest()
        // console.log(ajax);
        ajax.open("GET","https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json")
        ajax.onload=()=>{
                // console.log(ajax.response)
                let rest=JSON.parse(ajax.response)
                let allKids=rest.categories[1].category_products
                console.log(allKids)
    
                allKids.map((res)=>{
                    console.log();
                    let card=`
                             <div class="card">
        <div>
            <img id="img1" src=${res.image} alt="">
            <p>${res.title}</p>
        </div>
        <div>
            <p>price:${res.price}-${res.compare_at_price}</p>
            <p id="vendor">${res.vendor}</p>
            <p id="text">${res.badge_text}</p>
            <button id="cart">Add to cart</button>
        </div>
    </div>
                    `
                    main.innerHTML+=card
                })
    
    
        }
        ajax.send()
    }else if(check==="Kids"){
        main.innerHTML=""
        console.log("kids");
        let ajax=new XMLHttpRequest()
        // console.log(ajax);
        ajax.open("GET","https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json")
        ajax.onload=()=>{
                // console.log(ajax.response)
                let rest=JSON.parse(ajax.response)
                let allKids=rest.categories[2].category_products
                console.log(allKids)
    
                allKids.map((res)=>{
                    console.log();
                    let card=`
                             <div class="card">
        <div>
            <img id="img1" src=${res.image} alt="">
            <p>${res.title}</p>
        </div>
        <div>
            <p>price:${res.price}-${res.compare_at_price}</p>
            <p id="vendor">${res.vendor}</p>
            <p id="text">${res.badge_text}</p>
            <button id="cart">Add to cart</button>
        </div>
    </div>
                    `
                    main.innerHTML+=card
                })
    
    
        }
        ajax.send()
    }
})