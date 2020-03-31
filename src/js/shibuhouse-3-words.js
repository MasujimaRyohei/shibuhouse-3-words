function reqest3words(lang) {
    var request = new XMLHttpRequest();

    var url = 'https://api.what3words.com/v3/convert-to-3wa?coordinates=35.6549348,139.6970022&language=' + lang + '&key=BERURD8C';
    request.open('GET', url, true);
    request.responseType = 'json';

    request.onload = function () {
        var data = this.response;
        var wordsNode = document.createElement('p');
        wordsNode.innerHTML = lang + " : " + data.words;
        document.body.appendChild(wordsNode);

    };

    request.send();
}
