var modal = document.getElementById('mltdQR');
 
document.getElementsByClassName("close")[0].onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function displayJPModal() {
    modal.style.display = "block";
}