package br.com.ufabcplan.matricula.quadrimestre;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.ufabcplan.aluno.Aluno;
import br.com.ufabcplan.aluno.AlunoRepository;
import br.com.ufabcplan.curso.relacionamento.disciplina_bachareladointerdiciplinar.DisciplinaBachareladoInterdiciplinarRepository;
import br.com.ufabcplan.disciplina.Disciplina;
import br.com.ufabcplan.disciplina.DisciplinaRepository;
import br.com.ufabcplan.matricula.Matricula;
import br.com.ufabcplan.matricula.MatriculaDisciplinaRequest;
import br.com.ufabcplan.matricula.MatriculaRepository;
import br.com.ufabcplan.matricula.MatriculaService;

@RestController
@RequestMapping("/matriculas/{idAluno}")
public class QuadrimestreController {

    @Autowired
    private QuadrimestreRepository quadrimestreRepository;
    @Autowired
    private AlunoRepository alunoRepository;
    @Autowired
    private DisciplinaRepository disciplinaRepository;
    @Autowired
    private MatriculaRepository matriculaRepository;
    @Autowired
    private DisciplinaBachareladoInterdiciplinarRepository DBRepository;
    @Autowired
    private MatriculaService matriculaService;

    @GetMapping("/quadrimestre")
    public ResponseEntity<List<QuadrimestreTodosResponse>> consultarQuadrimestres(@PathVariable("idAluno") Long idAluno) {
        Aluno aluno = alunoRepository.getById(idAluno);

        List<QuadrimestreTodosResponse> quadrimestres = aluno.getMatricula().getQuadrimestres().stream()
                .map(quadrimestre -> new QuadrimestreTodosResponse(quadrimestre)).collect(Collectors.toList());

        return ResponseEntity.ok().body(quadrimestres);
    }

    @PostMapping("/quadrimestre")
    @Transactional
    public ResponseEntity<?> criarQuadrimestre(@PathVariable("idAluno") Long idAluno) {
        Aluno aluno = alunoRepository.getById(idAluno);

        Matricula matricula = aluno.getMatricula();
        matricula.criarQuadrimestre(new Quadrimestre());
        matriculaRepository.save(matricula);

        return ResponseEntity.ok().build();
    }

    @PutMapping("/quadrimestre/{id}")
    public ResponseEntity<?> deletarQuadrimestre(@PathVariable("idAluno") Long idAluno, @PathVariable("id") Long idQuadrimestre) {
        verificaMatricula(idAluno, idQuadrimestre);

        Quadrimestre quadrimestre = quadrimestreRepository.getById(idQuadrimestre);

        Aluno aluno = alunoRepository.getById(idAluno);
        Matricula matricula = aluno.getMatricula();

        matricula.getQuadrimestres().remove(quadrimestre);

        matriculaRepository.save(matricula);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/quadrimestre/concluidas")
    @Transactional
    public ResponseEntity<?> adicionarDisciplina(@PathVariable("idAluno") Long idAluno, @RequestBody MatriculaDisciplinaRequest request) {
        verificaMatricula(idAluno, request.getQuadrimestreId());

        Aluno aluno = alunoRepository.getById(idAluno);
        Matricula matricula = aluno.getMatricula();

        Quadrimestre quadrimestre = quadrimestreRepository.getById(request.getQuadrimestreId());
        Disciplina disciplina = disciplinaRepository.getById(request.getDisciplinaId());

        quadrimestre.adicionarDisciplina(disciplina);
        quadrimestreRepository.save(quadrimestre);

        matriculaService.somarCredito(matricula, disciplina);

        return ResponseEntity.ok().build();
    }

    @PutMapping("/quadrimestre/concluidas")
    @Transactional
    public ResponseEntity<?> deletarDisciplina(@PathVariable("idAluno") Long idAluno, @RequestBody MatriculaDisciplinaRequest request) {
        verificaMatricula(idAluno, request.getQuadrimestreId());

        Quadrimestre quadrimestre = quadrimestreRepository.getById(request.getQuadrimestreId());

        List<Disciplina> listaAtualizada = quadrimestre.getDisciplinas().stream().filter(disc -> disc.getId() != request.getDisciplinaId()).collect(Collectors.toList());
        quadrimestre.setDisciplinas(listaAtualizada);
        quadrimestreRepository.save(quadrimestre);

        return ResponseEntity.ok().build();
    }

    public ResponseEntity verificaMatricula(Long idAluno, Long idQuadrimestre) {
        Aluno aluno = alunoRepository.getById(idAluno);
        if(aluno.quadrimestrePertenceAluno(idQuadrimestre)) {
            return ResponseEntity.notFound().build();
        }
        return null;
    }

}
