let user = null;
const sub = () => {
    user = document.getElementsByName("prod")[0].value;
    document.getElementById("name").innerHTML = user
}