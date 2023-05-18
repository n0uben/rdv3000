package fr.iut.rdv3000.models;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "RENDEZVOUS")
public class RendezVous {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "titre")
    private String title;

    @Column(name = "debut")
    private Date start;

    @Column(name = "fin")
    private Date end;

    @ManyToOne
    private Employee employee;

    @ManyToOne
    private Client client;

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
}
