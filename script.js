
const btn  = document.querySelector("button");

btn.addEventListener('click', (e)=> {
    const dob = document.querySelector("input");
    const para = document.querySelector("p");
    let value = dob.value;
    if (value === "") {
        alert("Please enter your birthday");
    } else {
        const age = findAge(value);
        para.innerText = `Your age is ${age} years old`
    }
    e.preventDefault();
});

function findAge(value) {
    const currDate = new Date();
    const birthDate = new Date(value);

    let age = currDate.getFullYear() - birthDate.getFullYear();
    const month = currDate.getMonth() - birthDate.getMonth();

    if (
        month < 0 ||
        (month === 0 && currDate.getDate() < birthDate.getDate())
      ) {
        age--;
      }

    return age;
};


