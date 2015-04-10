
  function data()
  {
    var original = $("#ValueSelect").find("input");
    var form = $("form").find("input");
   // alert(original[0].value);
   // alert(form.length);
    for(var i=0; i<original.length ; i++)
    {
      form[i].value = original[i].value;
    }
      
  }
  

  $(function() {
    $( "#v-Living_value-0" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Living_value0" ).val(  ui.value );
        data();
      }
    });
    $( "#Living_value0" ).val(  $( "#v-Living_value-0" ).slider( "value" ) );
  });
    $(function() {
    $( "#v-Living_value-1" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Living_value1" ).val(  ui.value );
        data();
      }
    });
    $( "#Living_value1" ).val(  $( "#v-Living_value-1" ).slider( "value" ) );
  });
    $(function() {
    $( "#v-Living_value-2" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Living_value2" ).val(  ui.value );
        data();
      }
    });
    $( "#Living_value2" ).val(  $( "#v-Living_value-2" ).slider( "value" ) );
  });    
    $(function() {
    $( "#w-Living_value" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Living_weight" ).val(  ui.value );
        data();
      }
    });
    $( "#Living_weight" ).val(  $( "#w-Living_value" ).slider( "value" ) );
  }); 


  $(function() {
    $( "#v-Development_value-0" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Development_value0" ).val(  ui.value );
        data();
      }
    });
    $( "#Development_value0" ).val(  $( "#v-Development_value-0" ).slider( "value" ) );
  });
    $(function() {
    $( "#v-Development_value-1" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Development_value1" ).val(  ui.value );
        data();
      }
    });
    $( "#Development_value1" ).val(  $( "#v-Development_value-1" ).slider( "value" ) );
  });
    $(function() {
    $( "#v-Development_value-2" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Development_value2" ).val(  ui.value );
        data();
      }
    });
    $( "#Development_value2" ).val(  $( "#v-Development_value-2" ).slider( "value" ) );
  });    
    $(function() {
    $( "#w-Development_value" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Development_weight" ).val(  ui.value );
        data();
      }
    });
    $( "#Development_weight" ).val(  $( "#w-Development_value" ).slider( "value" ) );
  }); 
  



      $(function() {
    $( "#v-Climate_value-0" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Climate_value0" ).val(  ui.value );
        data();
      }
    });
    $( "#Climate_value0" ).val(  $( "#v-Climate_value-0" ).slider( "value" ) );
  });
    $(function() {
    $( "#v-Climate_value-1" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Climate_value1" ).val(  ui.value );
        data();
      }
    });
    $( "#Climate_value1" ).val(  $( "#v-Climate_value-1" ).slider( "value" ) );
  });
    $(function() {
    $( "#v-Climate_value-2" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Climate_value2" ).val(  ui.value );
        data();
      }
    });
    $( "#Climate_value2" ).val(  $( "#v-Climate_value-2" ).slider( "value" ) );
  });    
    $(function() {
    $( "#w-Climate_value" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Climate_weight" ).val(  ui.value );
        data();
      }
    });
    $( "#Climate_weight" ).val(  $( "#w-Climate_value" ).slider( "value" ) );
  }); 





      $(function() {
    $( "#v-Security_value-0" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Security_value0" ).val(  ui.value );
        data();
      }
    });
    $( "#Security_value0" ).val(  $( "#v-Security_value-0" ).slider( "value" ) );
  });
    $(function() {
    $( "#v-Security_value-1" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Security_value1" ).val(  ui.value );
        data();
      }
    });
    $( "#Security_value1" ).val(  $( "#v-Security_value-1" ).slider( "value" ) );
  });
    $(function() {
    $( "#v-Security_value-2" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Security_value2" ).val(  ui.value );
        data();
      }
    });
    $( "#Security_value2" ).val(  $( "#v-Security_value-2" ).slider( "value" ) );
  });    
    $(function() {
    $( "#w-Security_value" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Security_weight" ).val(  ui.value );
        data();
      }
    });
    $( "#Security_weight" ).val(  $( "#w-Security_value" ).slider( "value" ) );
  }); 





      $(function() {
    $( "#v-Tuition_value-0" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Tuition_value0" ).val(  ui.value );
        data();
      }
    });
    $( "#Tuition_value0" ).val(  $( "#v-Tuition_value-0" ).slider( "value" ) );
  });
    $(function() {
    $( "#v-Tuition_value-1" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Tuition_value1" ).val(  ui.value );
        data();
      }
    });
    $( "#Tuition_value1" ).val(  $( "#v-Tuition_value-1" ).slider( "value" ) );
  });
    $(function() {
    $( "#v-Tuition_value-2" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Tuition_value2" ).val(  ui.value );
        data();
      }
    });
    $( "#Tuition_value2" ).val(  $( "#v-Tuition_value-2" ).slider( "value" ) );
  });    
    $(function() {
    $( "#v-Tuition_value-3" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Tuition_value3" ).val(  ui.value );
        data();
      }
    });
    $( "#Tuition_value3" ).val(  $( "#v-Tuition_value-3" ).slider( "value" ) );
  });       
    $(function() {
    $( "#w-Tuition_value" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Tuition_weight" ).val(  ui.value );
        data();
      }
    });
    $( "#Tuition_weight" ).val(  $( "#w-Tuition_value" ).slider( "value" ) );
  }); 





      $(function() {
    $( "#v-Major_value-0" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Major_value0" ).val(  ui.value );
        data();
      }
    });
    $( "#Major_value0" ).val(  $( "#v-Major_value-0" ).slider( "value" ) );
  });
    $(function() {
    $( "#v-Major_value-1" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Major_value1" ).val(  ui.value );
        data();
      }
    });
    $( "#Major_value1" ).val(  $( "#v-Major_value-1" ).slider( "value" ) );
  });
    $(function() {
    $( "#v-Major_value-2" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Major_value2" ).val(  ui.value );
        data();
      }
    });
    $( "#Major_value2" ).val(  $( "#v-Major_value-2" ).slider( "value" ) );
  });    
    $(function() {
    $( "#v-Major_value-3" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Major_value3" ).val(  ui.value );
        data();
      }
    });
    $( "#Major_value3" ).val(  $( "#v-Major_value-3" ).slider( "value" ) );
  });      
    $(function() {
    $( "#v-Major_value-4" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Major_value4" ).val(  ui.value );
        data();
      }
    });
    $( "#Major_value4" ).val(  $( "#v-Major_value-4" ).slider( "value" ) );
  }); 
    $(function() {
    $( "#v-Major_value-5" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Major_value5" ).val(  ui.value );
        data();
      }
    });
    $( "#Major_value5" ).val(  $( "#v-Major_value-5" ).slider( "value" ) );
  });      
    $(function() {
    $( "#w-Major_value" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Major_weight" ).val(  ui.value );
        data();
      }
    });
    $( "#Major_weight" ).val(  $( "#w-Major_value" ).slider( "value" ) );
  }); 


  $(function() {
    $( "#v-Career_value-0" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Career_value0" ).val(  ui.value );
        data();
      }
    });
    $( "#Career_value0" ).val(  $( "#v-Career_value-0" ).slider( "value" ) );
  });
    $(function() {
    $( "#v-Career_value-1" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Career_value1" ).val(  ui.value );
        data();
      }
    });
    $( "#Career_value1" ).val(  $( "#v-Career_value-1" ).slider( "value" ) );
  });
    $(function() {
    $( "#v-Career_value-2" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Career_value2" ).val(  ui.value );
        data();
      }
    });
    $( "#Career_value2" ).val(  $( "#v-Career_value-2" ).slider( "value" ) );
  });    
    $(function() {
    $( "#w-Career_value" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Career_weight" ).val(  ui.value );
        data();
      }
    });
    $( "#Career_weight" ).val(  $( "#w-Career_value" ).slider( "value" ) );
  }); 


  $(function() {
    $( "#v-Immigration_value-0" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Immigration_value0" ).val(  ui.value );
        data();
      }
    });
    $( "#Immigration_value0" ).val(  $( "#v-Immigration_value-0" ).slider( "value" ) );
  });
    $(function() {
    $( "#v-Immigration_value-1" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Immigration_value1" ).val(  ui.value );
        data();
      }
    });
    $( "#Immigration_value1" ).val(  $( "#v-Immigration_value-1" ).slider( "value" ) );
  });
    $(function() {
    $( "#v-Immigration_value-2" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Immigration_value2" ).val(  ui.value );
        data();
      }
    });
    $( "#Immigration_value2" ).val(  $( "#v-Immigration_value-2" ).slider( "value" ) );
  });    
    $(function() {
    $( "#w-Immigration_value" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#Immigration_weight" ).val(  ui.value );
        data();
      }
    });
    $( "#Immigration_weight" ).val(  $( "#w-Immigration_value" ).slider( "value" ) );
  });     



  
  $(document).ready(function() {
      $("#LivingStandard").show();


      $("#before").click(function(){

      
        if($("#LivingStandard").is(":visible"))
          alert("Nothing before this page !")
        if($("#Climate").is(":visible"))
          $("#Climate").hide().prev().show();
        if($("#Security").is(":visible"))
          $("#Security").hide().prev().show();
        if($("#Tuition").is(":visible"))
          $("#Tuition").hide().prev().show();       
        if($("#CareerImmigration").is(":visible"))
          $("#CareerImmigration").hide().prev().show();              

      });

      $("#next").click(function(){

        if($("#CareerImmigration").is(":visible"))
          alert("Nothing next this page, please submmit!")
        if($("#Tuition").is(":visible"))
          $("#Tuition").hide().next().show();
        if($("#Security").is(":visible"))
          $("#Security").hide().next().show();
        if($("#Climate").is(":visible"))
          $("#Climate").hide().next().show();
        if($("#LivingStandard").is(":visible"))
          $("#LivingStandard").hide().next().show();               
      })

      $("#n1").click(function(){
        $("#ValueSelect").children().hide();
        $("#LivingStandard").show();
      })  
      $("#n2").click(function(){
        $("#ValueSelect").children().hide();
        $("#Climate").show();
      }) 
      $("#n3").click(function(){
        $("#ValueSelect").children().hide();
        $("#Security").show();
      })       
      $("#n4").click(function(){
        $("#ValueSelect").children().hide();
        $("#Tuition").show();
      })       
      $("#n5").click(function(){
        $("#ValueSelect").children().hide();
        $("#CareerImmigration").show();
      })       
  })
  