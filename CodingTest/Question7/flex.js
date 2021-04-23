let imagesList = [];

async function getImagesList(url) {
  const response = await fetch(url);
  var data = await response.json();
  imagesList = data;
  let allHeadingList = document.querySelectorAll(".project-name");
  allHeadingList.forEach((item, index) => {
    item.innerText = imagesList[index].title;
  });
  let allSectionImage = document.querySelectorAll(".section-image");
  allSectionImage.forEach((item, index) => {
    item.src = imagesList[index].url;
  });
  console.log(data);
}

this.getImagesList("https://jsonplaceholder.typicode.com/photos");