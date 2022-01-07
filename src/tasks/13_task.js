let login = prompt("input")
if (login == "Админ"){
    let pass = prompt("input password")
    
    if (pass == "123"){
        alert("Hello")
    } else { 
        alert("Incorrect password")
    }
} else if (login != "Админ"){
    alert("???????")
} else {
    alert("Canceled")
}