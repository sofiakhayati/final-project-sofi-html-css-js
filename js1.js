//************************ remove plate ************* */
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for(var i = 0; i < removeCartItemButtons.length; i++)
    {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    //************************ change quantity ********************** */
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for(var i = 0; i < quantityInputs.length; i++)
    {
        var input = quantityInputs[i]
        input.addEventListener('change', quantitychanged)
    }
    //************************ add plate to purchase ********************** */
    var addtocartbuttons = document.getElementsByClassName('shop-item-button')
    for(var i = 0; i < addtocartbuttons.length; i++)
    {
        var button = addtocartbuttons[i]
        button.addEventListener('click', addtocartclicked)
    }
    //************************ purchase ********************** */
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchaseclicked)
    function purchaseclicked(event)
    {
    alert('thank you for your order from our restaurant! hope you like our services! see you soon')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes())
    {
        cartItems.removeChild(cartItems.firstChild)
    }
    updatecarttotal()
    }
    /********************** removeCartItem function *********/
    function removeCartItem(event)
    {
        var buttonclicked = event.target
        buttonclicked.parentElement.parentElement.remove()
        updatecarttotal()
    }
    /**********************  quantitychanged function *********/
    
    function quantitychanged(event)
    {
        var input = event.target
        if (isNaN(input.value) || input.value <= 0)
        {
            input.value = 1
        }
        else 
        {
            updatecarttotal()
        }
    }

    /**********************  addtocartclicked function *********/

function addtocartclicked(event)
{
    var button = event.target
    var shopitem = button.parentElement.parentElement
    var title = shopitem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopitem.getElementsByClassName('shop-item-price')[0].innerText
    var imagesrc = shopitem.getElementsByClassName('shop-item-image')[0].src
    console.log(title, price, imagesrc)
    addItemToCart(title, price, imagesrc)
    updatecarttotal()
}
//************************ addItemToCart function ********************** */

function addItemToCart(title, price, imagesrc)
{
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (i = 0; i < cartItemNames.length; i++)
    {
        if (cartItemNames[i].innerText == title)
        {
            alert('this item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
    <div class="cart-item cart-column">
                        <img class="cart-item-image" src="${imagesrc}" width="100" height="100">
                        <span class="cart-item-title">${title}</span>
                    </div>
                    <span class="cart-price cart-column">${price}</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" type="number" value="1">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>
    `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantitychanged)
}

/********************** updatecarttotal function *********/

function updatecarttotal()
{
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for(var i = 0; i < cartRows.length; i++)
    {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value 
        total += price * quantity
    }
    total = Math.round(total * 100)/100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

//****************function opacity ********************************/

    var z = document.getElementsByClassName("section-style")
    //console.log(z);
    for(var i = 0; i < z.length; i++)
    {
        var b = z[i]
        b.addEventListener('click', functionopacity)
        //console.log(z[i]);
    }

    var timesClicked = 0;
    function functionopacity()
    {
        var h = document.getElementById("food-nav")    
        timesClicked++;
        if (timesClicked%2==0)
        {
            h.style.opacity = "1";
        }
        else 
        {
            h.style.opacity = "0.3";
        }
        
    }
   

