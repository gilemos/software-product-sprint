/** Getting the comments
 */

function getComments() {
    fetch('/data').then(response => response.json()).then((stats) => { 
        const statsListElement = document.getElementById('commentCell');
        statsListElement.innerHTML = '';
        for (index = 0; index < stats.length; index++) { 
            statsListElement.appendChild(createListElement(stats[index]));
        }
    });
}

function createListElement(text) {
    const divElement = document.createElement('div');
    divElement.setAttribute("id", "commentDiv");
    divElement.innerText = text;
    return divElement;
}
