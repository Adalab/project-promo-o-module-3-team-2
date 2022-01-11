function setlocalStorage() {
    localStorage.setItem('dataLocal', JSON.stringify(data));
}

function getLocalStorage() {
    const getlocalData = localStorage.getItem('dataLocal');

    if (getlocalData != null) {
        const localData = JSON.parse(getlocalData);
        const allInputs = document.querySelectorAll('.js_allInputs');

        //Rellena el objeto data
        for (const att in localData) {
            data[att] = localData[att];
        }
        //Rellena el formulario
        for (const input of allInputs) {
            if (input.id === 'name') {
                input.value = data.name;
            } else if (input.id === 'job') {
                input.value = data.job;
            } else if (input.id === 'email') {
                input.value = data.email;
            } else if (input.id === 'phone') {
                input.value = data.phone;
            } else if (input.id === 'linkedin') {
                input.value = data.linkedin;
            } else if (input.id === 'github') {
                input.value = data.github;
            } else if (input.id === 'photo') {
                input.value = data.photo;
            }
        }

        allPalettes[data.palette - 1].checked = true;

        profileImage.style.backgroundImage = `url(${data.photo})`;
        profilePreview.style.backgroundImage = `url(${data.photo})`;

        renderPreview();
        renderPalette();
    }
}

getLocalStorage();
