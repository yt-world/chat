const firebaseConfig = {
apiKey: "AIzaSyCr5ZpXwEdWpQL-lZOtjRa5Nz5pY5h349o",
  authDomain: "yt-world.firebaseapp.com",
  databaseURL: "https://yt-world.firebaseio.com",
  projectId: "yt-world",
  storageBucket: "yt-world.appspot.com",
  messagingSenderId: "1091241197826",
  appId: "1:1091241197826:web:eceed791243e36daf3821b",
  measurementId: "G-50SGZEE3DS"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


name = "User"

function sendMessage () {
    // function to send a message into the database
    let message = document.querySelector(".message").value;
    while(message.indexOf("<")!=-1){
        message = message.replace("<", "[Invalid Character]");
    }
    while(message.indexOf(">")!=-1){
        message = message.replace(">", "[Invalid Character]");
    }
    while(message.indexOf("/")!=-1){
        message = message.replace("/", "[Invalid Character]");
    }
    while(message.indexOf("eval")!=-1){
        message = message.replace("eval", "[Invalid Expression]");
    }
    while(message.indexOf("img")!=-1){
        message = message.replace("img", "[Invalid Expression]");
    }
    


    
        firebase.database().ref("messages").push().set({
            "sender":name,
            "message":message

        })
    document.querySelector(".message").value = "";    

    return false;
}

function login () {
    //console.log("function")
    name = document.querySelector(".login-form").value;
    
    while(name.indexOf("<")!=-1){
        name = name.replace("<", "[Invalid Character]");
    }
    while(name.indexOf(">")!=-1){
        name = name.replace(">", "[Invalid Character]");
    }
    while(name.indexOf("/")!=-1){
        name = name.replace("/", "[Invalid Character]");
    }
    while(name.indexOf("eval")!=-1){
        name = name.replace("eval", "[Invalid Expression]");
    }
    while(name.indexOf("img")!=-1){
        name = name.replace("img", "[Invalid Expression]");
    }

    
    if (name.length > 20){
        name = name.slice(0, 20)
    }
    document.querySelector(".username").textContent = name;
    document.querySelector(".login").classList.add("slide-up");
    return false; 
}

firebase.database().ref("messages").on("child_added", (snapshot) => {
    let html = document.querySelector(".messages").innerHTML;
    
    
    
    while(html.indexOf("eval")!=-1){
        html = html.replace("eval", "[Invalid Expression]");
    }
    while(html.indexOf("img")!=-1){
        html = html.replace("img", "[Invalid Expression]");
    }
    

    
    
    
    document.querySelector(".messages").innerHTML = `<li><i class="fa fa-user-circle"></i><span class="message-text">${snapshot.val().sender}: ${snapshot.val().message} </span></li>` + html;
})
