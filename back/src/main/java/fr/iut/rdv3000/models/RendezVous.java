package fr.iut.rdv3000.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.util.Date;

@Entity
@Table(name = "RENDEZVOUS")
public class RendezVous {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(name = "titre")
    private String title;

    @Column(name = "debut")
    private Date start;

    @Column(name = "fin")
    private Date end;

    //ajouter notnull constraints a la fin
    @ManyToOne
    private Employee employee;

    //ajouter notnull constraints a la fin
    @ManyToOne
    private Client client;

    public RendezVous() {
    }

    public RendezVous(String title, Date start, Date end, Employee employee, Client client) {
        this.title = title;
        this.start = start;
        this.end = end;
        this.employee = employee;
        this.client = client;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getStart() {
        return start;
    }

    public void setStart(Date start) {
        this.start = start;
    }

    public Date getEnd() {
        return end;
    }

    public void setEnd(Date end) {
        this.end = end;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
}
