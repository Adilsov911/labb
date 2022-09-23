function GetItemsfromBasket() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    console.log(basket);    
    let item = '';

    basket.forEach(x => {
        item += `
        <div class="basket-box col-lg-11 d-flex align-items-center justify-content-between">
            <img src=${x.Image} alt="">
            <h6>${x.Name}</h6>
            <input type="number" value=${x.Count}>
            <p>${x.Price}</p>
            <button class='btn btn-danger'>Delete</button>
            
        </div>
        `
    })
    document.getElementById('basket-list').innerHTML = item
}

GetItemsfromBasket();

function CountBasket() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    if(basket.length === 0 ) {
        document.getElementById('count').style.display = 'none'
    }
    else{
        document.getElementById('count').style.display = 'block'
    }
    document.getElementById('count').innerHTML = basket.length
}

CountBasket()

function ToplaItem(){
    let toplama = JSON.parse(localStorage.getItem("basket"));
    let toplamQiymet = 0;
    let toplamcount = 0;
    
    toplama.forEach(a => {
        toplamcount += a.Count;
        let Price = parseFloat(a.Price);
        let fullPrice = a.Count*Price;
        toplamQiymet += fullPrice;
        console.log(toplamQiymet);
    
    })
    
   
    let items = ""
    items=`
    <div class="basket-box col-lg-1 w-100 p-8 align-items-center justify-content-between">
    <h1 >Toplam Eded:${toplamcount}</h1>
    <h1>Toplam Mebleg:${toplamQiymet}</h1>
      
    </div>
    `
    document.getElementById('toplam').innerHTML = items
    
   
}
ToplaItem()
