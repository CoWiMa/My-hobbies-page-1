menu_list_array = ["Veg Margherita Pizza","Cauliflower Thin Crust Pizza", "Neapolitan Pizza", "St. Louis Pizza"];

function getmenu(){
var htmldata = "";
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu  
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
var imgtags='<img id="im1" src="https://snehalbsawant.github.io/ADV-C79/images/pizza.png"/>'
menu_list_array.sort();
        htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_topping(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
