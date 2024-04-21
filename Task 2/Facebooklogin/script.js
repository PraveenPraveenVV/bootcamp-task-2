$(document).ready(function(){
    $('#form').validate({
        rules:{
            fname : {
                required : true,
                minlength:5,
            },
            sname: {
                required : true,
                minlength:5,
            },
            email: {
                required : true,
                minlength:10,
            },
            pw: {
                required : true,
                minlength:5,
            },
        }
    })
});