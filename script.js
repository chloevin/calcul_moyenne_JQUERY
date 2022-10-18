$(document).ready(function(){
   
    var T;
    var r1,r2,res;
     r1 = Number($('#table tr:first-child() td:last-child()').text());
     r2 =Number($('#table tr:nth-child(2) td:last-child()').text());
     res=r1+r2;
     $('#moyenne').text(res/2); 
    
    
    
    // button ajouter
    $('#Aj').click(function(e){
        var nom = $('#nom').val();
     var note = $('#note').val();
    if(isNaN(nom) && note >= 0 && note <= 20 )
    {
        var row = "<tr>"
              +"<td>"+nom+"</td>"
              +"<td>"+note+"</td>"
              +"</tr>";
    $("#table table").append(row);
    
    res+=Number($('#table tr:last-child() td:last-child()').text());
    $('#table table tr:nth-child(odd)').css('background','#CCCCFF');
    $('#table table tr:nth-child(even)').css('background','#9966ff');
    
    
    var len = $('#table  tr').length;
    $('#moyenne').text(res/len); 
    
    } 
    else
    {
        alert("un champ invalide");
      e.preventDefault();
    }
    });
    
    });    
    