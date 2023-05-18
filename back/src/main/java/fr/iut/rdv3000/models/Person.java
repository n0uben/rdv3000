package fr.iut.rdv3000.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

/**
 * Classe abstraites regroupant les informations communes entre employés et clients
 * L'attribut @mappedsuperclass permet de générer deux tables distinctes pour client et employés
 * qui recuperent les attributs de la superclasse
 * Source : (<a href="https://docs.jboss.org/hibernate/orm/6.2/userguide/html_single/Hibernate_User_Guide.html#entity-inheritance">doc hibernate</a>)
 */
@MappedSuperclass
public abstract class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 2)
    @Column(name = "prenom")
    private String firstName;

    @NotNull
    @Size(min = 2)
    @Column(name="nom")
    private String lastName;

    protected Person() {
    }

    protected Person(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}