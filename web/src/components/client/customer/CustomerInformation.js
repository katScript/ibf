import React, {Component} from "react";
import wrapper from "components/app/wrapper";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import {common} from "utils/common";
import {getCustomerById, saveCustomerInfo} from "api/customer/customer";
import CustomerData from "models/customer/customer-data";
import Swal from "sweetalert2";
import FormValidateRule from "components/common/FormValidateRule";
import ChangePasswordModel from "../../admin/user/ChangePasswordModel";

class CustomerInformation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            fullName: "",
            phone: "",
            email: "",
            currentMoneyLabel: "",
            totalMoneyLabel: "",
            username: ""
        }

        this.customerData = new CustomerData();

        this.customer = JSON.parse(localStorage.getItem(common.userHashId.customer));
        this.fetchCustomerDataById(this.customer.id).then((r) => {
            this.customerData.setObjectData(r);
            this.customerData.saveLocalStorageData();

            const data = this.customerData.getObjectData();
            this.setState({
                id: data.id,
                fullName: data.fullName,
                phone: data.phone,
                email: data.email,
                currentMoneyLabel: data.currentMoney,
                totalMoneyLabel: data.totalMoney,
                subscription: false,
                username: data.username
            });
        });
    }

    handleChangeInput = async (event) => {
        const { name, value } = event.target
        this.setState({[name] : value});
    }

    fetchCustomerDataById = async (id) => {
        const {data} = await getCustomerById(id);
        return data;
    }

    saveCustomer = async () => {
        await saveCustomerInfo(this.state);
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.saveCustomer().then(() => {
            return Swal.fire({
                title: 'Th??nh c??ng!',
                text: 'L??u th??ng tin kh??ch h??ng th??nh c??ng!',
                icon: 'success',
                confirmButtonText: '????ng',
            }).then(r => {
                common.redirect("/customer");
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

    render() {
        return (
            <div className="CustomerInformation">
                <div className="content-body">
                    <Breadcrumb item={[]}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="card-title font-medium col-lg-3">
                                                {this.state.username}
                                            </div>
                                            <div className="col-lg-9">
                                                <ChangePasswordModel username={this.state.username}/>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="form-validation">
                                            <form className="customer-information" onSubmit={this.handleFormSubmit}>
                                                <div className="form-group row justify-content-center">
                                                    <label className="col-lg-2 col-form-label"
                                                           htmlFor="fullName">H??? v?? t??n
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-8">
                                                        <input type="text" className="form-control" id="fullName"
                                                               name="fullName" placeholder="H??? v?? t??n"
                                                               value={this.state.fullName} onChange={this.handleChangeInput}/>
                                                    </div>
                                                </div>
                                                <div className="form-group row justify-content-center">
                                                    <label className="col-lg-2 col-form-label"
                                                           htmlFor="phone">S??? ??i???n tho???i
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-8">
                                                        <input type="text" className="form-control" id="phone"
                                                               name="phone" placeholder="S??? ??i???n tho???i"
                                                               value={this.state.phone} onChange={this.handleChangeInput}/>
                                                    </div>
                                                </div>
                                                <div className="form-group row justify-content-center">
                                                    <label className="col-lg-2 col-form-label"
                                                           htmlFor="email">Email
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-8">
                                                        <input type="text" className="form-control" id="email"
                                                               name="email" placeholder="Email"
                                                               value={this.state.email} onChange={this.handleChangeInput}/>
                                                    </div>
                                                </div>

                                                <div className="form-group row justify-content-center">
                                                    <div className="col-lg-10">
                                                        <button type="submit" className="btn btn-primary float-right">L??u th??ng tin</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <FormValidateRule form=".customer-information" />
                                    <FormValidateRule form=".password-account" />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="h-100">
                                    <div className="col-lg-12 card gradient-1 p-0">
                                        <div className="card-body">
                                            <div className="d-inline-block">
                                                <h3 className="card-title text-white">S??? ti???n hi???n t???i</h3>
                                                <h2 className="text-white">{this.state.currentMoneyLabel} VND</h2>
                                            </div>
                                            <span className="float-right display-4 opacity-5"><i
                                                className="fas fa-wallet"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 card gradient-7 p-0">
                                        <div className="card-body">
                                            <div className="d-inline-block">
                                                <h3 className="card-title text-white">T???ng ti???n ???? n???p</h3>
                                                <h2 className="text-white">{this.state.totalMoneyLabel} VND</h2>
                                            </div>
                                            <span className="float-right display-4 opacity-5"><i
                                                className="far fa-money-bill-alt"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default wrapper(CustomerInformation);