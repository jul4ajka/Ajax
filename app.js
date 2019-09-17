const button = document.getElementById('translate_btn');

button.addEventListener('click', translateText);

function translateText () {

    let uaText = document.getElementById('ua_text');
    let engText = document.getElementById('eng_text');
    
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://api.cognitive.microsofttranslator.com/', true);

    xhr.onload = function () {
        if (this.status === 200) {
            const translation = JSON.parse(this.responseText);
            engText.value = translation.text;
        }
    }
    let textRequest = {
        "from": "ukrainian",
        "to": "english",
        "text": uaText.value

    }

    let toTranslate = JSON.stringify(textRequest);

    xhr.send(toTranslate);

}