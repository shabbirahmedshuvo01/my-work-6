const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear
    searchField.value = '';

    // errors
    if (searchText == '') {
        alert('please write somthing')
    }

    else {
        // loadsedding
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchPhone(data.data))
    }


}
// input phones //
const displaySearchPhone = phones => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    // errors

    if (phones.length == 0) {
        alert('No phone found')
    }


    phones.forEach(phone => {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${phone.image}" class="card-img-top container-fluid" alt="...">
            <div class="card-body">
            <h4 class="card-title">${phone.brand}</h4>
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text"></p>
            <button id="phone-details" class="btn btn-primary" onclick="loadPhoneDetail('${phone.slug}')">More details</button>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}
// data load // 
const loadPhoneDetail = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
}


// phone details //

const displayPhoneDetails = phone => {
    console.log(phone);
    const phoneSpecification = document.getElementById('specification');
    phoneSpecification.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h4 class="card-title">${phone.mainFeatures.chipSet}</h4>
        <h5 class="card-title">${phone.mainFeatures.displaySize}</h5>
        <p class="card-text">${phone.mainFeatures.memory}</p>
        <p class="card-text"> 1.${phone.mainFeatures.sensors[0]}</p>
        <p class="card-text"> 2.${phone.mainFeatures.sensors[1]}</p>
        <p class="card-text"> 3.${phone.mainFeatures.sensors[2]}</p>
        <p class="card-text"> 4.${phone.mainFeatures.sensors[3]}</p>
        <p class="card-text"> 5.${phone.mainFeatures.sensors[4]}</p>
        <p class="card-text"> 6.${phone.mainFeatures.sensors[5]}</p>
        <p class="card-text"> 7.${phone.mainFeatures.sensors[6]}</p>
    `;
    phoneSpecification.appendChild(div);
}



                                // almost finished //