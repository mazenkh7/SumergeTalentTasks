function goIMDB(j) {
    switch (j) {
        case 1:
            window.open("https://www.imdb.com/title/tt0361748/", '_blank');
            break;
        case 2:
            window.open("https://www.imdb.com/title/tt1853728/", '_blank');
            break;
        case 3:
            window.open("https://www.imdb.com/title/tt0075314/", '_blank');
            break;
        case 4:
            window.open("https://www.imdb.com/title/tt0211915/", '_blank');
            break;
        case 5:
            window.open("https://www.imdb.com/title/tt0114814/", '_blank');
            break;
        case 6:
            window.open("https://www.imdb.com/title/tt0317248/", '_blank');
            break;
        case 7:
            window.open("https://www.imdb.com/title/tt0253474/", '_blank');
            break;
    }
}

function filterByName(query) {
    query = query.toLowerCase();
    console.log("search query is: " + query);
    for (let i = 1; i < 8; i++) {
        let title = document.getElementById("t" + i).innerText.toLowerCase();
        if (title.includes(query))
            document.getElementById("r" + i).hidden = false;
        else
            document.getElementById("r" + i).hidden = true;
    }
}

searchbox = document.getElementById("searchbox")

searchbox.addEventListener("keyup", () => { filterByName(searchbox.value) });

for (let i = 1; i < 8; i++) {
    document.getElementById("r" + i).addEventListener("click", () => { goIMDB(i) });
}