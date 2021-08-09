// let person = {
//   name: "Brad",
//   age: 35,
//   address: {
//     street: "5 Main St",
//     city: "Boston"
//   },
//   children: ["Brianna", "Nick"]
// }

// // person = JSON.stringify(person) // parse to JSON
// // person = JSON.parse(person) // turns back into object

// let people = [
//   {
//     name: "Brad",
//     age: 35
//   },
//   {
//     name: "John",
//     age: 40
//   },
//   {
//     name: "Sarah",
//     age: 25
//   }
// ]


// // console.log(people[1].age);

// let output = ''

// for(let i = 0; i < people.length; i++){
//   // console.log(people[i].name);
//   output += `<li>${people[i].name}</li>`
// }

// document.getElementById('people').innerHTML = output

var xhttp = new XMLHttpRequest();  // browser has HMLHttpRequest object, we put in variable
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let response = JSON.parse(xhttp.responseText);
    let people = response.people
    let output = ''

    for(let i = 0; i < people.length; i++){
      // console.log(people[i].name);
      output += `<li>${people[i].name}</li>`
    }

    document.getElementById('people').innerHTML = output
  }
};
xhttp.open('GET', 'people.json', true);
xhttp.send();