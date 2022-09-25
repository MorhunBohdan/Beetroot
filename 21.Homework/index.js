//Мінімум
let car = {
  manufacturer: "Tesla",
  model: "Model S",
  yearOfManufacture: 2022,
  averageSpeed: 60,
  bettery: 100,
  consumption: 18.5,
  carInfo() {
    alert(
      "Manufacturer: " +
        this.manufacturer +
        "; Model: " +
        this.model +
        "; Year of Manufacture: " +
        this.yearOfManufacture +
        "; Averege speed: " +
        this.averageSpeed +
        " km; Battery: " +
        this.bettery +
        " kWh; Consumption: " +
        this.consumption +
        " kWh/100"
    );
  },
  driverName() {
    let firstName = prompt("Please enter your name", "First Name");
    if (firstName == "") {
      alert("Please enter your name");
      car.driverName();
    } else {
      car.driverFirstName = firstName;
      alert(
        "Manufacturer: " +
          this.manufacturer +
          "; Model: " +
          this.model +
          "; Year of Manufacture: " +
          this.yearOfManufacture +
          "; Averege speed: " +
          this.averageSpeed +
          " km; Battery: " +
          this.bettery +
          " kWh; Consumption: " +
          this.consumption +
          " kWh/100; Driver Name: " +
          this.driverFirstName
      );
    }
  },
  consumAndTimeCalc() {
    let distance = prompt(
      "Enter distance to calculate consumation and time for avg speed"
    );
    let time = (1 * distance) / 60;
    const oneKw = this.consumption / 100;
    alert(
      "Consumation of kWh for this distans: " +
        distance * oneKw +
        "Time for this distans: " +
        time 

    )
    if (time > 4) {
      let withTheRest = time + 1;
    } else {
      withTheRest = "You dont need to charge bettery";
    }
    alert(
      "Consumation of kWh for this distans: " +
        distance * oneKw +
        "Time for this distans: " +
        time +
        "Time to charge bettery: " + 
        withTheRest
    )
  }
};
car.carInfo();

car.driverName();

car.consumAndTimeCalc();
