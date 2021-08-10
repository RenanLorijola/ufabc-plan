package br.com.ufabcplan.matricula;

import br.com.ufabcplan.aluno.Aluno;
import br.com.ufabcplan.aluno.AlunoRepository;
import br.com.ufabcplan.curso.bachareladointerdiciplinar.BachareladoInterdiciplinar;
import br.com.ufabcplan.curso.bachareladointerdiciplinar.BachareladoInterdiciplinarRepository;
import br.com.ufabcplan.curso.cursoespecifico.CursoEspecifico;
import br.com.ufabcplan.curso.cursoespecifico.CursoEspecificoRepository;

public class MatriculaRequest {

	private Long alunoId;
	
	private Long cursoId;
	
	public MatriculaRequest(Long alunoId, Long cursoId) {
		this.alunoId = alunoId;
		this.cursoId = cursoId;
	}

	public Long getAlunoId() {
		return alunoId;
	}

	public Long getCursoId() {
		return cursoId;
	}
	
	public Matricula toModelBI(AlunoRepository alunoRepository, BachareladoInterdiciplinarRepository bachareladoRepository) {
		Aluno aluno = alunoRepository.getById(alunoId);
		BachareladoInterdiciplinar bacharelado = bachareladoRepository.getById(cursoId);
		return new Matricula(aluno, bacharelado);
	}

	public Matricula toModelCE(AlunoRepository alunoRepository, CursoEspecificoRepository cursoEspecificoRepository) {
		Aluno aluno = alunoRepository.getById(alunoId);
		CursoEspecifico cursoEspecifico = cursoEspecificoRepository.getById(cursoId);
		return new Matricula(aluno, cursoEspecifico);
	}
}
