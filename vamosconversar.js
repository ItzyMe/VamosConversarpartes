const firebaseConfig = {
    apiKey: "AIzaSyA5Ida2lGkEHlqsPyGsLttzveTQ4W4N9IA",
    authDomain: "usuario-7f68b.firebaseapp.com",
    databaseURL: "https://usuario-7f68b-default-rtdb.firebaseio.com",
    projectId: "usuario-7f68b",
    storageBucket: "usuario-7f68b.appspot.com",
    messagingSenderId: "100647047059",
    appId: "1:100647047059:web:fd64cefa42b5adc079e266"
  };
  
  // Initialize Firebase
  const app= firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name")
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function addRoom()
  { room_name=document.getElementById("room_name").value;
  //Enviando dados para o banco de dados
  firebase.database().ref("/").child (room_name).update({ purpose:"adding room_name" });
  
  localStorage.setItem("room_name",room_name);
  window.location="vamosconversarpagina.html"
      
  }
  
  function getData() { 
  //Código para pegar todos os dados do firebase,os nomes das salas salvas no firebase exibido no html
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
      
      Room_names = childKey;//Variável Room_names guarda todos os nomes das salas que  eu salvei no firebase
       console.log("Room Name - " + Room_names);
       //criar uma div no html pelo js
       // a variável row guardará a div que mostra os nomes da salas no html
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
           //var pra receber a div que vai receber o nome da sala 
          
           document.getElementById("output").innerHTML += row;
  
       });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  { console.log(name);
    localStorage.setItem("room_name",name);
    window.location="vamosconversarpagina.html"
    
  }
  
  //Aula 96
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="vamosconversar.html"
  }
  