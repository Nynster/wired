var pass;
var  cf_pass  
     function change()
     {
    
     pass = document.getElementById('password_one_form_subscription').value;
     cf_pass = document.getElementById('password_two_form_subscription').value;
	 
	  if (pass != cf_pass) {
	  
     document.getElementById('message_form').innerHTML = "X";
	 }

   };