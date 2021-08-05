package br.com.ufabcplan.matricula;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import br.com.ufabcplan.aluno.Aluno;
import br.com.ufabcplan.curso.bachareladointerdiciplinar.BachareladoInterdiciplinar;
import br.com.ufabcplan.curso.cursoespecifico.CursoEspecifico;

@Entity
public class Matricula {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@OneToOne
	@JoinColumn(name = "fk_aluno_id")
	private Aluno aluno;

	@OneToOne
	private BachareladoInterdiciplinar bachareladoInterdiciplinar;

	@OneToOne
	private CursoEspecifico cursoEspecifico;
	
	public Matricula(Aluno aluno, BachareladoInterdiciplinar bachareladoInterdiciplinar) {
		this.aluno = aluno;
		this.bachareladoInterdiciplinar = bachareladoInterdiciplinar;
	}

	public Matricula(Aluno aluno, CursoEspecifico cursoEspecifico) {
		this.aluno = aluno;
		this.cursoEspecifico = cursoEspecifico;
	}

	@Deprecated
	public Matricula() {}

	public Long getId() {
		return id;
	}

	public Aluno getAluno() {
		return aluno;
	}

	public BachareladoInterdiciplinar getCursoBI() {
		return bachareladoInterdiciplinar;
	}

	public CursoEspecifico getCursoCE() {
		return cursoEspecifico;
	}
}
