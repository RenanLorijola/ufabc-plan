package br.com.ufabcplan.curso.relacionamento.disciplina_bachareladointerdiciplinar;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import br.com.ufabcplan.curso.bachareladointerdiciplinar.BachareladoInterdiciplinar;
import br.com.ufabcplan.curso.relacionamento.RelacionamentoCurso;
import br.com.ufabcplan.curso.relacionamento.TipoCurso;
import br.com.ufabcplan.disciplina.Disciplina;

@Entity
public class DisciplinaBachareladoInterdiciplinar extends RelacionamentoCurso {
	
	@ManyToOne
	private BachareladoInterdiciplinar bachareladoInterdiciplinar;

	public DisciplinaBachareladoInterdiciplinar(Disciplina disciplina, TipoCurso tipoDoCurso, BachareladoInterdiciplinar bachareladoInterdiciplinar) {
		super(disciplina, tipoDoCurso);
		this.bachareladoInterdiciplinar = bachareladoInterdiciplinar;
	}
	
	@Deprecated
	public DisciplinaBachareladoInterdiciplinar() {}

	public BachareladoInterdiciplinar getCursoBI() {
		return bachareladoInterdiciplinar;
	}
	
}
