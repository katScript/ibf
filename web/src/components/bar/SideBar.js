import React, {Component} from "react";
import {Link} from "react-router-dom";
import {common} from "utils/common";
import {getAllServiceByCategory} from "api/order/service";
import SideBarManager from "components/bar/SideBarManager";

class SideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            facebook: [],
            instagram: [],
            tiktok: [],
            shopee: [],
            youtube: [],
            telegram: []
        }
    }

    componentWillMount() {
        common.categoryOption().forEach((e) => {
            this.getServiceDataByCategory(e.value).then(async (r) => {
                await this.setState({[e.value]: r});
            });
        });
    }

    getServiceDataByCategory = async (category) => {
        const {data} = await getAllServiceByCategory(category);
        return data;
    }

    render() {
        const {facebook, instagram, tiktok, shopee, youtube, telegram} = this.state;

        return (
            <div className="SideBar">
                <div className="nk-sidebar">
                    <div className="nk-nav-scroll">
                        <ul className="metismenu" id="menu">
                            <li>
                                <Link to="/">
                                    <i className="icon-screen-desktop menu-icon"></i><span
                                    className="nav-text">Home</span>
                                </Link>
                            </li>
                            <li className="nav-label">Customer</li>
                            {this.props.isLogin && (
                                <li>
                                    <a href="#account" className="has-arrow" aria-expanded="false">
                                    <i className="icon-user menu-icon"></i>
                                        <span className="nav-text">Account</span>
                                    </a>
                                    <ul aria-expanded="false">
                                        <li><Link to="/customer"><i className="icon-book-open menu-icon"></i>Information</Link></li>
                                        <li><Link to="/customer/recharge"><i className="icon-credit-card menu-icon"></i>Recharge</Link></li>
                                        <li><Link to="/customer/history"><i className="icon-notebook menu-icon"></i>History</Link></li>
                                    </ul>
                                </li>
                                )}
                            <li className="nav-label">Service</li>
                            <li>
                                <a href="#facebook" className="has-arrow" aria-expanded="false">
                                    <i className="menu-icon font-tiny">
                                        <i className="fab fa-facebook-f"></i>
                                    </i><span className="nav-text">Facebook</span>
                                </a>
                                <ul aria-expanded="false">
                                    {facebook.map((e) => {
                                        return (
                                            <li key={e.id}>
                                                <Link to={"/place/order/service/" + e.id}>{e.serviceName}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                            <li>
                                <a href="#instagram" className="has-arrow" aria-expanded="false">
                                    <i className="menu-icon font-tiny">
                                        <i className="fab fa-instagram"></i>
                                    </i><span className="nav-text">Instagram</span>
                                </a>
                                <ul aria-expanded="false">
                                    {instagram.map((e) => {
                                        return (
                                            <li key={e.id}>
                                                <Link to={"/place/order/service/" + e.id}>{e.serviceName}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                            <li>
                                <a href="#tiktock" className="has-arrow" aria-expanded="false">
                                    <i className="menu-icon font-tiny">
                                        <i className="fab fa-tiktok"></i>
                                    </i>
                                    <span className="nav-text">TikTok</span>
                                </a>
                                <ul aria-expanded="false">
                                    {tiktok.map((e) => {
                                        return (
                                            <li key={e.id}>
                                                <Link to={"/place/order/service/" + e.id}>{e.serviceName}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                            <li>
                                <a href="#shopee" className="has-arrow" aria-expanded="false">
                                    <i className="menu-icon font-tiny">
                                        <i className="fab fa-shopify"></i>
                                    </i>
                                    <span className="nav-text">Shopee</span>
                                </a>
                                <ul aria-expanded="false">
                                    {shopee.map((e) => {
                                        return (
                                            <li key={e.id}>
                                                <Link to={"/place/order/service/" + e.id}>{e.serviceName}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                            <li>
                                <a href="#youtube" className="has-arrow" aria-expanded="false">
                                    <i className="menu-icon font-tiny">
                                        <i className="fab fa-youtube"></i>
                                    </i>
                                    <span className="nav-text">Youtube</span>
                                </a>
                                <ul aria-expanded="false">
                                    {youtube.map((e) => {
                                        return (
                                            <li key={e.id}>
                                                <Link to={"/place/order/service/" + e.id}>{e.serviceName}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                            <li>
                                <a href="#telegram" className="has-arrow" aria-expanded="false">
                                    <i className="menu-icon font-tiny">
                                        <i className="fab fa-telegram-plane"></i>
                                    </i>
                                    <span className="nav-text">Telegram</span>
                                </a>
                                <ul aria-expanded="false">
                                    {telegram.map((e) => {
                                        return (
                                            <li key={e.id}>
                                                <Link to={"/place/order/service/" + e.id}>{e.serviceName}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <SideBarManager/>
            </div>
        );
    }
}

export default SideBar;