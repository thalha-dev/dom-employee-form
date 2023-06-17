let employeesArr = [];

const empName = document.getElementById("emp-name");
const empProfession = document.getElementById("emp-profession");
const empAge = document.getElementById("emp-age");
const errorMessage = document.getElementById("error-msg");
const successMessage = document.getElementById("success-msg");
const zeroMessage = document.getElementById("zero-emp");
const empForm = document.querySelector(".emp-form");
const empDetails = document.querySelector(".emp-details");

let currentId = 0;

empForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!empAge.value || !empProfession.value || !empAge.value) {
    errorMessage.style.display = "block";
  } else {
    zeroMessage.style.display = "none";
    successMessage.style.display = "block";
    errorMessage.style.display = "none";
    empDetails.style.display = "flex";
    const newRecord = {
      id: ++currentId,
      name: empName.value,
      profession: empProfession.value,
      age: empAge.value,
    };
    employeesArr.push(newRecord);
    clearDetails();
    renderDetails(employeesArr);
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".delete-btn")) {
    let empId = Number(e.target.getAttribute("emp-id"));
    employeesArr = employeesArr.filter((ob) => {
      if (ob.id !== empId) {
        return ob;
      }
    });

    clearDetails();
    renderDetails(employeesArr);
    successMessage.style.display = "none";
  }
});

function clearDetails() {
  empDetails.innerHTML = "";
}

function returnEmpDiv(employeeObject) {
  let { id, name, profession, age } = employeeObject;
  id = Number(id);
  const empDiv = document.createElement("div");
  empDiv.classList.add("emp");
  const element = `
          <div class="emp-detail">${id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name:&nbsp;${name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Profession:&nbsp;${profession}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Age:&nbsp;${age}</div>
          <button class="delete-btn" emp-id=${id} type="button">Delete User</button>`;
  empDiv.innerHTML = element;
  return empDiv;
}

function renderDetails(employeesArr) {
  if (employeesArr.length === 0) {
    zeroMessage.style.display = "block";
  }
  for (let i = 0; i < employeesArr.length; i++) {
    const empElement = returnEmpDiv(employeesArr[i]);
    empDetails.appendChild(empElement);
  }
}
