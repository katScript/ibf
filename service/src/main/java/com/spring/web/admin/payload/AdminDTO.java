package com.spring.web.admin.payload;

public class AdminDTO {
    private Long id;

    private String fullName;

    private String phone;

    private String address;

    private String currentAddress;

    private String createdAt;

    private String updatedAt;

    public AdminDTO() {}

    public AdminDTO(
            Long id,
            String fullName,
            String phone,
            String address,
            String currentAddress,
            String createdAt,
            String updatedAt
    ) {
        this.id = id;
        this.fullName = fullName;
        this.phone = phone;
        this.address = address;
        this.currentAddress = currentAddress;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCurrentAddress() {
        return currentAddress;
    }

    public void setCurrentAddress(String currentAddress) {
        this.currentAddress = currentAddress;
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
}
