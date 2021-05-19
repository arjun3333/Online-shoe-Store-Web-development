function ValidateForm(form){
    var x = document.getElementById("query3").required;
    document.getElementById("query3").innerHTML = x;

    ErrorText= "";
    if ( ( form.gender[0].checked == false ) && ( form.gender[1].checked == false ))
    {
    alert ( "Please choose your Gender" );
    return false;
    }
    if (ErrorText= "") { form.submit() }
    }
