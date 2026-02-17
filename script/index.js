// Load all data 
const loadAllData = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(json => displayData(json))
}
loadAllData() //call the function

const displayData = (data) => {
    const dataContainer = document.getElementById("data-container");
    dataContainer.innerHTML = "";
    for (let datum of data) {
        console.log(datum)
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        <figure>
                <img src=${datum.image} alt="Shoes" />
            </figure>
            <span class="badge badge-xs badge-warning mt-2 ml-2">${datum.category}</span>
            <div class="card-body">
                <h2 class="card-title">${datum.title}</h2>
                <span class="text-xl">${datum.price}/mo</span>
                <div class="card-actions flex justify-between">
                    <button class="btn btn-primary">Details</button>
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        `;
        dataContainer.append(card);
    }

}