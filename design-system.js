const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("close-icon");
const nav = document.getElementsByTagName("nav")[0];

hamburger.onclick = () => {
    nav.style.cssText += 'left: 0;';
    closeIcon.style.display = 'block';
    hamburger.style.display = 'none';
}

closeIcon.onclick = () => {
    nav.style.cssText += 'left: -300px;';
    closeIcon.style.display = 'none';
    hamburger.style.display = 'block';
}

