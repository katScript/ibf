import React, {Component} from "react";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import wrapper from "components/app/wrapper";
import {getPackageById, savePackage} from "api/order/package";
import Swal from "sweetalert2";
import {common} from "utils/common";

class PackageForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            serviceId: null,
            packageName: "",
            price: "",
            status: "",
            note: "",
            title: "Create new package"
        }

        if (this.props.params.id) {
            this.getPackageDataById(this.props.params.id).then((r) => {
                this.setState({
                    id: r.id,
                    serviceId: r.serviceId,
                    packageName: r.packageName,
                    price: r.price,
                    status: r.status,
                    note: r.note,
                    title: `Update package "${r.packageName}"`
                });
            });
        }
    }

    handleChangeInput = async (event) => {
        const { name, value } = event.target
        this.setState({[name] : value});
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        savePackage(this.state).then(() => {
            Swal.fire({
                title: 'Good job!',
                text: 'You clicked the button.',
                icon: 'success'
            }).then(() => {
                common.redirect("/admin/package")
            });
        }).catch((e) => {
            Swal.fire({
                icon: 'error',
                title: 'Lỗi...',
                text: 'Something went wrong!'
            });
        });
    }

    getPackageDataById = async (id) => {
        const {data} = await getPackageById(id);
        return data;
    }

    staticContentImport = () => {
        const staticContent = this.props.staticContent;

        staticContent.useBodyStaticScript("/plugins/validation/jquery.validate.min.js");
        staticContent.useBodyStaticScript("/js/custom/validate.js");
    }


    render() {
        const packageName = this.state.packageName,
            price = this.state.price,
            status = this.state.status,
            note = this.state.note,
            title = this.state.title;

        return (
            <div className="PackageForm">
                <div className="content-body">
                    <Breadcrumb item={[]}/>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title font-medium col-8">{title}</h4>
                                        <hr/>
                                        <div className="form-validation">
                                            <form className="form-valide" onSubmit={this.handleFormSubmit}>
                                                <div className="form-group row justify-content-center">
                                                    <label className="col-lg-4 col-form-label"
                                                           htmlFor="packageName">Tên gói dịch vụ
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input type="text" className="form-control" id="packageName"
                                                               name="packageName" placeholder="Tên gói dịch vụ"
                                                               value={packageName} onChange={this.handleChangeInput}/>
                                                    </div>
                                                </div>

                                                <div className="form-group row justify-content-center">
                                                    <label className="col-lg-4 col-form-label"
                                                           htmlFor="price">Giá tiền
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input type="number" className="form-control" id="price"
                                                               name="price" placeholder="Giá tiền" value={price}
                                                               onChange={this.handleChangeInput}/>
                                                    </div>
                                                </div>

                                                <div className="form-group row justify-content-center">
                                                    <label className="col-lg-4 col-form-label"
                                                           htmlFor="status">Trạng thái
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input type="text" className="form-control" id="status"
                                                               name="status" placeholder="Trạng thái"
                                                               value={status} onChange={this.handleChangeInput}/>
                                                    </div>
                                                </div>

                                                <div className="form-group row justify-content-center">
                                                    <label className="col-lg-4 col-form-label"
                                                           htmlFor="note">Ghi chú
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <textarea className="form-control" id="note"
                                                                  name="note" rows="5"
                                                                  placeholder="Ghi chú" value={note}
                                                                  onChange={this.handleChangeInput}>
                                                        </textarea>
                                                    </div>
                                                </div>

                                                <div className="form-group row justify-content-center">
                                                    <div className="col-lg-10">
                                                        <button type="submit" className="btn btn-primary float-right">Lưu</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <this.staticContentImport/>
            </div>
        );
    }
}

export default wrapper(PackageForm);