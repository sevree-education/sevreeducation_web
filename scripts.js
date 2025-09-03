const btn = document.querySelector(".readall")
const hiddenclasses = document.getElementsByClassName("hidden")
const classElements = document.querySelectorAll('.element');

let myclose = false

btn.addEventListener("click", ()=>{
    if(myclose == false){
        Array.from(hiddenclasses).forEach(element => {
        element.classList.remove("hidden")
        element.classList.add("row2")
        btn.textContent = "Close"
        myclose = true
    });}
    else{
        console.log("hi")
        const deletedelms = document.getElementsByClassName("row2")
        Array.from(deletedelms).forEach(element => {
        element.classList.remove("row2")
        element.classList.add("hidden")
        btn.textContent = "Read All"
        myclose = false
    });
    }      
})
// 1. Select all the divs with the class 'element'.


// 2. Loop through each of the selected divs.
classElements.forEach(element => {
    let toggle = true
    // 3. For each element, add a click event listener.
    element.addEventListener('click', () => {
        // 4. Find the child paragraph with the class 'hidden' inside the clicked element.
        //    'element' here refers to the specific div that was clicked during the loop.
        // 5. Check if the hidden paragraph exists and then toggle its classes.
        if (toggle == true) {
            const hiddenParagraph = element.querySelector('.hiddentxt');
            const hiddenarrow = element.querySelector('.hiddenimg')
            const rightarrow = element.querySelector('.imgshow')

            hiddenarrow.classList.remove('hiddenimg')
            hiddenarrow.classList.add('imgshow')

            rightarrow.classList.remove('imgshow')
            rightarrow.classList.add('hiddenimg')

            hiddenParagraph.classList.remove('hiddentxt');
            hiddenParagraph.classList.add('descdisp');
            toggle = false
        }else if(toggle == false){
            const hiddenParagraph = element.querySelector('.descdisp');
            const hiddenarrow = element.querySelector('.imgshow')
            const rightarrow = element.querySelector('.hiddenimg')

            hiddenarrow.classList.remove('imgshow')
            hiddenarrow.classList.add('hiddenimg')

            rightarrow.classList.remove('hiddenimg')
            rightarrow.classList.add('imgshow')
            
            
            
            hiddenParagraph.classList.remove('descdisp');
            hiddenParagraph.classList.add('hiddentxt');
            toggle = true
        }
    });
});