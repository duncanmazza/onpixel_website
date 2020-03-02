function addForm() {
    console.log("here....")
    let formElement = document.createElement("form");
    let inputElement = document.createElement("input");
    formElement.setAttribute("class", "form-inline d-flex");
    inputElement.setAttribute("class", "form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0");
    inputElement.setAttribute("id", "inputEmail");
    inputElement.setAttribute("placeholder", "Keep me in the loop");
    inputElement.setAttribute("type", "email");
    formElement.appendChild(inputElement);
    document.getElementById("formParent").appendChild(formElement);
}