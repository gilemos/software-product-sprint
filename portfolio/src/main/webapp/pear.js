/** Getting the comments
 */

function getComments() {
    fetch('/data').then(response => response.json()).then((comments) => { 
        const commentElement = document.getElementById('commentCell');
        comments.forEach((comment) => {
            commentElement.appendChild(createListElement(comment));
        })
    });
}

function createListElement(comment) {

    const divElement = document.createElement('div');
    divElement.setAttribute("id", "commentDiv");

    var score = comment.sentimentScore;
    if(score <= -0.5) {
        divElement.setAttribute("style", "background-color: rgba(255, 59, 63, 0.3);");
    } else if (score <= 0) {
        divElement.setAttribute("style", "background-color: rgba(255, 59, 63, 0.5);");
    } else if (score <= 0.5) {
        divElement.setAttribute("style", "background-color: rgba(255, 59, 63, 0.7);");
    } else {
        divElement.setAttribute("style", "background-color: rgba(255, 59, 63, 0.9);");
    }

    divElement.innerText = comment.message + " ";

    return divElement;
}
