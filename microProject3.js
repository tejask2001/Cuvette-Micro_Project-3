const food=require('./food.json')

function foodItems(food){
    return food;
}

function vegitables(food){
food=food.filter((element)=>element.category=="Vegetable")
    return food;
}

function fruits(food){
food=food.filter((element)=>element.category=="Fruit")
    return food;
}

function proteins(food){
food=food.filter((element)=>element.category=="Protein")
    return food;
}

function nuts(food){
    food=food.filter((element)=>element.category=="Nuts")
    return food;
}

function grains(food){
    food=food.filter((element)=>element.category=="Grain")
    return food;
}

function dairy(food){
    food=food.filter((element)=>element.category=="Dairy")
    return food;
}

function calorieAbove100(food){
    food=food.filter((element)=>element.calorie>100)
    return food
}

function calorieBelow100(food){
    food=food.filter((element)=>element.calorie<100)
    return food
}

function highestToLowest(food){
    food=food.sort((a,b)=>b.protiens-a.protiens)
    return food;
}

function lowestToHighest(food){
    food=food.sort((a,b)=>a.cab-b.cab)
    return food
}

let c=highestToLowest(food)
console.log(c)