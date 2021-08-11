package br.com.ufabcplan.curso.relacionamento.disciplina_bachareladointerdiciplinar;

import br.com.ufabcplan.curso.bachareladointerdiciplinar.BachareladoInterdiciplinar;
import br.com.ufabcplan.disciplina.Disciplina;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DisciplinaBachareladoInterdiciplinarRepository extends JpaRepository<DisciplinaBachareladoInterdiciplinar, Long> {
    List<DisciplinaBachareladoInterdiciplinar> findByBachareladoInterdiciplinar(BachareladoInterdiciplinar cursoBI);
}
