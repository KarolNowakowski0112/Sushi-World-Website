var slideIndex = 1;
var slides1 = document.getElementsByClassName("mySlides1");
var recipes1 = document.getElementsByClassName("myRecipes1");
var slides2 = document.getElementsByClassName("mySlides2");
var recipes2 = document.getElementsByClassName("myRecipes2");

showSlides1(slideIndex);
showSlides2(slideIndex);

function plusSlides1(n) {
    var new_idx = slideIndex += n;
    showSlides1(new_idx);
}

function plusSlides2(n) {
    var new_idx = slideIndex += n;
    showSlides2(new_idx);
}

function currentSlide1(n) {
    showSlides1(slideIndex = n);
}

function currentSlide2(n) {
    showSlides2(slideIndex = n);
}

function showSlides1(n) {
    var i;

    if (n > slides1.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides1.length}
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
        recipes1[i].style.display = "none";
    }

    slides1[slideIndex-1].style.display = "block";
}

function showSlides2(n) {
    var i;

    if (n > slides2.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides2.length}
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
        recipes2[i].style.display = "none";
    }

    slides2[slideIndex-1].style.display = "block";
}

function showRecipe1(idx){
    if (slides1[idx].style.filter == "brightness(0.4)"){
        slides1[idx].style.filter = "brightness(1)";
        recipes1[idx].style.display = "none";
    }
    else{
        slides1[idx].style.filter = "brightness(0.4)";
        recipes1[idx].style.display = "block";
    }
}

function showRecipe2(idx){
    if (slides2[idx].style.filter == "blur(3px)"){
        slides2[idx].style.filter = "blur(0px)";
        recipes2[idx].style.display = "none";
    }
    else{
        slides2[idx].style.filter = "blur(3px)";
        recipes2[idx].style.display = "block";
        href
    }
}

const cnt = document.querySelector("#addRecipe");
let ctr = 0;
let ctr2 = 0;

const btnAfter = document.querySelector("#add-after");
btnAfter.addEventListener("click", function() {
    ctr2++;
    
    if (ctr2 % 2 == 1){

        var small_txt = document.querySelector("#smtxt");
        small_txt.style.display = "inline-block";

        var text_field_btn1 = document.createElement("button");
        text_field_btn1.className = "btn";
        text_field_btn1.id = "my_text_btn";
        text_field_btn1.style.backgroundColor = "#4CAF50";
        text_field_btn1.style.border = "none";
        text_field_btn1.style.width = "150px";
        text_field_btn1.style.textAlign = "center";
        text_field_btn1.style.padding = "15px, 32px";
        text_field_btn1.style.textDecoration = "none";
        text_field_btn1.style.color = "rgb(255, 255, 255)";
        text_field_btn1.textContent = "Dodaj";
        text_field_btn1.style.marginLeft = "60px";
        text_field_btn1.style.display = "inline-block";
        cnt.after(text_field_btn1);
        text_field_btn1.addEventListener("click", function() {
            ctr2++;
            small_txt.style.display = "none"
            text_field_rec.style.display = "none";
            text_field1.style.display = "none";
            text_field_btn1.style.display = "none";
            text_field_src.style.display = "none";

            if (text_field1.value.length == 0 || text_field_rec.value.length == 0){
                alert("Wypełnij wymagane pola.");
            }
            else {
                showAdded();
            }

        })  

        var text_field_src = document.createElement("input");
        text_field_src.type = "text";
        text_field_src.id = "my_img_src";
        text_field_src.style.backgroundColor = "rgb(192, 199, 204)";
        text_field_src.style.marginLeft = "10px";
        text_field_src.className = "inputs";
        text_field_src.style.borderTop = "none";
        text_field_src.style.borderRight = "none";
        text_field_src.style.borderLeft = "none";
        text_field_src.style.borderBottom = "none";
        text_field_src.style.color = "rgb(0, 0, 0)";
        text_field_src.placeholder = "Ścieżka do zdjęcia";
        text_field_src.textAlign = "center";
        text_field_src.style.width = "200px";
        cnt.after(text_field_src);
        
        var text_field_rec = document.createElement("input");
        text_field_rec.type = "text";
        text_field_rec.id = "my_text_rec";
        text_field_rec.style.backgroundColor = "rgb(192, 199, 204)";
        text_field_rec.style.marginLeft = "10px";
        text_field_rec.className = "inputs";
        text_field_rec.style.borderTop = "none";
        text_field_rec.style.borderRight = "none";
        text_field_rec.style.borderLeft = "none";
        text_field_rec.style.borderBottom = "none";
        text_field_rec.style.color = "rgb(0, 0, 0)";
        text_field_rec.placeholder = "Przepis *";
        text_field_rec.textAlign = "center";
        text_field_rec.style.width = "750px";
        cnt.after(text_field_rec);

        var text_field1 = document.createElement("input");
        text_field1.type = "text";
        text_field1.id = "my_text";
        text_field1.style.backgroundColor = "rgb(192, 199, 204)";
        text_field1.style.marginLeft = "70px";
        text_field1.style.marginTop = "5px";
        text_field1.style.borderTop = "none";
        text_field1.style.borderRight = "none";
        text_field1.style.borderLeft = "none";
        text_field1.style.borderBottom = "none";
        text_field1.style.color = "rgb(0, 0, 0)";
        text_field1.placeholder = "Nazwa potrawy *";
        text_field1.textAlign = "center";
        cnt.after(text_field1);  
    }

    else {
        var small_txt = document.querySelector("#smtxt");
        small_txt.style.display = "none";

        const to_remove_btn = document.querySelector("#my_text_btn");
        const to_remove_in1 = document.querySelector("#my_img_src");
        const to_remove_in2 = document.querySelector("#my_text_rec");
        const to_remove_in3 = document.querySelector("#my_text");

        to_remove_btn.remove();
        to_remove_in1.remove();
        to_remove_in2.remove();
        to_remove_in3.remove();
    }

});

function showAdded(){
    ctr += 1;

    var rec_txt = document.getElementById("my_text_rec").value;

    var recipe_txt = document.createElement("p");
    recipe_txt.style.marginTop = "50px";
    recipe_txt.style.marginBottom = "60px";
    recipe_txt.style.display = "inline-block";
    recipe_txt.id = "recipe_txt" + ctr;
    recipe_txt.className = "recipe_added";
    recipe_txt.innerHTML = rec_txt;
    recipe_txt.classList.add('element');
    cnt.after(recipe_txt);

    var remove_btn = document.createElement("button");
    remove_btn.className = "btn2";
    remove_btn.id = "remove_btn" + ctr;
    remove_btn.style.backgroundColor = "#4CAF50";
    remove_btn.style.border = "none";
    remove_btn.style.width = "200px";
    remove_btn.style.height = "80px";
    remove_btn.style.textAlign = "center";
    remove_btn.style.padding = "15px, 32px";
    remove_btn.style.textDecoration = "none";
    remove_btn.style.color = "rgb(255, 255, 255)";
    remove_btn.textContent = "Usuń ten przepis";
    remove_btn.style.marginLeft = "250px";
    remove_btn.style.display = "inline-block";
    cnt.after(remove_btn);
    remove_btn.addEventListener("click", function() {
        var no = remove_btn.id[10];
        const strong = document.querySelector("#strong" + no);
        const recipe = document.querySelector("#recipe" + no);
        const recipe_text = document.querySelector("#recipe_txt" + no);
        const rm_btn = document.querySelector("#remove_btn" + no);
        strong.remove();
        recipe.remove();
        recipe_text.remove();
        rm_btn.remove();
        ctr--;
    })

    var img_src = document.getElementById("my_img_src").value;

    var recipe_img = document.createElement("img")
    recipe_img.setAttribute("src", img_src);
    recipe_img.setAttribute("width", "450");
    recipe_img.setAttribute("height", "auto");
    recipe_img.style.marginTop = "50px";
    recipe_img.style.marginBottom = "15px";
    recipe_img.style.marginLeft = "15px";
    recipe_img.style.display = "inline-block";
    recipe_img.id = "recipe" + ctr;
    cnt.after(recipe_img);

    var nazwa = document.getElementById("my_text").value;
    
    const strong = document.createElement("strong");
    strong.id = "strong" + ctr;
    strong.innerHTML = nazwa;
    strong.style.marginLeft = "150px";
    strong.style.fontSize = "35px";
    strong.classList.add('element');
    cnt.after(strong);
}
