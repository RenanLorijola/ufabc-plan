package br.com.ufabcplan.matricula;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import br.com.ufabcplan.aluno.Aluno;
import br.com.ufabcplan.curso.cursobi.CursoBI;

@Entity
public class Matricula {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@OneToOne
	@JoinColumn(name = "fk_aluno_id")
	private Aluno aluno;
	
	@OneToOne
	private CursoBI cursoBI;
	
	public Matricula(Aluno aluno, CursoBI cursoBI) {
		this.aluno = aluno;
		this.cursoBI = cursoBI;
	}

	@Deprecated
	public Matricula() {}

	public Long getId() {
		return id;
	}

	public Aluno getAluno() {
		return aluno;
	}

	public CursoBI getCursoBI() {
		return cursoBI;
	}

}
