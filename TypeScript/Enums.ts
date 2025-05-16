//* Enums
//* Enums numéricos
enum CarType {
	Honda,  //* = 0
	Toyota, //* = 1
	Subaru, //* = 2
	Hyundai //* = 3
}
console.log(CarType.Honda);

//* se puede inicializar el primer valor y typescript va a inferir los siguientes valores:
enum CarType2 {
	Honda = 1,
	Toyota, //* = 2
	Subaru, //* = 3
	Hyundai //* = 4
}
console.log(CarType2.Toyota);

//* Enums de Strings
enum CarType3 {
	Honda = "HONDA",
	Toyota = "TOYOTA",
	Subaru = "SUBARU",
	Hyundai = "HYUNDAI"
}

console.log(CarType3.Toyota); 
console.log(CarType3['Honda']); 

//* mapeo inverso
console.log(CarType2.Subaru);
console.log(CarType2["Subaru"]);
console.log(CarType2[3]);