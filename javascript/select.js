var laptopOne = {
    laptop:"img/dell121.png",
    name:"dell121",
    price:25000,
    originalPrice:29000,
    itemId:"121"
}

var laptopTwo = {
    laptop:"img/dell122.jpg",
    name:"dell122",
    price:29000,
    originalPrice:30000,
    itemId:"122"
}

var laptopThree = {
    laptop:"img/dell123.jpg",
    name:"dell123",
    price:25000,
    originalPrice:29000,
    itemId:"123"
}

var laptopFour = {
    laptop:"img/dell124.jpg",
    name:"dell124",
    price:30000,
    originalPrice:35000,
    itemId:"124"
}
var laptopFive = {
    laptop:"img/dell125.png",
    name:"dell125",
    price:35000,
    originalPrice:40000,
    itemId:"125"
}

var selectId =decodeURIComponent(window.location.search)
var selectItem=selectId.substring(1)
console.log(selectItem)

if(selectItem==laptopOne.itemId) {
    document.getElementById("dell121").src=laptopOne.laptop
    document.getElementById("name1").innerText=laptopOne.name
    document.getElementById("price1").innerText=laptopOne.price
    document.getElementById("original1").innerText=laptopOne.originalPrice
    var cost=laptopOne.price
    qty (cost)
}
else if (selectItem==laptopTwo.itemId) {
    document.getElementById("dell121").src=laptopTwo.laptop
    document.getElementById("name1").innerText=laptopTwo.name
    document.getElementById("price1").innerText=laptopTwo.price
    document.getElementById("original1").innerText=laptopTwo.originalPrice
    var cost=laptopTwo.price
    qty (cost)
}
else if (selectItem==laptopThree.itemId) {
    document.getElementById("dell121").src=laptopThree.laptop
    document.getElementById("name1").innerText=laptopThree.name
    document.getElementById("price1").innerText=laptopThree.price
    document.getElementById("original1").innerText=laptopThree.originalPrice
    var cost=laptopThree.price
    qty (cost)
}
else if (selectItem==laptopFour.itemId) {
    document.getElementById("dell121").src=laptopFour.laptop
    document.getElementById("name1").innerText=laptopFour.name
    document.getElementById("price1").innerText=laptopFour.price
    document.getElementById("original1").innerText=laptopFour.originalPrice
    var cost=laptopFour.price
    qty (cost)
}
else if (selectItem==laptopFive.itemId) {
    document.getElementById("dell121").src=laptopFive.laptop
    document.getElementById("name1").innerText=laptopFive.name
    document.getElementById("price1").innerText=laptopFive.price
    document.getElementById("original1").innerText=laptopFive.originalPrice
    var cost=laptopFive.price
    qty (cost)
}

function qty(cost) {
    document.getElementById("quantity").onkeyup=function() {
        let quantity=document.getElementById("quantity").value
        let amount=cost
        if (quantity>1) {
            total=quantity*amount
            document.getElementById("total").innerText=total
            userLocation(total)
        }
        else if (quantity==1) {
            total=amount
            document.getElementById("total").innerText
            userLocation(total)
        }
    }
}

function userLocation(total) {
    document.getElementById("location").onchange=function() {
        let delivery = document.getElementById("location").value
        let Nairobi = 1000
        let Nyeri = 1500
        let Nanyuki = 2000
        if (delivery=="Nairobi") {
             document.getElementById("total").innerText = Nairobi + total
        }
        else if (delivery=="Nyeri") {
             document.getElementById("total").innerText = Nyeri + total
        }
        else if (delivery=="Nanyuki") {
             document.getElementById("total").innerText = Nanyuki + total
        }
        else if (delivery==" ") {
             document.getElementById("total").innerText = total
        }
    }
}