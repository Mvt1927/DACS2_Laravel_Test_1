import React from 'react'
import MyGlobleSetting from '../MyGlobleSetting'
const AppFooter = () => {
    return (
        <footer style={{marginTop: '3vh'}}>
            <section className="footer" id="aboutus">
                <div className="box-container">
                    <div className="box text-center">
                        <h3>Support</h3>
                        <p>Thank</p>
                        <a href="https://github.com/"><i className="fab fa-github"></i><label
                            htmlFor="Github">Github</label></a>
                        <a href="https://fontawesome.com/"><i className="fab fa-font-awesome"></i><label
                            htmlFor="FontAwesome">Font Awesome</label></a>
                        <a href="https://www.w3schools.com/">
                            <img
                            src={MyGlobleSetting.url + '/resources/Image/icon/logo/w3schools/W3Schools_logo.svg'}
                            alt="W3Schools logo"/><label htmlFor="W3Schools">W3Schools</label></a>
                        <a href="https://getbootstrap.com/"><img
                            src={MyGlobleSetting.url+'/resources/Image/icon/logo/bootstrap-4/bootstrap-4-logo-svgrepo-com.svg'}
                            alt="Bootstrap logo"/><label htmlFor="Bootstrap">Bootstrap</label></a>
                        <a href="https://swiperjs.com/"><img
                            src={MyGlobleSetting.url+'/resources/Image/icon/logo/swiper/swiper-logo.svg'}
                            alt="Swiper logo"/><label htmlFor="Swiper">Swiper</label></a>
                        <a href="https://stackoverflow.com/"><img
                            src={MyGlobleSetting.url+'/resources/Image/icon/logo/stackoverflow/logo-stackoverflow.svg'}
                            alt="Stackoverflow"/><label
                            htmlFor="stackoverflow">stack<span>overflow</span></label></a>

                    </div>
                    <div className="box follow text-center">
                        <h3>Follow us</h3>
                        <p>Social network : </p>
                        <a href="https://www.facebook.com/Mvt1927/"><label htmlFor=""><i
                            className="fab fa-facebook"></i> Facebook</label></a>
                        <a href="https://github.com/viettel3g1000">
                            <label htmlFor=""><i className="fab fa-github"></i> Github</label></a>
                    </div>
                </div>
                <h1 className="credit"> Created by <span> MVT1927 </span></h1>
            </section>
        </footer>
    )
}

export default AppFooter
