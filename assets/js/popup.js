function openPopup(parent) {
    var popup = document.getElementById("popup");
    
    let properties = getProperties(parent);

    if(properties==null){
        return null;
    }

    popup.getElementsByClassName("title")[0].innerHTML = properties.title;
    popup.getElementsByClassName("degree")[0].getElementsByTagName("img")[0].src = properties.image;
    popup.getElementsByClassName("details")[0].getElementsByTagName("a")[0].innerHTML = properties.platform;
    popup.getElementsByClassName("details")[0].getElementsByTagName("a")[0].href = properties.platform_link;
    popup.getElementsByClassName("details")[0].getElementsByTagName("a")[1].innerHTML = properties.degree_id;
    popup.getElementsByClassName("details")[0].getElementsByTagName("a")[1].href = properties.degree_id_link;
    popup.getElementsByClassName("details")[0].getElementsByTagName("p")[2].innerHTML = "Issue Date: " + properties.issue_date;

    popup.getElementsByClassName("content-view")[0].classList.add("elementToFadeIn");
    setTimeout(() => {
        popup.getElementsByClassName("content-view")[0].classList.remove("elementToFadeIn");
    }, 250);

    popup.hidden=false;
}

function closePopup() {
    var popup = document.getElementById("popup");

    popup.getElementsByClassName("content-view")[0].classList.add("elementToFadeOut");
    setTimeout(() => {
        popup.getElementsByClassName("content-view")[0].classList.remove("elementToFadeOut");
        popup.hidden=true;
    }, 250);

}

document.getElementById("popup").getElementsByClassName("close")[0].onclick = function() {
    closePopup();
}