package fr.iut.rdv3000.controllers;

import fr.iut.rdv3000.models.RendezVous;
import fr.iut.rdv3000.repositories.RendezVousRepository;
import fr.iut.rdv3000.services.RendezVousService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rendezvous")
@CrossOrigin(origins = "http://localhost:3000")
public class RendezVousController {

    private final RendezVousRepository repository;

    private final RendezVousService service;

    public RendezVousController(RendezVousRepository repository, RendezVousService service) {
        this.repository = repository;
        this.service = service;
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

    /**
     * Methode pour creer un RDV. Si est en conflit avec un rdv existant, renvoie le status bad request
     * @param newRdv Rendez vous RequestBody
     * @return ResponseEntity<RendezVous>
     */
    @PostMapping
    public ResponseEntity<RendezVous> create(@RequestBody final RendezVous newRdv) {

        RendezVous rendezVousReceived = new RendezVous(
                newRdv.getTitle(),
                newRdv.getStart(),
                newRdv.getEnd(),
                newRdv.getEmployee(),
                newRdv.getClient()
        );

        if (service.isThereAnOverlappingRdv(rendezVousReceived)) {
            return ResponseEntity.badRequest().build();
        }

        RendezVous rdvCreated = repository.saveAndFlush(rendezVousReceived);
        return ResponseEntity.ok(rdvCreated);
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
