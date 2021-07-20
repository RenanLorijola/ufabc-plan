package br.com.ufabcplan.curso.cursobi;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.ufabcplan.curso.relacionamento.disciplina_cursobi.DisciplinaCursoBI;
import br.com.ufabcplan.curso.relacionamento.disciplina_cursobi.DisciplinaCursoBIRequest;

@RestController
@RequestMapping("/cursos/bi")
public class CursoBIController {
	
	@PersistenceContext
	private EntityManager manager;
	
	@PostMapping
	@Transactional
	public ResponseEntity<?> cadastrarCursoBI(@RequestBody @Valid CursoBIRequest request) {
		CursoBI novoCursoBI = request.toModel();
		manager.persist(novoCursoBI);
		
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@PostMapping("/{id}")
	@Transactional
	public ResponseEntity<?> associarDisciplina(@PathVariable(name = "id") Long cursoId, @RequestBody DisciplinaCursoBIRequest request) {
		DisciplinaCursoBI associacao = request.toModel(manager, cursoId);
		
		manager.merge(associacao);
		
		return ResponseEntity.status(HttpStatus.OK).build();
	}

}
