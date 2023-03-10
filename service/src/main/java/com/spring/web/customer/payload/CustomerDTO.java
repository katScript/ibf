package com.spring.web.customer.payload;

import com.spring.web.order.payload.OrderDTO;

import java.util.List;

public class CustomerDTO {
    private Long id;

    private String fullName;

    private String phone;

    private String email;

    private Boolean subscription;

    private Double currentMoney;

    private Double totalMoney;

    private List<OrderDTO> orders;

    private List<BalanceHistoryDTO> balanceHistory;

    private List<CustomerLogDTO> customerLog;

    private String username;

    private String createdAt;

    private String updatedAt;

    public CustomerDTO() {}

    public CustomerDTO(
            Long id,
            String fullName,
            String phone,
            String email,
            Boolean subscription,
            Double currentMoney,
            Double totalMoney,
            List<OrderDTO> orders,
            List<BalanceHistoryDTO> balanceHistory,
            List<CustomerLogDTO> customerLog,
            String username,
            String createdAt,
            String updatedAt
    ) {
        this.id = id;
        this.fullName = fullName;
        this.phone = phone;
        this.email = email;
        this.subscription = subscription;
        this.currentMoney = currentMoney;
        this.totalMoney = totalMoney;
        this.orders = orders;
        this.balanceHistory = balanceHistory;
        this.customerLog = customerLog;
        this.username = username;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getSubscription() {
        return subscription;
    }

    public void setSubscription(Boolean subscription) {
        this.subscription = subscription;
    }

    public Double getCurrentMoney() {
        return currentMoney;
    }

    public void setCurrentMoney(Double currentMoney) {
        this.currentMoney = currentMoney;
    }

    public Double getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(Double totalMoney) {
        this.totalMoney = totalMoney;
    }

    public List<OrderDTO> getOrders() {
        return orders;
    }

    public void setOrders(List<OrderDTO> orders) {
        this.orders = orders;
    }

    public List<BalanceHistoryDTO> getBalanceHistory() {
        return balanceHistory;
    }

    public void setBalanceHistory(List<BalanceHistoryDTO> balanceHistory) {
        this.balanceHistory = balanceHistory;
    }

    public List<CustomerLogDTO> getCustomerLog() {
        return customerLog;
    }

    public void setCustomerLog(List<CustomerLogDTO> customerLog) {
        this.customerLog = customerLog;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
