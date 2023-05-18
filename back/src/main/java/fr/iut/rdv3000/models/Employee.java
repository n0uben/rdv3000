package fr.iut.rdv3000.models;

import jakarta.persistence.*;

@Entity
public class Employee extends Person {

    @Column(name = "poste")
    private String position;

    public String getPosition() {
        return position;
    }

    public Employee() {
        super();
    }

    public Employee(String firstName, String lastName, String position) {
        super(firstName, lastName);
        this.position = position;
    }

    public void setPosition(String position) {
        this.position = position;
    }


}
