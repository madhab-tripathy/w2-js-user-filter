const users = [
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2, name:"jack",age:"20", profession:"developer"},
    {id:3, name:"karen", age:"19",profession:"admin"}
]
function addUser(){
    const userName = document.getElementById("name").value;
    const userProfession = document.getElementById("uProfession").value;
    const userAge = document.getElementById("age").value;
    const user = {
        id:users.length+1,
        name:userName,
        profession:userProfession,
        age:userAge
    };
    console.log(userProfession);
    users.push(user);
    updateUser(users);
}
function filterUser(){
    const dropdown = document.getElementById("profession");
    if(dropdown.value===""){
        alert("Please select a profession before clicking the button")
        return;
    }
    let filterByProfession =  users.filter((e) =>e.profession.toLowerCase() === dropdown.value.toLowerCase());
    updateUser(filterByProfession);
}
function updateUser(arr){
    document.getElementById("userInfo").innerHTML='';
    const userInfo = document.getElementById("userInfo");
    arr.forEach((e) =>{
        const div = document.createElement("div");
        div.classList.add("user");
        
        const id = document.createElement("span");
        const name = document.createElement("span");
        const profession = document.createElement("span");
        const age = document.createElement("span");

        id.innerText = `${e.id}.`;
        name.innerText = `Name: ${e.name}`
        profession.innerText = `Profession: ${e.profession}`
        age.innerHTML = `Age: ${e.age}`

        div.appendChild(id)
        div.appendChild(name)
        div.appendChild(profession)
        div.appendChild(age)
        userInfo.appendChild(div) 
    })
}
updateUser(users);