const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();

    //clear the previous qr code before creating a new one
    clearUI();

    //get input value from the form
    const url = document.getElementById('url').value
    //get size value from the form
    const size = document.getElementById('size').value



    //check that we're getting the proper values
    // console.log(url, size);

    //add basic form validation
    if (url === '') {
        //if the user enters nothing
        alert('Please enter a URL')
    } else {
        //show spinner
        showSpinner();
        //show spinner for one second
        setTimeout(() => {
            hideSpinner();

            generateQRCode(url, size)

            //the url we want to save will be generated above, but won't be available right away
            //so we create another setTimeout
            setTimeout(() => {
                const saveUrl = qr.querySelector('img').src;
                createSaveBtn(saveUrl);
            }, 50)
        }, 1000);
    }

    const generateQRCode = (url, size) => {
        const qrcode = new QRCode('qrcode', {
            text: url,
            width: size,
            height: size
        })
    }

}

const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
}

const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
}

//clear the qr code before creating another
const clearUI = () => {
    qr.innerHTML = '';
    //clear the save button before creating another qr code
    const saveLink = document.getElementById('save-link');
    if (saveLink)
        saveLink.remove();

}

const createSaveBtn = (saveUrl) => {
    //first create a link
    const link = document.createElement('a');
    //we've created the link in the dom, now let's give it an ID
    link.id = 'save-link';
    //we also want to style the link
    link.classList = 'bg-green-500 hover:bg-black-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    //place the button in the DOM
    document.getElementById('generated').appendChild(link);
}

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);