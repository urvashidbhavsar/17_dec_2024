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