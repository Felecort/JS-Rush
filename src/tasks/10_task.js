
let message;
let login = prompt("input role")

message = (login == "Сотрудник") ? "Hello!" :
    (login == "Директор") ? "Good morning!" :
    (login == "") ? "No login" :
    ""