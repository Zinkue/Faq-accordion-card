function getAnswer(element) {
    const id = element.target.id == "" 
        ? element.target.parentElement.id
        : element.target.id;
    const questionBlock = document.getElementById(id);
    const question = questionBlock.childNodes[1];
    const arrow = questionBlock.childNodes[3];
    const answer = questionBlock.nextElementSibling;

    // Open/close faq
    if (answer.style.display == "") {
        question.style.fontWeight = "700";
        arrow.style.transform = "rotate(180deg)";
        answer.style.display = "block";
    } else {
        question.style.fontWeight = "";
        arrow.style.transform = "";
        answer.style.display = "";
    }
}