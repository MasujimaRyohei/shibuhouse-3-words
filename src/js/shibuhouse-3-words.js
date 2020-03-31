// File name : shibuhouse-3-words.js
// Version   : 1.0.0
// Author    : Masujima Ryohei
// Date      : 2020/03/31 Latest update 2020/03/31
// Summary   : Using what3words API(https://developer.what3words.com/public-api)

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

reqest3words('ar');
reqest3words('ru');
reqest3words('en');
reqest3words('ja');
reqest3words('de');
reqest3words('fr');
reqest3words('hi');
reqest3words('pl');
reqest3words('cs');
reqest3words('it');
