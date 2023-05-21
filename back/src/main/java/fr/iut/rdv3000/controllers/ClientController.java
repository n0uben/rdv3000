package fr.iut.rdv3000.controllers;

import fr.iut.rdv3000.models.Client;
import fr.iut.rdv3000.repositories.ClientRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/client")
@CrossOrigin(origins = "http://localhost:3000")
public class ClientController {
    private final ClientRepository repository;

    public ClientController(ClientRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Client> getAll() {
        return repository.findAll();
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<Client> getOneById(@PathVariable final Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Client create(@RequestBody final Client newClient) {
        Client clientReceived = new Client(newClient.getFirstName(), newClient.getLastName(), newClient.getEmail());

        return repository.saveAndFlush(clientReceived);
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<Client> update(@PathVariable Long id, @RequestBody final Client client) {
        return repository.findById(id)
                .map(clientBdd -> {
                    clientBdd.setFirstName(client.getFirstName());
                    clientBdd.setLastName(client.getLastName());
                    clientBdd.setEmail(client.getEmail());
                    Client updatedClient = repository.saveAndFlush(clientBdd);
                    return ResponseEntity.ok(updatedClient);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<Object> deleteById(@PathVariable Long id) {
        return repository.findById(id)
                .map(client -> {
                    repository.deleteById(id);
                    return ResponseEntity.ok().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

}
