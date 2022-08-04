var generateButton = document.querySelector("#generateCard");
var initiate = false;

generateButton.addEventListener('click', () => {

    axios('https://curtinaz.dev/darkStories-api/public/api/cards/random')
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