import {common} from "../../utils/common";

class BillingAddressData {
    constructor() {
        this.id = null;
        this.customerId = null;
        this.balance = null;
        this.balanceIncome = null;
        this.newBalance = null;
        this.description = null;
        this.createdAt = null;
        this.updatedAt = null;
    }

    getTableKeyList = () => {
        return ["id", "createdAt", "newBalance", "balanceIncome", "description"];
    }

    getLabelList = () => {
        return ["#", "Thời gian", "Số dư mới (VND)", "Tiền vào (VND)", "Nội dung"];
    }

    setObjectData = (data) => {
        this.id = data.id;
        this.customerId = data.customerId;
        this.balance = data.balance;
        this.balanceIncome = data.balanceIncome;
        this.newBalance = data.newBalance;
        this.description = data.description;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

    getObjectData = () => {
        return {
            id : this.id,
            customerId : this.customerId,
            balance : common.thousandFormat(this.balance),
            balanceIncome : common.thousandFormat(this.balanceIncome),
            newBalance : common.thousandFormat(this.newBalance),
            description : this.description,
            createdAt : this.createdAt,
            updatedAt : this.updatedAt
        }
    }
}

export default BillingAddressData;