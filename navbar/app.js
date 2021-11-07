//javascript file for Navbar responsiveness exercise 


var tog = true;


function myToggler(x){
        const y = document.querySelector(".navBar")

        if(tog){
            y.style.height = "48vh";
        } else {
            y.style.height = "100px";
        }

        x.classList.toggle("change");


        tog = !tog;
        console.log(tog);
}