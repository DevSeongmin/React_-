// 음식을 주문하는 상황

function orderFood(callback) {
  setTimeout(() => {
    const food = "🍔";
    callback(food);
  }, 1000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 1000);
}

function freezFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `얼어버린 ${food}`;
    callback(freezedFood);
  }, 1000);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
