package br.com.ufabcplan.matricula;

import javax.transaction.Transactional;

import br.com.ufabcplan.aluno.Aluno;
import br.com.ufabcplan.aluno.AlunoRepository;
import br.com.ufabcplan.curso.bachareladointerdiciplinar.BachareladoInterdiciplinarRepository;
import br.com.ufabcplan.curso.cursoespecifico.CursoEspecificoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/matriculas")
public class MatriculaController {

	@Autowired
	private MatriculaRepository matriculaRepository;
	@Autowired
	private BachareladoInterdiciplinarRepository bachareladoRepository;
	@Autowired
	private CursoEspecificoRepository cursoEspecificoRepository;
	@Autowired
	private AlunoRepository alunoRepository;

	@PostMapping("/curso/bi")
	@Transactional
	public ResponseEntity<MatriculaResponse> matricularAlunoNoCursoBI(@RequestBody MatriculaRequest request) {
		Matricula novaMatricula = request.toModelBI(alunoRepository, bachareladoRepository);
		matriculaRepository.save(novaMatricula);

		return ResponseEntity.status(HttpStatus.OK).body(new MatriculaResponse(novaMatricula));
	}

	@PostMapping("/curso/ce")
	@Transactional
	public ResponseEntity<MatriculaResponse> matricularAlunoNoCursoCE(@RequestBody MatriculaRequest request) {
		Matricula novaMatricula = request.toModelCE(alunoRepository, cursoEspecificoRepository);
		matriculaRepository.save(novaMatricula);

		return ResponseEntity.status(HttpStatus.OK).body(new MatriculaResponse(novaMatricula));
	}

	@GetMapping("/{idAluno}")
	public ResponseEntity<MatriculaDetalheResponse> consultarMatricula(@PathVariable("idAluno") Long idAluno) {
		Aluno aluno = alunoRepository.getById(idAluno);
		return ResponseEntity.ok().body(new MatriculaDetalheResponse(aluno));
	}

	@GetMapping("/{idAluno}/progresso")
	public ResponseEntity<MatriculaProgressoResponse> consultarProgresso(@PathVariable("idAluno") Long idAluno) {
		Aluno aluno = alunoRepository.getById(idAluno);
		return ResponseEntity.ok().body(new MatriculaProgressoResponse(aluno));
	}

}
