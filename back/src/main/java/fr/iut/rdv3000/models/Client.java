package fr.iut.rdv3000.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class Client extends Person {

    @Column
    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
