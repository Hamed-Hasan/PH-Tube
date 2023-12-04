const loadData = (id) => {
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.data.length == 0) {
                displayMessage();
            }
            else {
                displayData(data.data);
            }
        });
};


// sort and display the sort data
const sortData = () => {
    fetch("https://openapi.programming-hero.com/api/videos/category/1000")
        .then((res) => res.json())
        .then((data) => {
            const sortedData = sortCategories(data.data);
            displayData(sortedData);
        });
};
