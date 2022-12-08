
function Validate() {
    // urutan terakhir untuk conditional  

        // step.1 VAlidate Inout value
        let inputUsername = username.current.value
        let inputEmail = email.current.value
        let inputPassword = password.current.value 

        // Step2 Validate input value
        if(inputUsername.length === 0 || inputPassword.length === 0 || inputEmail.length === 0) throw {message: 'Field cannot blank'}
        if(!inputEmail.includes("@") || inputEmail.length < 10 ) throw {message: 'email must contain @ and contain at least 10 char'}
        if(inputPassword.length < 8 ) throw {message: 'Password at least 8 character'}

        // validate using regex (regular expression)
        let regex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
        if(!regex.test(inputPassword)) throw {message: 'Password mus contains any number'}
        
        setDisabledButton(true) 
        let checkEmail = await axios.get(`https://my-json-server.typicode.com/12rgilang/jsonserver-deployment-trial/users?email=${inputEmail}`)
        let checkUsername = await axios.get(`https://my-json-server.typicode.com/12rgilang/jsonserver-deployment-trial/users?username=${inputUsername}`)

            if(checkEmail.data.length === 0 && checkUsername.data.length === 0){ //
                //POST
                let register = await axios.post('https://my-json-server.typicode.com/12rgilang/jsonserver-deployment-trial/users', {username: inputUsername, email: inputEmail, password: inputPassword})
                toast.success('Register Succesfull') // ini memunculkan alert menggunakan npm toast
                setMessage('') // seteleah inputnpendaftaran selesai maka pemberitahuan akan kembali kosong
    }
}

export default Validate;