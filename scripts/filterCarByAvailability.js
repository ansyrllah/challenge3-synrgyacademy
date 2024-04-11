function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  
  // question: kenapa salah?
  // cars.forEach(car => {
  //   if (car.available = true) {
  //     result.push(car)
  //     console.log(car);
  //     console.log(car.manufacture)
  //   }
  // });

  for (let index = 0; index < cars.length; index++) {
    if (cars[index].available == true) {
      result.push(cars[index])
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
