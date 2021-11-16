
class MyGlobleSetting {

    constructor() {
        this.recaptcha_sitekey='6LepPQwcAAAAABC_YEYjyH35U6uvJJ4a_GdR9jtg';
        this.url = 'http://localhost:8000';
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        this.currentTime = today;
    }
}
export default (new MyGlobleSetting);
