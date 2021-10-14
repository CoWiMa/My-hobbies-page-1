var names_of_people_array = [];
function submit()
{
	var guest_name = document.getElementById("name1").value;
	names_of_people_array.push(guest_name);
	document.getElementById("display_name").innerHTML = names_of_people_array.toString();
}
function searching()
{
	var name = document.getElementById("srch").value;
	for (let index = 0; index < names_of_people_array.length; index++) {
		if(name== array[index])
		{
			document.getElementById("p2").innerHTML = "found";
		}	
	}
}