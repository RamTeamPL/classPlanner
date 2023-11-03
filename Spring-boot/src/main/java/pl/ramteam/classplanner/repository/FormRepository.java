package pl.ramteam.classplanner.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.ramteam.classplanner.model.Form;

@Repository
public interface FormRepository extends JpaRepository<Form, Integer> {

}
