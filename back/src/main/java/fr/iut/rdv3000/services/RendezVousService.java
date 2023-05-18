package fr.iut.rdv3000.services;

import fr.iut.rdv3000.models.RendezVous;
import fr.iut.rdv3000.repositories.RendezVousRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RendezVousService {

    private RendezVousRepository repository;

    public RendezVousService(RendezVousRepository repository) {
        this.repository = repository;
    }

    /**
     * Si des rendez vous superposés avec un rdv donné existent,
     * renvoie true sinon false
     * @param rendezVous
     * @return
     */
    public boolean isThereAnOverlappingRdv(RendezVous rendezVous) {
        List<RendezVous> rendezVousList;

        rendezVousList = repository.findOverlappingRendezVous(rendezVous.getStart(),
                rendezVous.getEnd(),
                rendezVous.getEmployee().getId(),
                rendezVous.getClient().getId()
        );

        //si la liste est vide, renvoie false (il n'y a pas de rdv superposés
        return !rendezVousList.isEmpty();
    }
}
