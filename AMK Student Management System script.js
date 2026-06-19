let students = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = -1;

// Save Data
function saveData() {
    localStorage.setItem("students", JSON.stringify(students));
}

// Add / Update Student
function addStudent() {

    let name = document.getElementById("name").value.trim();
    let course = document.getElementById("course").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || course === "" || email === "") {
        alert("Please fill all fields");
        return;
    }

    if (editIndex === -1) {
        students.push({ name, course, email });
    } else {
        students[editIndex] = { name, course, email };
        editIndex = -1;
    }

    document.getElementById("name").value = "";
    document.getElementById("course").value = "";
    document.getElementById("email").value = "";

    saveData();
    displayStudents();
}

// Display Students
function displayStudents() {

    let table = document.getElementById("studentList");
    table.innerHTML = "";

    students.forEach((student, index) => {

        table.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>${student.email}</td>

            <td>
                <button class="action-btn edit"
                    onclick="editStudent(${index})">
                    Edit
                </button>

                <button class="action-btn delete"
                    onclick="deleteStudent(${index})">
                    Delete
                </button>
            </td>

        </tr>
        `;

    });

    document.getElementById("total").innerText = students.length;
}

// Delete Student
function deleteStudent(index){

    if(confirm("Delete this student?")){
        students.splice(index,1);
        saveData();
        displayStudents();
    }

}

// Edit Student
function editStudent(index){

    document.getElementById("name").value = students[index].name;
    document.getElementById("course").value = students[index].course;
    document.getElementById("email").value = students[index].email;

    editIndex = index;

}

// Search Student
function searchStudent(){

    let value = document
        .getElementById("search")
        .value
        .toLowerCase();

    let rows = document.querySelectorAll("#studentList tr");

    rows.forEach(row=>{

        row.style.display =
        row.innerText.toLowerCase().includes(value)
        ? ""
        : "none";

    });

}

// Load Data
displayStudents();