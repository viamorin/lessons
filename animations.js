const INCREASE_NUMBER_ANIMATION_SPEED = 50;

function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerText = i + '+';
        } else {
            element.innerText = i;
        }

        i += 100;

        setTimeout(() => {
            increaseNumberAnimationStep(i, element, endNumber);
        }, INCREASE_NUMBER_ANIMATION_SPEED);
    }
};

const clientsCount = document.querySelector('.features__clients-count')

increaseNumberAnimationStep(0, clientsCount, 5000);

let title = document.createElement("h1");
title.innerHTML = "Самая важная страница на свете!";
title.id = "my-title";
title.className = "caption red";

let paragraph = document.createElement("p");
paragraph.innerText = "Text here";

let link = document.createElement("a");
link.innerText = "link";
link.href = "";

let paragraph2 = document.createElement("p");
paragraph2.innerText = "More text";

document.body.append(title, link, paragraph, paragraph2);

document.querySelector('#budget').addEventListener('change', function
    handleSelectChange(event) {
    if (event.target.value === 'other') {
        const formContainer = document.createElement('div');
        formContainer.classList.add('form__group');
        formContainer.classList.add('form__other-input');

        const input = document.createElement('input');
        input.placeholder = "Введите ваш вариант";
        input.type = "text";

        formContainer.appendChild(input);

        document.querySelector('.form form').insertBefore(formContainer, document.querySelector('.form__submit'));
    }
    const otherInput = document.querySelector('.form__other-input');
    
    if (event.target.value !== 'other' && otherInput) {
        // Удаляем ранее добавленное текстовое поле, если оно есть в DOM
        document.querySelector('.form form').removeChild(otherInput);
    }
});