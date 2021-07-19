package br.com.ufabcplan.curso.relacionamento.disciplina_cursobi;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import br.com.ufabcplan.curso.cursobi.CursoBI;
import br.com.ufabcplan.curso.relacionamento.RelacionamentoCurso;
import br.com.ufabcplan.curso.relacionamento.TipoCurso;
import br.com.ufabcplan.disciplina.Disciplina;

@Entity
@Table(name = "cursoBI_Disciplina")
public class DisciplinaCursoBI extends RelacionamentoCurso {
	
	@OneToOne
	private CursoBI cursoBI;

	public DisciplinaCursoBI(Disciplina disciplina, TipoCurso tipoDoCurso, CursoBI cursoBI) {
		super(disciplina, tipoDoCurso);
		this.cursoBI = cursoBI;
	}
	
	@Deprecated
	public DisciplinaCursoBI() {}

	public CursoBI getCursoBI() {
		return cursoBI;
	}
	
}
