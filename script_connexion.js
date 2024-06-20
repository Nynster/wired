let e=true;
function change(){
    if(e){
        document.getElementById("password_form_index").setAttribute("type","text");
        document.getElementById("eye_form_index").src="pictures/eye.png";
        e=false;
    }else{
        document.getElementById("password_form_index").setAttribute("type","password");
        document.getElementById("eye_form_index").src="pictures/eye_barre.png";
        e=true;
    }
}