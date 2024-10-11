$(function(){
$("#shippingDetails ").validate({
    //rules of validation
    rules:{
        name:{
            name:true,
            minlength:5
        },
        email:{
            email:true
        },
        address:{
            address:true
        },
        town:{
            town:true
        },
        code:{
            code:true
        }
    },
    //messages appearing if validation fails
    messages: {
        name:{
            required: "Please enter your name",
            minlength:"Name must be at least 5 characters"
        },
      
        email:"Please enter your email",
        address:"Please enter your address",
        town:"Please enter your city/town",
        code:"Please enter your eir code",
        
        
        
    },
    submitHandler: function(form){
        form.submit();
    }
});
});
