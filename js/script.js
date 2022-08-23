const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();

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
        }, 1000);
    }

    const showSpinner = () => {
        document.getElementById('spinner').style.display = 'block';
    }

    const hideSpinner = () => {
        document.getElementById('spinner').style.display = 'none';
    }

    hideSpinner();

}

form.addEventListener('submit', onGenerateSubmit);