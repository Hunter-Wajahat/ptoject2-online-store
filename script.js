function searchItems() {
    const input = document.getElementById('#searchBar').value.toLowerCase();
    const items = document.getElementById('#itemContainer').getElementsByClassName('c1');
  
    for (let i = 0; i < items.length; i++) {
      const itemText = items[i].getElementsByClassName('text')[0].innerText.toLowerCase();
      if (itemText.includes(input)) {
        items[i].style.display = '';
      } else {
        items[i].style.display = 'none';
      }
    }
  }

document.querySelector(".MenAndWoman").addEventListener("click",()=>{
  alert("congratulation! \nare you ready to boost your exprience on stunning outfits?")
})
  