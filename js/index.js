let formChecked = false

function checkClick(check, checked){
    let checkBox = document.querySelector(".checkbox")
    checkBox.src = formChecked ? check : checked
    formChecked = !formChecked
    console.log(formChecked)
}
