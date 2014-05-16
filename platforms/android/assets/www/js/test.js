$(function(){
    var elems = $('#test').children('li').remove();
    elems.sort(function(a,b){
        var aId = parseInt(a.id);
        var bId = parseInt(b.id);
        
        var aPart = aId.split(" ");
        var aPartDate = aPart[0].split("-");
        var aPartTime = aPart[1].split(":");
        
        var bPart = bId.split(" ");
        var bPartDate = bPart[0].split("-");
        var bPartTime = bPart[1].split(":");
        
        if ( aPartDate[0] < bPartDate[0] ){// previous year
		  return parseInt(a.id) > parseInt(b.id);
    	} else if ( ( frstDeadlinePart[0] == scndDeadlinePart[0] ) && ( frstDeadlinePart[1] < scndDeadlinePart[1])){ // previous month
    		return false;
    	} else if ( ( frstDeadlinePart[0] == scndDeadlinePart[0] ) && ( frstDeadlinePart[1] == scndDeadlinePart[1]) && (frstDeadlinePart[2] < scndDeadlinePart[2])){// previous date
    		return false;
    	} else if ( ( frstDeadlinePart[0] == scndDeadlinePart[0] ) && ( frstDeadlinePart[1] == scndDeadlinePart[1]) && (frstDeadlinePart[2] == scndDeadlinePart[2]) && (frstDeadlineTime[0] < scndDeadlineTime[0])){ // previous hour
    		return  false;
    	} else if ( ( frstDeadlinePart[0] == scndDeadlinePart[0] ) && ( frstDeadlinePart[1] == scndDeadlinePart[1]) && (frstDeadlinePart[2] == scndDeadlinePart[2]) && (frstDeadlineTime[0] == scndDeadlineTime[0]) && (frstDeadlineTime[1] < scndDeadlineTime[1])) { // previous minute
    		return false;
    	} else {
    		return true;
    	}	
            return parseInt(a.id) > parseInt(b.id);
        });
    $('#test').append(elems);
});