$(function (){
  $("#btn").click(function (){
                    
    var from, to, fcountry,tcountry,amt,cnv;
      
      
    fcountry = $("#sourceCurr").val();
    tcountry = $("#destCurr").val();
    amt = $("#amount").val();
        
    //Only get 1000 api requests a month
	//exposing my appid for all in the world to see
    $.getJSON("https://openexchangerates.org/api/latest.json?app_id=3ebaec61eb9a420f98bfc831e2e960d7",function(json){
    from = Number(json.rates[fcountry]);
    to = Number(json.rates[tcountry]);
    cnv = amt/from*to;
    console.log(from);
    console.log(to);
    console.log(cnv);
	message = cnv.toFixed(2);
	
    window.alert(message.concat(tcountry));
                    
    });
    
                    
      
                              
                              
    }
    );
}
);
