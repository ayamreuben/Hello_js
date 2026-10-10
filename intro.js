const student = {name:"Reuben Ayamga", age: 25, Fav_programming_lang: "Python"};

for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}