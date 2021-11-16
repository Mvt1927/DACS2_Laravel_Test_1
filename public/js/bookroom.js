var btnbook = document.querySelector('#btn_book_submit');
var form_book = document.querySelector('#form_book_room');
var book_name = document.querySelector('#book_input_name');
var book_phone = document.querySelector('#book_input_phone');
var name_box = document.querySelector('#input_name_box');
var phone_box = document.querySelector('#input_phone_box');
if (name_box != null || phone_box != null) {
    phone_box.addEventListener('click', () => {
        phone_box.classList.remove('error');
        name_box.classList.remove('error');
    });
    name_box.addEventListener('click', () => {
        phone_box.classList.remove('error');
        name_box.classList.remove('error');
    });
};

function checkBook() {
    if (name_box != null || phone_box != null) {
        if (book_name.value != "") {
            if (book_phone.value != "") {
                return true;
            } else {
                if (!phone_box.classList.contains('error')) {
                    phone_box.classList.toggle('error');
                };
                alert('Your Phone cannot be blank');
                return false;
            }
        } else {
            if (!name_box.classList.contains('error')) {
                name_box.classList.toggle('error');
            };
            alert('Your Full Name cannot be blank');
            return false;
        }
    };
    return false;
}