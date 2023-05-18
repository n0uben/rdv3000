package fr.iut.rdv3000.repositories;

import fr.iut.rdv3000.models.RendezVous;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface RendezVousRepository extends JpaRepository<RendezVous, Long> {

    /**
     * Methode qui retourne les RDV qui :
     * - commencent avant un rdv et qui finisse pendant ou apres
     * - commencent pendant un rdv et qui finissent apres
     * - commencent pendant un rdv et qui finissent pendant
     * @param start
     * @param end
     * @param employeeId
     * @param clientId
     * @return
     */
    @Query("SELECT rdv FROM RendezVous rdv WHERE " +
            "(rdv.start <= :start AND rdv.end > :start OR " +
            "rdv.start < :end AND rdv.end >= :end OR " +
            "rdv.start >= :start AND rdv.end <= :end) " +
            "AND (rdv.employee.id = :employeeId OR rdv.client.id = :clientId)")
    List<RendezVous> findOverlappingRendezVous(
            @Param("start") Date start,
            @Param("end") Date end,
            @Param("employeeId") Long employeeId,
            @Param("clientId") Long clientId
    );
}
