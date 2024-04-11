function sortCarByYearDescendingly(cars) {
    // Sangat dianjurkan untuk console.log semua hal hehe
    // console.log(cars); 

    // Tulis code-mu disini
    // insertion sorting algorithm
    for (let i = 0; i < cars.length; i++) {
        let current = cars[i]; // item yang akan simpan di urutan yang benar
        let j = i - 1; // pembantu mengindeks mundur

        // memindahkan item yang lebih besar dari current
        // Iterasi hingga menemukan urutan yang tepat, atau indeks 0 array
        while (j >= 0 && cars[j].year < current.year) {
            cars[j + 1] = cars[j];
            j--;
        }
        // simpan current di posisi yang benar ini
        cars[j + 1] = current;
    }
    // console.log(cars);
    // Clone array untuk menghindari side-effect
    // Apa itu side effect?
    const result = [...cars];

    // Rubah code ini dengan array hasil sorting secara descending
    return result;
}
