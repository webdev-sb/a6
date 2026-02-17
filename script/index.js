// Load all data 
const loadAllData = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(json => displayData(json))
}

const loadAllData2 = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(json => displayData2(json))
}

loadAllData() //call the function
loadAllData2() //call the function

const displayData = (data) => {
    const dataContainer = document.getElementById("data-container");
    dataContainer.innerHTML = "";
    for (let datum of data) {
        console.log(datum)
        const card = document.createElement("div");
        // class="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden
        card.innerHTML = `
        <img src=${datum.image} class="w-full h-40 object-cover rounded">
                <h2 class="text-lg font-semibold mt-3">${datum.title}</h2>
                <p class="text-gray-600 text-sm mt-1 badge badge-xs badge-warning mt-2 ml-2">${datum.category}</p>
                <p class="text-indigo-600 font-bold mt-2">${datum.price}</p>
                <div class="card-actions flex justify-between">
                    <button class="btn btn-primary">Details</button>
                    <button class="btn btn-primary">Buy Now</button>
                </div>
        `;
        dataContainer.append(card);
    }

}



const displayData2 = (data) => {
    const dataContainer = document.getElementById("data-container2");
    dataContainer.innerHTML = "";
    for (let datum of data) {
        console.log(datum)
        const card = document.createElement("div");
        // class="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden
        card.innerHTML = `
        <img src=${datum.image} class="w-full h-40 object-cover rounded">
                <h2 class="text-lg font-semibold mt-3">${datum.title}</h2>
                <p class="text-gray-600 text-sm mt-1">${datum.category}</p>
                <p class="text-indigo-600 font-bold mt-2">${datum.price}</p>
        `;
        dataContainer.append(card);
    }

}




