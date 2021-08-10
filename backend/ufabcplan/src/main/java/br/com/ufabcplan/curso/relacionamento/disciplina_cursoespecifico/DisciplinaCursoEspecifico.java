package br.com.ufabcplan.curso.relacionamento.disciplina_cursoespecifico;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import br.com.ufabcplan.curso.cursoespecifico.CursoEspecifico;
import br.com.ufabcplan.curso.relacionamento.RelacionamentoCurso;
import br.com.ufabcplan.curso.relacionamento.TipoCurso;
import br.com.ufabcplan.disciplina.Disciplina;

@Entity
public class DisciplinaCursoEspecifico extends RelacionamentoCurso {

	@ManyToOne
	private CursoEspecifico cursoEspecifico;

	public DisciplinaCursoEspecifico(Disciplina disciplina, TipoCurso tipoDoCurso, CursoEspecifico cursoEspecifico) {
		super(disciplina, tipoDoCurso);
		this.cursoEspecifico = cursoEspecifico;
	}
	
	@Deprecated
	public DisciplinaCursoEspecifico() {}

	public CursoEspecifico getCursoCE() {
		return cursoEspecifico;
	}
	
}
