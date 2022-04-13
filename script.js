const imageInput = document.querySelector("#imageInput");
var uploaded_image =""; //store it in database later 
imageInput.addEventListener("change" ,function(){
    const reader = new FileReader();
    reader.addEventListener("load",() =>{
       uploaded_image = reader.result;
       document.querySelector("#displayImage").style.backgroundImage ='url('+uploaded_image+')';
    });
    reader.readAsDataURL(this.files[0]);
})