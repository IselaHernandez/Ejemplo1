let map;

function initMap() {
    //Edificio A
    var Edif_A={lat: 20.368971, lng: -100.010289};
    //Edificio B
    var Edif_B={lat: 20.368476, lng: -100.010485};
    //Edificio C
    var Edif_C={lat:  20.367983, lng: -100.010753};
    //Edificio D
    var Edif_D={lat:  20.367480, lng: -100.010850};
    //Edificio E
    var Edif_E={lat:  20.367070, lng: -100.010154};
    //Edificio F
    var Edif_F={lat:  20.367667515615395, lng: -100.01004773321725};
    //Edificio G
    var Edif_G={lat:20.368047, lng: -100.010072};
    //Edificio H
    var Edif_H={lat:20.369032, lng: -100.009763};
    //Edificio I
    var Edif_I={lat:20.368776, lng: -100.009527};
    //Edificio J
    var Edif_J={lat:20.368378, lng: -100.009441};
    //Edificio CUIT
    var Edif_CUIT={lat:20.367503, lng: -100.009527};
    //Edificio MONU
    var Edif_MONU={lat:20.367124451536025, lng: -100.00950255613353};

    map = new google.maps.Map(document.getElementById("mapUTSJR"), {
  
    center: Edif_G,
    zoom: 18,
    
  });



  // Edificio A
  const edificioA = new google.maps.Marker({
    position: Edif_A,
    map: map,
    icon:'http://localhost:3001/web/images/a.png'
  });
  /////INFO WINDOW/////
Var = infoWindow= new google.maps.InfoWindow();
infoWindow.setPosition(Edif_A);
infoWindow.setContent("Edificio A");

google.maps.event.addListener(edificioA,'click',()=>{
    infoWindow.open(map,edificioA);
});





  // Edificio B
  const edificioB = new google.maps.Marker({
    position: Edif_B,
    map: map,
    icon:'http://localhost:3001/web/images/b.png'
  });
  Var = infoWindowB= new google.maps.InfoWindow();
infoWindowB.setPosition(Edif_B);
infoWindowB.setContent("Edificio B");

  google.maps.event.addListener(edificioB,'click',()=>{
    infoWindowB.open(map,edificioB);
});


  // Edificio C
  const edificioC = new google.maps.Marker({
    position: Edif_C,
    map: map,
    icon:'http://localhost:3001/web/images/c.png'
  });
  Var = infoWindowC= new google.maps.InfoWindow();
infoWindowC.setPosition(Edif_C);
infoWindowC.setContent("Edificio C");

  google.maps.event.addListener(edificioC,'click',()=>{
    infoWindowC.open(map,edificioC);
});


    // Edificio D
    const edificioD = new google.maps.Marker({
        position: Edif_D,
        map: map,
        icon:'http://localhost:3001/web/images/d.png'
      }); 
      Var = infoWindowD= new google.maps.InfoWindow();
      infoWindowD.setPosition(Edif_D);
      infoWindowD.setContent("Edificio D");
      
        google.maps.event.addListener(edificioD,'click',()=>{
          infoWindowD.open(map,edificioD);
      });




   // Edificio E
   const edificioE = new google.maps.Marker({
    position: Edif_E,
    map: map,
    icon:'http://localhost:3001/web/images/e.png'
  });
  Var = infoWindowE= new google.maps.InfoWindow();
  infoWindowE.setPosition(Edif_E);
  infoWindowE.setContent("Edificio E");
  
    google.maps.event.addListener(edificioE,'click',()=>{
      infoWindowE.open(map,edificioE);
  });





   // Edificio F
   const edificioF = new google.maps.Marker({
    position: Edif_F,
    map: map,
    icon:'http://localhost:3001/web/images/f.png'
  });
  Var = infoWindowF= new google.maps.InfoWindow();
  infoWindowF.setPosition(Edif_F);
  infoWindowF.setContent("Edificio F");
  
    google.maps.event.addListener(edificioF,'click',()=>{
      infoWindowF.open(map,edificioF);
  });




    // Edificio G
    const edificioG = new google.maps.Marker({
        position: Edif_G,
        map: map,
        icon:'http://localhost:3001/web/images/g.png'
      });
      Var = infoWindowG= new google.maps.InfoWindow();
      infoWindowG.setPosition(Edif_G);
      infoWindowG.setContent("Edificio G");
      
        google.maps.event.addListener(edificioG,'click',()=>{
          infoWindowG.open(map,edificioG);
      });



      
      // Edificio H
    const edificioH = new google.maps.Marker({
        position: Edif_H,
        map: map,
        icon:'http://localhost:3001/web/images/h.png'
      });
      Var = infoWindowH= new google.maps.InfoWindow();
      infoWindowH.setPosition(Edif_H);
      infoWindowH.setContent("Edificio H");
      
        google.maps.event.addListener(edificioH,'click',()=>{
          infoWindowH.open(map,edificioH);
      });





      // Edificio I
    const edificioI = new google.maps.Marker({
        position: Edif_I,
        map: map,
        icon:'http://localhost:3001/web/images/i.png'
      });
      Var = infoWindowI= new google.maps.InfoWindow();
      infoWindowI.setPosition(Edif_I);
      infoWindowI.setContent("Edificio I");
      
        google.maps.event.addListener(edificioI,'click',()=>{
          infoWindowI.open(map,edificioI);
      });



      // Edificio J
    const edificioJ = new google.maps.Marker({
        position: Edif_J,
        map: map,
        icon:'http://localhost:3001/web/images/j.png'
      });
      Var = infoWindowJ= new google.maps.InfoWindow();
      infoWindowJ.setPosition(Edif_J);
      infoWindowJ.setContent("Edificio J");
      
        google.maps.event.addListener(edificioJ,'click',()=>{
          infoWindowJ.open(map,edificioJ);
      });



       // Edificio CUIT
    const edificioCUIT = new google.maps.Marker({
        position: Edif_CUIT,
        map: map,
        icon:'http://localhost:3001/web/images/CUIT.png'
      });
      Var = infoWindowCUIT= new google.maps.InfoWindow();
      infoWindowCUIT.setPosition(Edif_CUIT);
      infoWindowCUIT.setContent("Edificio CUIT");
      
        google.maps.event.addListener(edificioCUIT,'click',()=>{
          infoWindowCUIT.open(map,edificioCUIT);
      });


      // Edificio Monumento
    const edificioMONU = new google.maps.Marker({
        position: Edif_MONU,
        map: map,
        icon:'http://localhost:3001/web/images/MONU.png'
      });
      Var = infoWindowMONU= new google.maps.InfoWindow();
      infoWindowMONU.setPosition(Edif_MONU);
      infoWindowMONU.setContent("Edificio MONUMENTAL");
      
        google.maps.event.addListener(edificioMONU,'click',()=>{
          infoWindowMONU.open(map,edificioMONU);
      });
      
      


}
