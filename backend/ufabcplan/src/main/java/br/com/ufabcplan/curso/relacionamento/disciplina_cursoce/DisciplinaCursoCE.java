package br.com.ufabcplan.curso.relacionamento.disciplina_cursoce;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import br.com.ufabcplan.curso.cursoce.CursoCE;
import br.com.ufabcplan.curso.relacionamento.RelacionamentoCurso;
import br.com.ufabcplan.curso.relacionamento.TipoCurso;
import br.com.ufabcplan.disciplina.Disciplina;

@Entity
@Table(name = "cursoCE_Disciplina")
public class DisciplinaCursoCE extends RelacionamentoCurso {

	@OneToOne
	private CursoCE cursoCE;

	public DisciplinaCursoCE(Disciplina disciplina, TipoCurso tipoDoCurso, CursoCE cursoCE) {
		super(disciplina, tipoDoCurso);
		this.cursoCE = cursoCE;
	}
	
	@Deprecated
	public DisciplinaCursoCE() {}

	public CursoCE getCursoCE() {
		return cursoCE;
	}
	
}
