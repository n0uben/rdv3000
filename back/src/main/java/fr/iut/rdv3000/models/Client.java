package fr.iut.rdv3000.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

@Entity
public class Client extends Person {

    @Column
    @Email
    @NotNull
    private String email;

    public Client(String firstName, String lastName, String email) {
        super(firstName, lastName);
        this.email = email;
    }

    public Client() {}

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
