function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

var generateButton = document.querySelector("#generateCard");
var initiate = false;

if (!window.localStorage.getItem('token')) {
    window.localStorage.setItem('token', uuidv4())
}

var userToken = window.localStorage.getItem('token');

generateButton.addEventListener('click', () => {

    axios(`https://curtinaz.dev/darkStories-api/public/api/cards/random?token=${userToken}`)
        .then(function (response) {
            var dados = response.data;
            initiate = true;

            $("#answer").hide(200);
            $("#hint").show(200);

            document.querySelector("#title").innerText = dados.title
            document.querySelector("#description").innerText = dados.description
            document.querySelector("#answer").innerText = dados.answer

        });

})