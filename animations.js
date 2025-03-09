const INCREASE_NUMBER_ANIMATION_SPEED = 50;

// анимация увелечения числа клиентов
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

const clientsCount = document.querySelector('.features__clients-count');



// добавляем вариант "другое", чтоб клиент сам ввел нужное ему число
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
        document.querySelector('.form form').removeChild(otherInput);
    }
});

let animationInited = false;

//анимация увелечения клиентов, происходит когда мы увидим этот элемент
function updateScroll() {
    const header = document.querySelector('.header-wrapper');
    if (window.scrollY > 0) {
        header.classList.add('header__scrolled');
    } else {
        header.classList.remove('header__scrolled');
    }
    let windowBottomPosition = window.scrollY + window.innerHeight;
    let countElementPosition = document.querySelector('.features__clients-count').offsetTop;

    if (windowBottomPosition >= countElementPosition && !animationInited) {
        increaseNumberAnimationStep(0, clientsCount, 5000);
        animationInited = true;
    }
}
window.addEventListener('scroll', updateScroll)


