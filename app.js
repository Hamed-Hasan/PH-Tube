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


// sorting category data part for sort button
const sortCategories = (data) => {
    const parseValue = (str) => {
        const numericPart = parseFloat(str);
        const multiplier = str.includes("K") ? 1000 : str.includes("M") ? 1000000 : 1;
        return numericPart * multiplier;
    };

    const customSort = (a, b) => {
        const aData = parseValue(a.others.views);
        const bData = parseValue(b.others.views);
        return bData - aData;
    };

    return data.sort(customSort);
};
