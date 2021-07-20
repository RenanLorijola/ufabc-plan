package br.com.ufabcplan.matricula;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/matriculas")
public class MatriculaController {

	@PersistenceContext
	private EntityManager manager;
	
	
	@PostMapping
	@Transactional
	public ResponseEntity<?> matricularAluno(@RequestBody MatriculaRequest request) {
		Matricula novaMatricula = request.toModel(manager);
		
		manager.persist(novaMatricula);
		
		return ResponseEntity.status(HttpStatus.OK).build();
	}
}
