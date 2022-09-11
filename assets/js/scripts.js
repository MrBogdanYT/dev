numberString = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten"
]

registerExperienceButtons(9);
registerExperienceHover(9);

function registerExperienceButtons(amount) {
    let size = getHeight("tablist");

    for (let i = 1; i <= amount; i++) {
        let number = intToString(i);
        let buttonClass = "experience-select-" + number;
        let experineceClass = "experience-" + number;

        let button = document.getElementsByClassName(buttonClass)[0];
        let experience = document.getElementsByClassName(experineceClass);

        button.parentNode.addEventListener("click", () => {
            let active = document.getElementsByClassName("experience-active");
            let activeSelect = document.getElementsByClassName("experience-select-active")[0];
            let activeSelectParent = document.getElementsByClassName("experience-select-active-parent")[0];
            let bar = document.getElementsByClassName("experience-bar-handle")[0];

            bar.style.top = size / amount * (i - 1) + "px";
            activeSelect.classList.remove("experience-select-active");
            activeSelectParent.classList.remove("experience-select-active-parent");
            button.classList.add("experience-select-active");
            button.parentNode.classList.add("experience-select-active-parent");

            if (active != undefined) {
                const list = [...active];
                for (let index = 0; index < list.length; index++) {
                    const element = list[index];
                    element.hidden = true;
                    element.classList.remove("experience-active");
                }
            }
            if (experience != undefined) {
                const list = [...experience];
                for (let index = 0; index < list.length; index++) {
                    const element = list[index];
                    element.hidden = false;
                    element.classList.add("experience-active");
                }
            }
        });
    }
}

function intToString(int){
    return numberString[int];
}

function getHeight(element){
    return document.getElementsByClassName(element)[0].clientHeight
}

function registerExperienceHover(amount) {
    let size = getHeight("tablist");
    for (let i = 1; i <= amount; i++) {
        let number = intToString(i);
        let buttonClass = "experience-select-" + number;

        let button = document.getElementsByClassName(buttonClass)[0];
        let bar = document.getElementsByClassName("experience-bar-handle")[0];

        button.parentNode.addEventListener("mouseover", () => {
            bar.style.top = size / amount * (i - 1) + "px";
        });
        button.parentNode.addEventListener("mouseout", () => {
            let active = document.getElementsByClassName("experience-select-active")[0];
            let activeClass = active.classList[0];
            let numberString = activeClass.replace("experience-select-", "");
            let number = stringToInt(numberString);

            bar.style.top = size / amount * (number - 1) + "px";
        });
    }
}

function stringToInt(string) {
    for (let i = 0; i < numberString.length; i++) {
        if (numberString[i] === string) {
            return i;
        }
    }
}