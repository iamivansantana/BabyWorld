import React from 'react';
import './BWFooter.css';

const BWFooter = () => {
    return (
        <>
            <div className="footer-page" >
                <div className="footerContainer">
                    <div className="footerLogo"><img src="assets\BW-Resources\tittle.svg" alt="BWLogo"/></div>
                    <div className="footerGrid">
                        <div className="footerAddres footerItem">
                            <p className="footerTittle">OFFICE</p>
                            <p>Satelite S/N, 39000</p>
                            <p>Guerrero, Mexico.</p>
                        </div>
                        <div className="footerEmail footerItem">
                            <p className="footerTittle">EMAIL</p>
                            <a style={{textDecoration:'none', color:'#e0e0e0'}} href="mailto:iam.ivansantana@gmail.com"  >iam.ivansantana@gmail.com</a>
                            <a style={{textDecoration:'none', color:'#e0e0e0'}} href="mailto:ivan.santana.04.is@gmail.com"  >ivan.santana.04.is@gmail.com</a>
                        </div>
                        <div className="footerSocial footerItem">
                            <p className="footerTittle">SOCIAL MEDIA</p>
                            <div className="footerSocialMedia">
                                <a  href='https://www.facebook.com/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{textDecoration:'none'}}
                                >
                                    <img src="assets\BW-Resources\linkFacebookGray.svg" alt="facebookLink" />
                                </a>
                                <a  href='https://www.instagram.com/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{textDecoration:'none'}}
                                >
                                    <img src="assets\BW-Resources\linkInstagramGray.svg" alt="instagramLink" />
                                </a>
                                <a  href='https://www.twitter.com/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{textDecoration:'none'}}
                                >
                                    <img src="assets\BW-Resources\linkTwitterGray.svg" alt="twitterLink" />
                                </a>
                            </div>
                        </div>
                        <div className="footerTerms footerItem">
                            <p >Terminos y condiciones.</p>
                            <p>Nota de privacidad.</p>
                        </div>

                    </div>
                </div>
            </div>    
        </>
    )
}

export default BWFooter
