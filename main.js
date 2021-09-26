var concept=["prime numbers", "composite numbers", "0 and 1", "circles", "fractals" ];
var images=["https://sciencenotes.org/wp-content/uploads/2021/06/Prime-Numbers-to-100.png", "https://cdn1.byjus.com/wp-content/uploads/2020/07/Composite-Numbers.png", "https://lh3.googleusercontent.com/proxy/v4fuGfvt2whDZ6pMgp7mAD1rOzNAhsn7MOCyFKNN7Zkvvx0veXm4KpnMGf9z8d1Qx3nQSt3gIb4acIdb0qsrGzBZRNSRWCkfMde0TZcNU30IkVbr0TWoArmLNCijm1KpRgyDqtUUjdLoMQLkLgTgXgeJAQs", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56CnuNMqSWDMsNweJVgfZffJJ5p_bY5XsuqXMMN22JnGhpRCjaVVnkYCv1QCLpIYeGHY&usqp=CAU", "https://users.math.yale.edu/public_html/People/frame/Fractals/Vlinders.gif"];
var index=0;
function next_topic()
{
   index=index+1;
   var length_of_array=concept.length;
if (index == length_of_array)
{
    index=0;

}
document.getElementById("advanced_math_image").src=images[index];
document.getElementById("advanced_math_learning").innerHTML=concept[index];
}
