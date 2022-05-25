var selectedRow= null;

function onFormSubmit(e)
{
    event.preventDefault();
    var formData= readFormData();
    if(selectedRow==null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
     resetForm();
}
function readFormData()
{
    var formData= {};
    formData["name"]= document.getElementById("name").value;
    formData["empcode"]= document.getElementById("empcode").value; 
    formData["salary"]= document.getElementById("salary").value;
    formData["city"]= document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data){
    var table= document.getElementById("emplist").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    var cell1=newRow.insertCell(0);
        cell1.innerHTML=data.name;
    var cell2=newRow.insertCell(1);
        cell2.innerHTML=data.empcode;
    var cell3=newRow.insertCell(2);
        cell3.innerHTML=data.salary;
    var cell4=newRow.insertCell(3);
        cell4.innerHTML=data.city;
    var cell5=newRow.insertCell(4);
        cell5.innerHTML=`<button onClick="onEdit(this)">Edit</button>
                             <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("name").value=selectedRow.cells[0].innerHTML;
    document.getElementById("empcode").value=selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value=selectedRow.cells[2].innerHTML;
    document.getElementById("city").value=selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.name;
    selectedRow.cells[1].innerHTML=formData.empcode;
    selectedRow.cells[2].innerHTML=formData.salary;
    selectedRow.cells[3].innerHTML=formData.city;
}

function onDelete(td){
    if(confirm("do yo want to delet?")){
        row=td.parentElement.parentElement;
        document.getElementById("emplist").deleteRow(row.rowIndex);
    }
    resetForm();
}
function resetForm(){
    document.getElementById("name").value='';
    document.getElementById("empcode").value='';
    document.getElementById("salary").value='';
    document.getElementById("city").value='';
}
// function validate()
// {
//     isValid=true;
//     if(document.getElementById("name").value==""){
//         isValid=false;
//         document.getElementById("nameValidationError")
//     }
// }