function menuToggle(part) {
    hideAllWithClass('page-part');
    console.debug(part.innerHTML);
    part = part.innerHTML.toLowerCase() + '-part';
    show = document.getElementById(part);
    show.style.display = 'block';    
}
function hideAllWithClass(className) {
    var elements = document.getElementsByClassName(className);
    console.debug(elements);
    for (const key in elements) {
        if (elements.hasOwnProperty(key)) {
            const element = elements[key];
            element.style.display = 'none';
        }
    }
}