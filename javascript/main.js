var laptopOne = {
    laptop:"img/dell121.png",
    name:"dell121",
    price:"Now " +25000,
    originalPrice:"Was " +29000,
    itemId:"121"
}
document.getElementById("dell121").src= laptopOne.laptop
document.getElementById("name1").innerText=laptopOne.name
document.getElementById("price1").innerText = laptopOne.price
document.getElementById("original1").innerText = laptopOne.originalPrice


var laptopTwo = {
    laptop:"img/dell122.jpg",
    name:"dell122",
    price:"Now " +29000,
    originalPrice:"Was " +30000,
    itemId:"122"
}
document.getElementById("dell122").src= laptopTwo.laptop
document.getElementById("name2").innerText=laptopTwo.name
document.getElementById("price2").innerText = laptopTwo.price
document.getElementById("original2").innerText = laptopTwo.originalPrice


var laptopThree = {
    laptop:"img/dell123.jpg",
    name:"dell123",
    price:"Now " +25000,
    originalPrice: "Was "+29000,
    itemId:"123"
}
document.getElementById("dell123").src= laptopThree.laptop
document.getElementById("name3").innerText=laptopThree.name
document.getElementById("price3").innerText = laptopThree.price
document.getElementById("original3").innerText = laptopThree.originalPrice


var laptopFour = {
    laptop:"img/dell124.jpg",
    name:"dell124",
    price: "Now " +30000,
    originalPrice:"Was " +35000,
    itemId:"124"
}
document.getElementById("dell124").src= laptopFour.laptop
document.getElementById("name4").innerText=laptopFour.name
document.getElementById("price4").innerText = laptopFour.price
document.getElementById("original4").innerText = laptopFour.originalPrice


var laptopFive = {
    laptop:"img/dell125.png",
    name:"dell125",
    price:"Now " +35000,
    originalPrice:"Was " +40000,
    itemId:"125"
}
document.getElementById("dell125").src= laptopFive.laptop
document.getElementById("name5").innerText=laptopFive.name
document.getElementById("price5").innerText = laptopFive.price
document.getElementById("original5").innerText = laptopFive.originalPrice

document.getElementById("laptop1").onclick = function() {
   window.location.href = "select.html" + "?" + laptopOne.itemId
}
document.getElementById("laptop2").onclick = function() {
    window.location.href = "select.html" + "?" + laptopTwo.itemId
}
document.getElementById("laptop3").onclick = function() {
    window.location.href = "select.html" + "?" + laptopThree.itemId
}
document.getElementById("laptop4").onclick = function() {
    window.location.href = "select.html" + "?" + laptopFour.itemId
}
document.getElementById("laptop5").onclick = function() {
    window.location.href = "select.html" + "?" + laptopFive.itemId
}