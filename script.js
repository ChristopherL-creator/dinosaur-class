const dino1 = new Dinosaur('Giganotosaurus', 'Charcarodontosauridae', '99.6-97 mya', 'South America', 'c', [12, 13.2], [4.2, 13.8, 6.8, 10.4])
console.log(dino1); 
console.log('Length: ', dino1.maxSize(), 'm'); 
console.log('Weight: ', dino1.maxWeight(), 't'); 
console.log(dino1.toString()); 

const dino2 = new Dinosaur('Mamenchisaurus', 'Mamenchisauridae', '145 mya', 'Cina', 'h', [21, 13, 22, 20, 16, 26, 35], [50, 75, 63])
console.log(dino2); 
console.log('Length: ', dino2.maxSize(), 'm'); 
console.log('Weight: ', dino2.maxWeight(), 't'); 
console.log(dino2.toString()); 
