package br.com.ufabcplan.matricula;

import javax.persistence.EntityManager;

import br.com.ufabcplan.aluno.Aluno;
import br.com.ufabcplan.curso.cursobi.CursoBI;

public class MatriculaRequest {

	private Long alunoId;
	
	private Long cursoBiId;
	
	public MatriculaRequest(Long alunoId, Long cursoBiId) {
		this.alunoId = alunoId;
		this.cursoBiId = cursoBiId;
	}

	public Long getAlunoId() {
		return alunoId;
	}

	public Long getCursoBiId() {
		return cursoBiId;
	}
	
	public Matricula toModel(EntityManager manager) {
		
		return new Matricula(manager.find(Aluno.class, alunoId),
				manager.find(CursoBI.class, cursoBiId));
	}
}
