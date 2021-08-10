package br.com.ufabcplan.curso.relacionamento.disciplina_bachareladointerdiciplinar;

import javax.persistence.EntityManager;

import br.com.ufabcplan.curso.bachareladointerdiciplinar.BachareladoInterdiciplinar;
import br.com.ufabcplan.curso.relacionamento.TipoCurso;
import br.com.ufabcplan.disciplina.Disciplina;

public class DisciplinaBachareladoInterdiciplinarRequest {

	private Long disciplinaId;
	
	private TipoCurso tipoDoCurso;

	public DisciplinaBachareladoInterdiciplinarRequest(Long disciplinaId, TipoCurso tipoDoCurso) {
		this.disciplinaId = disciplinaId;
		this.tipoDoCurso = tipoDoCurso;
	}

	public Long getDisciplinaId() {
		return disciplinaId;
	}
	
	public TipoCurso getTipoDoCurso() {
		return tipoDoCurso;
	}

	public DisciplinaBachareladoInterdiciplinar toModel(EntityManager manager, Long cursoBIId) {
		BachareladoInterdiciplinar bachareladoInterdiciplinar = manager.find(BachareladoInterdiciplinar.class, cursoBIId);
		Disciplina disciplina = manager.find(Disciplina.class, disciplinaId);
		
		return new DisciplinaBachareladoInterdiciplinar(disciplina, tipoDoCurso, bachareladoInterdiciplinar);
	}
	
}
