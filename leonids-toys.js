const toys = [
  {
  id: 1,
  name: "Halo MA40",
  ages: 8,
  weight: 2.5,
  brand: "Hasbro"
},
{
  id: 2,
  name: "Front end Loader",
  ages: 3,
  weight: 5,
  brand: "Tonka"
},

{
  id: 3,
  name: "F-22",
  ages: 8,
  weight: 1.20,
  brand: "Hawk's work"
}
] 

/*console.log(toys)*/

/*for (const toy of toys) {
  console.log(toy.brand)
}*/

const newToys = [
  {
  id: 4,
  name: "Razor A3",
  ages: 5,
  weight: 7,
  brand: "Razor"
},

{
  id: 5,
  name: "Pogo Stick",
  ages: 10,
  weight: 5,
  brand: "New Bounce"
}
]

toys.push(newToys[0]) /*use index number to access arrays*/
toys.push(newToys[1])
console.log(toys)

/*String interpolation*/
for (const toy of toys) {
  console.log(`The ${toy.name} is  fun for kids ${toy.ages} and only weighs ${toy.weight} lbs.`) 
}

for (toy of toys) {
  toy.ages = toy.ages + 2
  console.log(`The ${toy.name} is  fun for kids ${toy.ages} and only weighs ${toy.weight} lbs.`)
}