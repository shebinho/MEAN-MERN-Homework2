let images = "";
$(async () => {
  const files = await fetch(`/api/cats`);
  const cats = await files.json();
  renderCats(cats);
  console.log(files);
});

const renderCats = async files => {
  for (let index = 0; index < files.length; index++) {
    const element = await files[index];
    console.log(element);

    images += `<li><a href="/cats/${element}">${element}</a></li>`;
  }
  $("#cats").append(images);
};
