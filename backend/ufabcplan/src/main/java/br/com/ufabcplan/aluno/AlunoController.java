package br.com.ufabcplan.aluno;

import javax.persistence.EntityManager;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/alunos")
public class AlunoController {
	
	@Autowired
	private AlunoRepository repository;
	
	@Autowired 
	private EntityManager manager;
	
	public AlunoController(AlunoRepository repository) {
		this.repository = repository;
	}
	
	@PostMapping
	public ResponseEntity<AlunoResponse> cadastrarAluno(@RequestBody @Valid AlunoRequest request) {
		Aluno novoAluno = request.paraEntidade(manager);
		
		repository.save(novoAluno); 
		return ResponseEntity.status(HttpStatus.CREATED).body(new AlunoResponse(novoAluno));
	}
	
}
