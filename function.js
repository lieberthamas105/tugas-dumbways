// document.addEventListener('DOMContentLoaded', function () {
//     const tombol = document.getElementById('getData');
  
//     tombol.addEventListener('click', function () {
//       // Buat elemen h1 baru
//       const h1 = document.createElement('h1');
//       h1.textContent = tombol.textContent;
//       h1.style.color = 'blue';
  
//       // Ganti tombol dengan h1
//       tombol.parentNode.replaceChild(h1, tombol);
//     });
//   })

function getData(event) {
    event.preventDefault();

    alert("terklik")
    let name =document.getElementById('name').value
    console.log(name)
    document.getElementById("header").innerHTML = "halo bro"
    document.getElementsByClassName("form-control").innerHTML ="kacau"
}
