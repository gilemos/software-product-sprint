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
    //String scoreString = String.valueOf(comment.sentimentScore);
    //System.out.println(scoreString);

    const divElement = document.createElement('div');
    divElement.setAttribute("id", "commentDiv");

    divElement.innerText = comment.message + " " + comment.sentimentScore;

    return divElement;
}
