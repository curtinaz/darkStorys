var generateButton = document.querySelector("#generateCard");

generateButton.addEventListener('click', () => {

    axios('http://localhost/darkStories-api/public/api/cards/random')
        .then(function (response) {
            var dados = response.data;

            document.querySelector("#title").innerText = dados.title
            document.querySelector("#description").innerText = dados.description

        });

})