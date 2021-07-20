package br.com.ufabcplan.curso.cursoce;

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

import br.com.ufabcplan.curso.relacionamento.disciplina_cursoce.DisciplinaCursoCE;
import br.com.ufabcplan.curso.relacionamento.disciplina_cursoce.DisciplinaCursoCERequest;

@RestController
@RequestMapping("/cursos/ce")
public class CursoCEController {
	
	@PersistenceContext
	private EntityManager manager;
	
	@PostMapping
	@Transactional
	public ResponseEntity<?> cadastrarCursoBI(@RequestBody @Valid CursoCERequest request) {
		CursoCE novoCursoCE = request.toModel(manager);
		manager.persist(novoCursoCE);
		
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@PostMapping("/{id}")
	@Transactional
	public ResponseEntity<?> associarDisciplina(@PathVariable(name = "id") Long cursoId, @RequestBody DisciplinaCursoCERequest request) {
		DisciplinaCursoCE associacao = request.toModel(manager, cursoId);
		
		manager.merge(associacao);
		
		return ResponseEntity.status(HttpStatus.OK).build();
	}

}
