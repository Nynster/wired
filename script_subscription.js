let e=true;
function change1(){
    if(e){
        document.getElementById("password_one_form_subscription").setAttribute("type","text");
        document.getElementById("eye_one_form_subscription").src="pictures/eye.png";
        e=false;
    }else{
        document.getElementById("password_one_form_subscription").setAttribute("type","password");
        document.getElementById("eye_one_form_subscription").src="pictures/eye_barre.png";
        e=true;
    }
}

let i=true;
function change2(){
    if(i){
        document.getElementById("password_two_form_subscription").setAttribute("type","text");
        document.getElementById("eye_two_form_subscription").src="pictures/eye.png";
        i=false;
    }else{
        document.getElementById("password_two_form_subscription").setAttribute("type","password");
        document.getElementById("eye_two_form_subscription").src="pictures/eye_barre.png";
        i=true;
    }
}