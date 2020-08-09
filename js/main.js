async function getSections() {
    let response await fetch('data/section.json');

    let content = await response.json();
    let str = '';

    let compItems = document.getElementById('hardcomp');



    for (let i = 0; i < content.length; i++) {
        let obj = content[i].stars;
        for (let j = 1; j < obj; j++) {
            starsPainted = starsPainted + '&nbsp;&#9733;';
        }

        let sCircuit = 5 - obj;
        if (sCircuit > 0) {
            for (let j = 1; j < sCircuit; j++) {
                starsCircuit = starsCircuit + `&nbsp;&#9734;`;
            }
        } else {
            starsCircuit = '';
        }

        str = str + `<div class="comp-item text-margin__bottom_20">
        <p class="comp-name">${content[i].name}</p>
        <p class="comp-stars">${starsPainted}&nbsp;${starsCircuit}</p></div>`;

        starsPainted = '&#9733;';
        starsCircuit = '&#9734;';
    }

    compItems.insertAdjacentHTML('beforeend', str);
};