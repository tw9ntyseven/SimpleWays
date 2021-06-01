import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
    return(
        <div className="footer">
                <Link to="/" className="header-bar_logo footerLogo">Simple<span style={{color: "#E66A08", fontWeight: "bold"}}>Ways</span></Link>
        <div className="links">
        <div className="footerSocialNetworks">
            <a href="https://vk.com/oonehacker" className="footerSocialNetworksItem"><i class="fab fa-vk"></i></a>
            <a href="https://www.instagram.com/tw9ntyseven/" className="footerSocialNetworksItem"><i class="fab fa-instagram"></i></a>
            <a className="footerSocialNetworksItem"><i class="fab fa-telegram"></i></a>
            </div>
            <div className="footerLinks">
                <Link className="footerLinkItem" to="#">Блог</Link>
                <Link className="footerLinkItem" to="#">О Нас</Link>
                <Link className="footerLinkItem" to="#">Сотрудничество</Link>
                <Link className="footerLinkItem" to="#">Документы</Link>
            </div>
            </div>
        </div>
    );
}
export default Footer;