const container1 = document.querySelector(".container")

let p1 = document.createElement("p")
p1.textContent = "Hi this was added using js"
p1.style.color = "red"

container1.appendChild(p1)

$(".box").css({
    color: "red"
})

$(".para").text("My name is Kush")

$("#btn").click(function (){
    alert("Clickedddddddddddddddddddddddddddddddddddd")
})

$("#btn").click(function (){
    // $(".box").hide()
    // $(".box").fadeOut()
    // $(".box").toggle()
    $(".box").slideDown()
})

$(".fadeIn").click(function (){
    $(".container").fadeIn()
})
$(".fadeOut").click(function (){
    $(".container").fadeOut()
})