function calculate()
{
    var name=document.getElementById("name");
    var age=document.getElementById("age");
    var fee=document.getElementById("d_fee");
    var int=document.getElementById("int_bill");
    var info=parseInt(int.value)*12;
    if(parseInt(age.value)>50 && ( parseInt(fee.value)+(12*parseInt(int.value)) ) >20000)
    {
        var inc=parseInt(info)*0.2;
        document.getElementById("inc").innerHTML="Name: "+name.value+"<br>"+"Yearly internet bill: "+info.toString()+"<br>"+" Incentive amount: "+inc.toString()+"<br>";
    }
    else if(parseInt(age.value)>30 && (parseInt(fee.value)/12 )>250)
    {
        inc=parseInt(info)*0.15;
        document.getElementById("inc").innerHTML="Name: "+name.value+"<br>"+"Yearly internet bill: "+info.toString()+"<br>"+" Incentive amount: "+inc.toString()+"<br>";
    }
    else
    {
        inc=0;
        document.getElementById("inc").innerHTML="Name: "+name.value+"<br>"+"Yearly internet bill: "+info.toString()+"<br>"+" Incentive amount: "+inc.toString()+"<br>";
    }
}