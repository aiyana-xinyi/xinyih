
function showDescription(descript){
	console.log("seen");
	$("#description").html("Description: " + descript);

}

function hideDescription(){
	$("#description").html();
}

function validate(){
	var txtDob = $("#txtDate").val();
	var dob = new Date(txtDob);
	if (dob>=new Date()){
		alert ("Date of Birth is not valid. Date has to be before today.");
		return false;
	}
	var phone = $("#phone").val();
	var allNum = isNaN(phone);
	if (allNum == false){
		alert("Phone number is not valid or not in valid format.");
		return false;
	}
	return true;
}