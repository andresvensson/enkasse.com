function menuToggle(part) {
    hideAllWithClass('page-part');
    part = part.innerHTML.toLowerCase() + '-part';
    show = document.getElementById(part);
    show.style.display = 'block';    
}
function hideAllWithClass(className) {
    var elements = document.getElementsByClassName(className);
    for (const key in elements) {
        if (elements.hasOwnProperty(key)) {
            const element = elements[key];
            element.style.display = 'none';
        }
    }
}