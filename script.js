

function result() {
    var username = document.getElementById("un").value;
    var welcome = "WELCOME";
    
    if(username == null || username == '') {
        alert(welcome + '!');
    } else {
        alert(welcome + ', ' + username);
    }
}