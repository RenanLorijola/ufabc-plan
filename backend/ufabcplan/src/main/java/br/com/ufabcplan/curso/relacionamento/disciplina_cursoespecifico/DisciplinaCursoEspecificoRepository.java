package br.com.ufabcplan.curso.relacionamento.disciplina_cursoespecifico;

import br.com.ufabcplan.curso.cursoespecifico.CursoEspecifico;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DisciplinaCursoEspecificoRepository extends JpaRepository<DisciplinaCursoEspecifico, Long> {
    List<DisciplinaCursoEspecifico> findByCursoEspecifico(CursoEspecifico cursoEspecifico);
}
