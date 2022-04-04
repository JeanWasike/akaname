$(function(){
    $("#wizard").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 500,
        labels: {
            finish: "Submit",
            next: "Next",
            previous: "Back"
        }
    });	

    $('#wizard').show(function(){
        $('#result').hide();
    });

    $('#wizard').submit(function(event){
        $('#wizard').hide();
        $('#result').show();
        var x=$('#wizard').serializeArray();
        var gender= x[0].value;
        var dob= new Date(x[1].value);
        var day=dob.getDay();
        var akaname;

        if(gender=="male"){
            if(day==0){
                akaname="Kwasi";
            }else if(day==1){
                akaname="Kwadwo";
            }else if(day==2){
                akaname="Kwabena";
            }else if(day==3){
                akaname="Kwaku";
            }else if(day==4){
                akaname="Yaw";
            }else if(day==5){
                akaname="Kofi";
            }else if(day==6){
                akaname="Kwame";
            }
        }else if(gender=="female"){
            if(day==0){
                akaname="Akosua";
            }else if(day==1){
                akaname="Adwoa";
            }else if(day==2){
                akaname="Abenaa";
            }else if(day==3){
                akaname="Akua";
            }else if(day==4){
                akaname="Yaa";
            }else if(day==5){
                akaname="Afua";
            }else if(day==6){
                akaname="Ama";
            }
        }



        $('#akaname').append(akaname);
        /*$.each(x, function(i, field) {
           $("#akaname").append(
                    field.value );

        });*/
        console.log(akaname);
        //console.log(dob);
            event.preventDefault();
      });
      
    $('[href="#finish"]').click(function() {
        $('#wizard').submit();
        
    });

    
    $('.wizard > .steps li a').click(function(){
        $(this).parent().addClass('checked');
        $(this).parent().prevAll().addClass('checked');
        $(this).parent().nextAll().removeClass('checked');
    });
    // Custome Jquery Step Button
    $('.forward').click(function(){
        $("#wizard").steps('next');
    })
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    })

    // Select Dropdown
    $('html').click(function() {
        $('.select .dropdown').hide(); 
    });
    $('.select').click(function(event){
        event.stopPropagation();
    });
    $('.select .select-control').click(function(){
        $(this).parent().next().toggle();
    })    
    $('.select .dropdown li').click(function(){
        $(this).parent().toggle();
        var text = $(this).attr('rel');
        $(this).parent().prev().find('div').text(text);
    })
    
})

/*	$("#finish").click(function(event){
    alert( "Handler for .submit() called." );
event.preventDefault();
});*/
    
        //var gender= document.getElementById('gender');
            //var dob= document.getElementById('dob');
                //console.log(gender);
                //console.log(dob);