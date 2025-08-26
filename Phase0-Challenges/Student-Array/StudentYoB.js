const students = [
    {
        name: "Moringa",
        age: 45,
        gender: "F"
    },
    {
        name: "Tomashi",
        age: 50,
        gender: "M"
    },
    {
        name: "Molly",
        age: 35,
        gender: "F"
    }
]


/*
year of birth?
age 
*/

const currentYear = 2025

/*const yearOfBirth = currentYear - age*/

function yearOfBirth(currentYear, age) {
    return currentYear - age
}

for (const student of students) {
    console.log(yearOfBirth(currentYear, student.age))
}

/* for specific student YoB:
      for (const student of students) {
          console.log(`${student.name} was born in ${yearOfBirth(currentYear, student.age)}`)
      }

*/