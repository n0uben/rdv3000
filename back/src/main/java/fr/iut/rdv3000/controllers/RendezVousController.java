package fr.iut.rdv3000.controllers;

import fr.iut.rdv3000.models.RendezVous;
import fr.iut.rdv3000.repositories.RendezVousRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rendezvous")
public class RendezVousController {

    private final RendezVousRepository repository;

    public RendezVousController(RendezVousRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<RendezVous> getAll() {
        return repository.findAll();
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<RendezVous> getOneById(@PathVariable final Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public RendezVous create(@RequestBody final RendezVous newRdv) {
        RendezVous rendezVousReceived = new RendezVous(
                newRdv.getTitle(),
                newRdv.getStart(),
                newRdv.getEnd(),
                newRdv.getEmployee(),
                newRdv.getClient()
        );
        return repository.saveAndFlush(rendezVousReceived);
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<RendezVous> update(@PathVariable Long id, @RequestBody final RendezVous rdv) {
        return repository.findById(id)
                .map(rdvBdd -> {
                    rdvBdd.setTitle(rdv.getTitle());
                    rdvBdd.setStart(rdv.getStart());
                    rdvBdd.setEnd(rdv.getEnd());
                    rdvBdd.setClient(rdv.getClient());
                    rdvBdd.setEmployee(rdv.getEmployee());

                    RendezVous updatedRdv = repository.saveAndFlush(rdvBdd);

                    return ResponseEntity.ok(updatedRdv);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<Object> deleteById(@PathVariable Long id) {
        return repository.findById(id)
                .map(rdv -> {
                    repository.deleteById(id);
                    return ResponseEntity.ok().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
