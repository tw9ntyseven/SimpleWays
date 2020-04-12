import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
    return(
        <div className="footer">
                <Link to="/" className="header-bar_logo footerLogo">Simple<span style={{color: "#E66A08", fontWeight: "bold"}}>Ways</span></Link>
        <div className="links">
        <div className="footerSocialNetworks">
            <Link className="footerSocialNetworksItem"><i class="fab fa-vk"></i></Link>
            <Link className="footerSocialNetworksItem"><i class="fab fa-instagram"></i></Link>
            <Link className="footerSocialNetworksItem"><i class="fab fa-telegram"></i></Link>
            </div>
            <div className="footerLinks">
                <Link className="footerLinkItem" to="/ways">Блог</Link>
                <Link className="footerLinkItem" to="/ways">О Нас</Link>
                <Link className="footerLinkItem" to="/ways">Сотрудничество</Link>
                <Link className="footerLinkItem" to="/ways">Документы</Link>
            </div>
            </div>
        </div>
    );
}
export default Footer;