// check all field
function checkValidate(input, err) {
    if (input.value === "") {
        document.getElementById(err).innerHTML = "Please fill the Field!!!"
    }
    return false
}

// for check name
function checkusername(input, err) {
    let nameptn = /^[a-z]*$/i
    if (!nameptn.test(input.value)) {
        document.getElementById(err).innerHTML = "Invalid value!!!!"
    } else if (input.value.length < 3) {
        document.getElementById(err).innerHTML = "Enter atleast 3 character"
    } else {
        document.getElementById(err).innerHTML = ""
    }
}

// foreach method 
let myinp = document.querySelectorAll(".namefield")
myinp.forEach(inp =>
    inp.addEventListener("input", () => {
        inp.value = inp.value.toUpperCase()
    })
)

// input event for access value
function allowed(fname) {
    fname.value = fname.value.replace(/[\d]/, "")
}

// mobile no
function checkmobileno(inp, err, len) {
    let ptn = /^[0-9]*$/, strt = /^[6-9]/
    if (!ptn.test(inp.value)) {
        document.getElementById(err).innerHTML = "Invalid number!!!"
    } else if (!strt.test(inp.value)) {
        document.getElementById(err).innerHTML = "Number start with 6 to 9 digit"
    } else if (inp.value.length < len) {
        document.getElementById(err).innerHTML = "Enter 10 Digits"
    } else {
        document.getElementById(err).innerHTML = ""
    }
}
// pincode
function checkpin(inp, err, len) {
    let ptn = /^[0-9]*$/
    if (!ptn.test(inp.value)) {
        document.getElementById(err).innerHTML = "Invalid Pin!!!"
    } else if (inp.value.length < len) {
        document.getElementById(err).innerHTML = "Enter 6 Digits"
    } else {
        document.getElementById(err).innerHTML = ""
    }
}

// email validation
function emailvalid(inp, err) {
    // let ptn = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let ptn = /^[a-zA-Z0-9$%&_\.]+@[a-zA-Z]+(\.[a-z]{2,3})+$/i
    if (!ptn.test(inp.value)) {
        document.getElementById(err).innerHTML = "Invalid Email"
    } else {
        document.getElementById(err).innerHTML = ""
    }
}

// password valid
function passwordcheck(inp, err) {
    let ptn = /^[A-Z][a-z0-9]+[@$%&_]+[a-z0-9]*$/;
    if (!ptn.test(inp.value)) {
        document.getElementById(err).innerHTML = "Password has Uppercase, lowercase, Digits and Special character like @,$,%,& and first letter must be Uppercase"
        document.getElementById(err).style.fontSize = "13px"
    } else {
        document.getElementById(err).innerHTML = ""
    }
}

function comparePassword(pass, cpass, err) {
    let pwd = document.getElementById(pass)
    if (cpass.value != pwd.value) {
        document.getElementById(err).innerHTML = "Password and compare password not match"
    } else {
        document.getElementById(err).innerHTML = ""
    }
}
// for city
function selectval(sel, err) {
    if (sel.value === "-1") {
        document.getElementById(err).innerHTML = "Select value!!!"
    } else {
        document.getElementById(err).innerHTML = ""
    }
    return false
}
// for radio
function checkedOption(sel, err) {
    if (sel.checked === false) {
        document.getElementById(err).innerHTML = "Select value!!!"
    } else {
        document.getElementById(err).innerHTML = ""
    }
    return false
}