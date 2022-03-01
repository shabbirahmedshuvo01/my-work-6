const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchPhone(data.data))
}

const displaySearchPhone = phones => {
    const searchResult = document.getElementById('search-result');
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${phone.image}" class="card-img-top container-fluid" alt="...">
            <div class="card-body">
            <h4 class="card-title">${phone.brand}</h4>
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">${phone.slug}</p>
            <button id="phone-details" onclick="loadPhoneDetail('${phone.slug}')">More details</button>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadPhoneDetail = phoneId => {
    console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data))
}

const displayPhoneDetails = phone => {
    console.log(phone.data);
    const phoneSpecification = document.getElementById('specification');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h4 class="card-title">${phone.phone_name}</h4>
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">${phone.slug}</p>
    `;
    phoneSpecification.appendChild(div);
}