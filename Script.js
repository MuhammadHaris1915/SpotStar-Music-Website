// function validate_login_credentials(){

//     var username=document.getElementById("user_name").value;
//     var password=document.getElementById("password").value;
//     var flag=true;

//     var db=[{'username' : 'Snegga' , 'password': 'Snegga@123'}, {'username' : 'Nivedha', 'password' : 'Nivedha@345'}]

//     for(var i=0; i<db.length; i++){
//         console.log("Enters loop")
//         if(username==db[i].username){
//             console.log("Enters if of username")
//             if(password==db[i].password){
//                 console.log("Enters if of password")
//                 window.location.href="http://127.0.0.1:5501/Homepage/Homepage.html";

//             }
//             else{
//                 console.log("Enters else of password")
//                 document.getElementById("error_msg").innerHTML="Invalid username or password";
//                 document.getElementById("error_msg").style.color="red";

//             }

//         }

//     }
// }