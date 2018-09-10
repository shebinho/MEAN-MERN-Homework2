let images = "";
$(async () => {
  const files = await fetch(`/api/corgies`);
  const corgies = await files.json();
  renderCorgies(corgies);
  console.log(files);
});

const renderCorgies = async files => {
  for (let index = 0; index < files.length; index++) {
    const element = await files[index];
    console.log(element);

    images += `<li><a href="/corgies/${element}">${element}</a></li>`;
  }
  $("#corgies").append(images);
};
