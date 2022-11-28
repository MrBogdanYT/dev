let cards = document.getElementsByClassName("card");
for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    let properties = getProperties(card);

    let imageObj = card.getElementsByClassName("image")[0];
    let nameObj = card.getElementsByClassName("name")[0];

    if(imageObj == undefined || nameObj == undefined || properties == null) {
        continue;
    }

    nameObj.innerHTML = properties.title;
    imageObj.getElementsByTagName("img")[0].src = properties.image;

    card.onclick = function() {
        openPopup(card);
    }
}

function getProperties(element){
    let properties = element.getElementsByClassName("properties");

    if(properties == undefined){
        return null;
    }

    if(properties[0] == undefined){
        return null;
    }

    return {
        title: properties[0].getElementsByClassName("title")[0].innerHTML,
        image: properties[0].getElementsByClassName("image-link")[0].innerHTML,
        platform: properties[0].getElementsByClassName("platform")[0].innerHTML,
        platform_link: properties[0].getElementsByClassName("platform-link")[0].innerHTML,
        degree_id: properties[0].getElementsByClassName("degree-id")[0].innerHTML,
        degree_id_link: properties[0].getElementsByClassName("degree-id-link")[0].innerHTML,
        issue_date: properties[0].getElementsByClassName("issue-date")[0].innerHTML
    }
}