let options = {
    page: 0,
    pageSize: 20,
    filter: ""
};

$(() => {
    showAuthors({ page: 0, pageSize: 20 });

    $("#prev").on("click", () => {
        showAuthors({ command: "prev" });
    });

    $("#next").on("click", () => {
        showAuthors({ command: "next" });
    });

    $("#filter").on("click", () => {
        const term = $("#term").val();
        showAuthors({ page: 0, filter: term })
    })
})

const showAuthors = async ({ page, pageSize, command, filter }) => {
    if (command === "prev") {
        page = options.page - 1;
    }
    if (command === "next") {
        page = options.page + 1;
    }

    pageSize = pageSize || options.pageSize;
    filter = filter || options.filter;

    options = { page, pageSize, filter };

    const first = page * pageSize;
    const last = (page + 1) * pageSize;

    let urlBuilder = `/api/authors/${first}/${last}`;
    if (filter) {
        urlBuilder = `${urlBuilder}?search=${filter}`;
    }

    const response = await fetch(urlBuilder);
    const authors = await response.json();
    renderAuthors(authors);
};

const renderAuthors = (authors) => {

    $('#authors').empty().append(`<tr>
        <th> ID </th>
        <th> Name </th>
        <th> Books </th>
    </tr>`);

    for (let index = 0; index < authors.length; index++) {
        const author = authors[index];
        $('#authors tr:last').after(`<tr>
            <td>${author.id}</td>
            <td>${author.name}</td>
            <td>${author.bookCount}</td>
        </tr>`);
    }
}