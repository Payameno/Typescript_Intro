let car = {
  brand: "BMW",
  engine: 3.4,
  run: function() {
    console.log("Running at 100 miles per hour")
  },
}

//We get an error because of type inference(types dont match)
car.brand = 23.