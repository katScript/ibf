import React, {Component, useEffect} from "react";
import wrapper from "components/app/wrapper";
import Swal from "sweetalert2";
import {common} from "utils/common";
import {changeCustomerBalance} from "api/customer/customer";
import {getAllBillingAddress} from "api/admin/admin";
import $ from 'jquery';
import FormValidateRule from "components/common/FormValidateRule";

class OnlineBanking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customerId: null,
            income: "",
            billingAddressId: "",
            billingAddressData: []
        };

        this.fetchAllCustomerBillingAddress().then((r) => {
            this.setState({billingAddressData: r});
        });
    }

    HooksData = () => {
        let data = this.props.data;

        useEffect(() => {
            this.setState({customerId: data.id})
        }, [data]);
    }

    fetchAllCustomerBillingAddress = async () => {
        const {data} = await getAllBillingAddress();
        return data;
    }

    changeBalance = async () => {
        await changeCustomerBalance(this.state.customerId, {
            income: this.state.income,
            billingAddressId: this.state.billingAddressId
        });
    }

    getBankInfo = (list) => {
        if (list.length > 0) {
            return (
                list.map((e, i) => {
                    return (
                        <div key={i}>
                            <div className="bank-element card-body gradient-4" data-key={i} onClick={this.handleSelectElement}>
                                <div className="media">
                                                <span className="card-widget__icon"><i
                                                    className="icon-wallet"></i></span>
                                    <div className="media-body">
                                        <h2 className="card-widget__title">{e.billingName}</h2>
                                        <h5 className="card-widget__subtitle">{e.accountNumber}</h5>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    )
                })
            );
        }

        return (<h4 className="text-danger">Kh??ng c?? t??i kho???n th??? h?????ng n??o!</h4>);
    }

    handleSelectElement = (event) => {
        $(".bank-element").removeClass("gradient-4")
            .removeClass("gradient-10")
            .addClass("gradient-4");

        const classList = event.currentTarget.classList,
            key = event.currentTarget.dataset.key,
            data = this.state.billingAddressData[key];

        classList.remove('gradient-4');
        classList.add("gradient-10");
        this.setState({billingAddressId: data.id});
    }

    handleChangeInput = async (event) => {
        const { name, value } = event.target
        this.setState({[name] : value});
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        if (!this.state.billingAddressId || this.state.billingAddressId === "") {
            Swal.fire({
                icon: 'error',
                title: 'L???i',
                text: "Kh??ng c?? t??i kho???n th??? h?????ng n??o ???????c ch???n!",
                confirmButtonText: '????ng',
            }).then(r => {
            });
        } else {
            this.changeBalance().then(() => {
                return Swal.fire({
                    title: 'Th??nh c??ng!',
                    text: 'N???p ti???n th??nh c??ng!',
                    icon: 'success',
                    confirmButtonText: '????ng',
                }).then(r => {
                    common.redirect("/admin/customer/" + this.state.customerId);
                });
            }).catch((e) => {
                Swal.fire({
                    icon: 'error',
                    title: 'L???i...',
                    text: "C?? l???i s???y ra vui l??ng th??? l???i sau!",
                    confirmButtonText: '????ng',
                }).then(r => {
                });
            });
        }
    }

    render() {

        const list = this.state.billingAddressData;

        return (
            <div className="OnlineBanking">
                <h4>{this.props.data.username} N???p ti???n online</h4>
                <hr/>
                <div className="container">
                    <form className="online-banking" onSubmit={this.handleFormSubmit}>
                        <div className="form-group row">
                            <label className="col-lg-4 col-form-label" htmlFor="income">T??i kho???n th??? h?????ng <span
                                className="text-danger">*</span>
                            </label>
                            <div className="col-lg-8">
                                {this.getBankInfo(list)}
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-lg-4 col-form-label" htmlFor="income">S??? ti???n <span
                                className="text-danger">*</span>
                            </label>
                            <div className="col-lg-8">
                                <input type="text" className="form-control" id="income" name="income"
                                       placeholder="VND" value={this.state.income}
                                       onChange={this.handleChangeInput}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-lg-8 ml-auto">
                                <button type="submit" className="btn btn-primary">X??c nh???n</button>
                            </div>
                        </div>
                    </form>
                </div>
                <this.HooksData/>
                <FormValidateRule form={".online-banking"}/>
            </div>
        );
    }
}

export default wrapper(OnlineBanking);