package br.com.ufabcplan.curso.relacionamento.disciplina_cursoespecifico;

import javax.persistence.EntityManager;

import br.com.ufabcplan.curso.cursoespecifico.CursoEspecifico;
import br.com.ufabcplan.curso.relacionamento.TipoCurso;
import br.com.ufabcplan.disciplina.Disciplina;

public class DisciplinaCursoEspecificoRequest {
	
	private Long disciplinaId;
	
	private TipoCurso tipoDoCurso;

	public DisciplinaCursoEspecificoRequest(Long disciplinaId, TipoCurso tipoDoCurso) {
		this.disciplinaId = disciplinaId;
		this.tipoDoCurso = tipoDoCurso;
	}

	public Long getDisciplinaId() {
		return disciplinaId;
	}
	
	public TipoCurso getTipoDoCurso() {
		return tipoDoCurso;
	}
	
	public DisciplinaCursoEspecifico toModel(EntityManager manager, Long cursoCEId) {
		CursoEspecifico cursoEspecifico = manager.find(CursoEspecifico.class, cursoCEId);
		Disciplina disciplina = manager.find(Disciplina.class, disciplinaId);
		
		return new DisciplinaCursoEspecifico(disciplina, tipoDoCurso, cursoEspecifico);
	}
	
}
