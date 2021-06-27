const arrowLeft = document.getElementsByClassName("fa-arrow-left")[0];
const searchIcon = document.getElementsByClassName("search-icon")[0];
const searchCancel = document.getElementsByClassName("search-cancel")[0];
const menuList = document.getElementsByClassName("menu")[0];
arrowLeft.style.color = "#fff"
arrowLeft.style.cursor = "pointer"
searchIcon.style.color = "#fff"
searchIcon.style.cursor = "pointer";
searchCancel.style.color = "#fff"
searchCancel.style.cursor = "pointer"
searchCancel.style.display = "none"

searchIcon.addEventListener("click", clickIcon);
function clickIcon(){
    searchIcon.style.display = "none";
    menuList.style.display = "block"
    searchCancel.style.display = "inline-block"
}
searchCancel.addEventListener("click",clickCancel);
function clickCancel(){
    searchCancel.style.display = "none"
    searchIcon.style.display = "inline-block";
    menuList.style.display = "none"
}

let searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", filterBusinessName);
function filterBusinessName() {
    let searchValue = searchInput.value.toUpperCase();
    let allListContainer = document.getElementsByClassName("all-list-container")
    let companyDetails = document.getElementsByClassName("company-details");

  
    for (let i = 0; i < companyDetails.length; i++) {
        let li = companyDetails[i].getElementsByClassName("company-name")[0]
        let li2 = companyDetails[i].getElementsByClassName("company-address")[0]
        if(li.innerHTML.toUpperCase().indexOf(searchValue) > -1 || li2.innerHTML.toUpperCase().indexOf(searchValue) > -1){
            companyDetails[i].style.display = "";
            allListContainer[i].style.display = ""
        }else{
            allListContainer[i].style.display = "none"
            companyDetails[i].style.display = "none";
        }
    }
}

