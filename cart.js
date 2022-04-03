var cartData=JSON.parse(localStorage.getItem("bagData"))||[]


var addressData =[]

cartData.map(function(el)
{
    var length = cartData.length;

var item=document.querySelector("#item")
item.innerText=`My Bag ${length} item`


var delivry=document.createElement("p")
delivry.innerText="Shop for ₹150 more to get FREE delivery!"
delivry.style="background-color:#fcffee;padding:20px"

var inBox=document.createElement("div")
inBox.setAttribute("id","border")

var name = document.createElement("p")
name.innerText=el.name
name.style="color:gray;margin-left:15px"

var both=document.createElement("div")
both.setAttribute("id","both")

var price=document.createElement("h2")
price.innerText=el.price

var strike = document.createElement("h2")
strike.innerText=el.strikePrice
strike.style="margin-left:10px;text-decoration:line-through;color:gray;font-weight:200"

both.append(price,strike)


var save = document.createElement("p")
save.innerText=`You Saved ₹${eval(Number(el.strikePrice)-Number(el.price))}!`
save.style="color:green;font-size:20px;margin-top:-10px;margin-left:17px"

var imageBox=document.createElement("div")
imageBox.setAttribute("id","imageBox")

var image=document.createElement("img")
image.src=el.image
image.style="width:100%"

imageBox.append(image)

var div = document.createElement("div")
div.setAttribute("id","inputBox")
var input=document.createElement("select")
input.setAttribute("id","inputSize")

var option2 = document.createElement("option")
option2.innerText="QTY:1"

var option3= document.createElement("option")
option3.innerText=2

var option4 = document.createElement("option")
option4.innerText=3

var option5 = document.createElement("option")
option5.innerText=4

var option6 = document.createElement("option")
option6.innerText=5

var option7 = document.createElement("option")
option7.innerText=6

var option8 = document.createElement("option")
option8.innerText=7

var option9 = document.createElement("option")
option9.innerText=8

var option10 = document.createElement("option")
option10.innerText=9

var option11 = document.createElement("option")
option11.innerText=10


input.append(option2,option3,option4,option4,option5,option6,option7,option8,option9,option10,option11)
div.append(input)

var line = document.createElement("hr")
line.style="margin-top:40px"

var mixBox=document.createElement("div")
mixBox.setAttribute("id","mixBox")

var btn = document.createElement("button")
btn.innerText="Remove"
btn.setAttribute("id","remove")

var whislist=document.createElement("button")
whislist.innerText="Move To Wishlist"
whislist.setAttribute("id","wishlist")

mixBox.append(btn,whislist)


inBox.append(name,both,save,imageBox,div,line,mixBox)


document.querySelector("#firstBox").append(item,delivry,inBox)


var saveExtra = document.createElement("p")
saveExtra.innerText="Save extra ₹50 with TriBe"
saveExtra.style="background-color:#fdd835;padding:15px 20px;border-radius:6px;font-size:20px"

var para = document.createElement("p")
para.innerText="Get Rs.100 instant discount on your First Purchase above Rs.599. Coupon code - NEW100"
para.style="padding:0px 15px; border:1px solid lightgray; font-size:18px;color:gray"

var paraTwo = document.createElement("p")
paraTwo.innerText="Whistles! Get extra 10% cashback on prepaid orders above Rs.599. Coupon code - BIRTHDAY10"
paraTwo.style="padding:0px 15px; border:1px solid lightgray; font-size:18px;color:gray"

var redeemBox = document.createElement("div")
redeemBox.setAttribute("id","redeemBox")

var likhna=document.createElement("p")
likhna.innerText="Have a Coupon / Referral / Gift Card ?"
likhna.style="color:teal";

var redeem=document.createElement("p")
redeem.innerText="Redeem>>"
redeem.style="color:teal"

redeemBox.append(likhna,redeem)

var summary=document.createElement("p")
summary.innerText="Price Summary"
summary.style="border:none;padding:10px 10px;font-size:18px;background-color:#f5f5f5;font-weight:700;margin-top:0px"

var totalBox=document.createElement("div")
totalBox.style="display:inline-flex;display:flex;justify-content:space-between;color:gray;text-size:18px;margin-top:-15px"

var tax = document.createElement("p")
tax.innerText="Total MRP (Incl. of taxes)"
tax.style="margin-left:10px"

var taxPrice = document.createElement("p")
taxPrice.innerText=`₹${el.price}`
taxPrice.style="margin-right:20px"

totalBox.append(tax,taxPrice)

var totalBox2=document.createElement("div")
totalBox2.style="display:inline-flex;display:flex;justify-content:space-between;color:gray;text-size:18px;margin-top:-15px"

var tax2 = document.createElement("p")
tax2.innerText="Delivery Fee"
tax2.style="margin-left:10px"

var taxPrice2 = document.createElement("p")
taxPrice2.innerText=30
taxPrice2.style="margin-right:20px"

totalBox2.append(tax2,taxPrice2)

var totalBox3=document.createElement("div")
totalBox3.style="display:inline-flex;display:flex;justify-content:space-between;color:gray;text-size:18px;margin-top:-15px"

var tax3 = document.createElement("p")
tax3.innerText="Bag Discount"
tax3.style="margin-left:10px"

var taxPrice3 = document.createElement("p")
taxPrice3.innerText=` ₹${eval(Number(el.strikePrice)-Number(el.price))}`
taxPrice3.style="margin-right:20px"

totalBox3.append(tax3,taxPrice3)

var totalBox4=document.createElement("div")
totalBox4.style="display:inline-flex;display:flex;justify-content:space-between;color:gray;text-size:18px;margin-top:-15px"

var tax4 = document.createElement("p")
tax4.innerText="Subtotal "
tax4.style="margin-left:10px"

var taxPrice4 = document.createElement("p")
taxPrice4.innerText=`₹${eval(Number(el.price+30))}`
taxPrice4.style="margin-right:20px"

totalBox4.append(tax4,taxPrice4)

var save = document.createElement("div")
save.style="border-radius:20px;width:90%;margin:auto;background-color:#e8f3e5"

var write=document.createElement("p")
write.innerText=`You are saving ${eval(Number(el.strikePrice)-Number(el.price))} on this order`
write.style="color:green;font-size:18px;padding:5px 10px"

save.append(write)

var lastLine=document.createElement("hr")

var last=document.createElement("div")
last.style="display:inline-flex;display:flex;justify-content:space-between"

var lastPara=document.createElement("p")
lastPara.innerText=`Total ₹${eval(Number(el.price)+30)}`
lastPara.style="width:40px;;font-size:20px;margin-left:20px;"

var address=document.createElement("button")
address.innerText="ADD ADDRESS"
address.setAttribute("id","hover")
address.style="width:65%;height:50px;margin-right:20px;border-radius:10px;border:none;background-color:teal;color:white;font-size:18px;margin-top:17px"
address.addEventListener("click",function(){
    addressFun()
})

last.append(lastPara,address)

var oneMore=document.createElement("hr")


document.querySelector("#secondBox").append(saveExtra,para,paraTwo,redeemBox,summary,totalBox,totalBox2,totalBox3,totalBox4,save,lastLine,last,oneMore)

})

function addressFun(el)
{
addressData.push(el)
localStorage.setItem("addData",JSON.stringify(addressData))
window.location.href="address.html"
}