function getFirstName() {
    const firstName = document.getElementById("firstName").value;
    console.log(firstName);
}


function getLastName() {
    const lastName = document.getElementById("lastName").value;
    console.log(lastName);
}


function getTextAraInput() {
    const review = document.getElementById("review").value;
    console.log(review);
}


function clearData() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("review").value = "";
    console.log(" Data cleared out . . . ");
}

async function sendRequest() {
    const url = "https://api.dzplanet.shop/api/categories/with-products";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        console.log(" Http request sent to server . . . ");
    } catch (error) {
        console.error(error.message);
    }

}