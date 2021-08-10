package br.com.ufabcplan.matricula.quadrimestre;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface QuadrimestreRepository extends JpaRepository<Quadrimestre, Long> {

}
