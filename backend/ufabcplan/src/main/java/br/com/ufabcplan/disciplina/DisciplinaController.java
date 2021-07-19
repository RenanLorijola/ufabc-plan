package br.com.ufabcplan.disciplina;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/disciplinas")
public class DisciplinaController {

	@PersistenceContext
	private EntityManager manager;
	
	@PostMapping
	@Transactional
	public ResponseEntity<?> cadastrarDisciplina(@RequestBody @Valid DisciplinaRequest request) {
		Disciplina novaDisciplina = request.toModel();
		manager.persist(novaDisciplina);
		
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
}
