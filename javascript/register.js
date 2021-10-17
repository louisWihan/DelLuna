var button = document.getElementById('btn')
button.onclick = function(){
    
    var username = document.getElementById('username')
    var firstName = document.getElementById('firstName')
    var lastName = document.getElementById('lastName')
    var email = document.getElementById('email')
    var pass = document.getElementById('password')
    var reconPass = document.getElementById('reconPassword')
    var gender1 = document.getElementById("gender1");
    var gender2 = document.getElementById("gender2");
    var age = document.getElementById('age')
    var address = document.getElementById('address')
    var term = document.getElementById('checkbox')


    if(username.value.length == 0 && firstName.value.length == 0 && lastName.value.length == 0 && email.value.length == 0 && pass.value.length == 0 && !gender1.checked && !gender2.checked && age.value == 0 && address.value.length == 0 && term.checked == false){

    }else{
        //username validation
        //            console.log('lol' + username)
        //            alert(username.value)
        if (username.value.length == 0) {
            alert('the username must not be empty')
            return
        }else if(username.value.length <= 5){
            alert('the username must have atleast 5 characters')
            return
        }

        //fullname validation
        if (firstName.value.length == 0) {
            alert('the firstName must not be empty')
            return
        }else if(firstName.value.length < 3){
            alert('the firstName must have atleast 3 characters')
            return
        }

        if (lastName.value.length == 0) {
            alert('the lastName must not be empty')
            return
        }else if(lastName.value.length < 3){
            alert('the lastName must have atleast 3 characters')
            return
        }



        //jangan pakai regex nanti gak dinilai
        if(email.value.length == 0){
            alert('email must not be empty')
            return
        }else if( email.value.includes("@gmail.com") == false && email.value.includes("@yahoo.com") == false ){
            alert('email must have @gmail.com or @yahoo.com')
            return
        }

        //validasi password
        if(pass.value.length == 0){
            alert('the password cannot be empty')
            return
        }else if(pass.value.length < 8){
            alert('the password must have atleast 8 characters')
            return
        }else{


            //buat check kalau password ada ! / $ / . / @ 
            var checkSyntax = false
            var checkNumb = false
            var checkAlphabet = false
            
            for( let i = 0; i < pass.value.length; i++ ){
                
                if( pass.value.charCodeAt(i) >= 48 && pass.value.charCodeAt(i) <= 57 ){
                    checkNumb = true
                }else if( pass.value.charCodeAt(i) >= 97 && pass.value.charCodeAt(i) <= 122 ){
                    checkAlphabet = true
                }else if( pass.value.charCodeAt(i) >= 65 && pass.value.charCodeAt(i) <= 90 ){
                    checkAlphabet = true
                }else if( pass.value.charCodeAt(i) == 33 || pass.value.charCodeAt(i) == 36 || pass.value.charCodeAt(i) == 46 || pass.value.charCodeAt(i) == 64 ){
                    checkSyntax = true
                }
                
            }

            if( checkSyntax == false || checkNumb == false || checkAlphabet == false ){
                if( checkSyntax == false && checkNumb == false ){
                    alert('the password must contain number and !/$/./@')
                    return
                }else if( checkSyntax == false && checkAlphabet == false ){
                    alert('the password must contain alphaber and !/$/./@')
                    return
                }else if( checkAlphabet == false && checkNumb == false  ){
                    alert('the password must contain alphabet and number')
                    return
                }else if( checkSyntax == false ){
                    alert('the password must contain !/$/./@')
                    return
                }else if( checkNumb == false ){
                    alert('the password must contain number')
                    return
                }else if( checkAlphabet == false ){
                    alert('the password must contain alphabet')
                    return
                }
            }

            if(reconPass.value.length == 0){
                alert('the password confirmation cannot be empty')
                return
            }else if(pass.value != reconPass.value){
                alert('the password confirmation must same with password')
                return
            }
        }

        //validasi gender
        if (!gender1.checked && !gender2.checked) { //gender1 & 2 false
            alert("Gender cannot be emtpy")
            return
        }

        //validasi umur
        if(age.value == 0){
            alert('age cannot be 0')
            return
        }

        //validasi address
        if(address.value.length == 0){
            alert('address cannot be empty')
            return
        }

        //validasi term&condition
        // alert(term.checked)
        if(term.checked == false){
            alert('you must agree to temrs and condition to register to our website')
            return
        }
    }

    

}