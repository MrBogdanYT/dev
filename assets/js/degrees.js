let cards = document.getElementsByClassName("card");
for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    let properties = getProperties(card);

    if( properties == undefined || properties == null) {
        continue;
    }

    card.innerHTML = card.innerHTML + `
        <span class="name">
            <div class="name-container">
                <div class="name-string">
                    ${properties.title}
                </div>
            </div>
        </span>
        <img src="${properties.image}">
    `;

    card.onclick = function() {
        openPopup((popup) => handleDegreePopup(popup, card));
    }
}

function handleDegreePopup(popup, card){
    let properties = getProperties(card);

    if(properties==null){
        return null;
    }

    // Title
    popup.getElementsByClassName("title")[0].innerHTML = properties.title;
    
    // Degree Image
    popup.getElementsByClassName("degree")[0].getElementsByTagName("img")[0].src = properties.image;

    // Platform
    popup.getElementsByClassName("details")[0].getElementsByTagName("a")[0].innerHTML = properties.platform;
    popup.getElementsByClassName("details")[0].getElementsByTagName("a")[0].href = properties.platform_link;

    // Degree ID
    popup.getElementsByClassName("details")[0].getElementsByTagName("a")[1].innerHTML = properties.degree_id;
    popup.getElementsByClassName("details")[0].getElementsByTagName("a")[1].href = properties.degree_id_link;

    // Issue Date
    popup.getElementsByClassName("details")[0].getElementsByTagName("p")[2].innerHTML = "Issue Date: " + properties.issue_date;
 
    // Missing data cases
    if(properties.platform_link == ""){
        popup.getElementsByClassName("details")[0].getElementsByTagName("a")[0].style += ";pointer-events: none;";
    }
    if(properties.degree_id == ""){
        popup.getElementsByClassName("details")[0].getElementsByTagName("p")[1].remove()
    }else if(properties.degree_id_link == ""){
        popup.getElementsByClassName("details")[0].getElementsByTagName("a")[1].style += ";pointer-events: none;"
    }

    let degreeImage = popup.getElementsByClassName("degree")[0].getElementsByTagName("img")[0];

    if(degreeImage == undefined){
        return;
    }

    degreeImage.style = "height: 100%; width: auto;";

    setTimeout(() => {
        let _16_9_width = degreeImage.height * 16/9;
        let current_width = degreeImage.width;

        degreeImage.style = `
            height: 100%;
            width: auto;
            padding: 0px %padding%px 0px %padding%px;
        `.replaceAll("%padding%", (_16_9_width - current_width)/2);
    }, 1);
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