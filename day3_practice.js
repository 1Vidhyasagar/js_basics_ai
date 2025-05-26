// Practice:

// Make an array of favorite dishes
let myFavDishes = ["Chicken Biryani", "Butter Chicken", "Naan"];
console.log(myFavDishes)

// Make an object for a restaurant menu item
let menuItem = {
    name: "Chicken Biryani",
    price: 150,
    isAvailable:true
};
console.log(menuItem)

// Write a function prepareOrder(dishName)
function prepareOrder(type){
    return `Here is your ${type} meal!`;
}
console.log(prepareOrder("Chicken Biryani"))

// Use a callback to say "Enjoy your meal!"
function greet(name, callback){
    console.log("Hi " `${name}`)
    callback()
}
    
function sayEnjoy(){
        console.log("Enjoy your meal!")
    }


greet("Vidhyasagar",sayEnjoy)