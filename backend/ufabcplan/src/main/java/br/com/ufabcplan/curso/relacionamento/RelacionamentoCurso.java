package br.com.ufabcplan.curso.relacionamento;

import javax.persistence.*;

import br.com.ufabcplan.disciplina.Disciplina;

@MappedSuperclass
public abstract class RelacionamentoCurso {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	private Disciplina disciplina;
	
	@Enumerated(EnumType.STRING)
	private TipoCurso tipoDoCurso;
	
	public RelacionamentoCurso(Disciplina disciplina, TipoCurso tipoDoCurso) {
		super();
		this.disciplina = disciplina;
		this.tipoDoCurso = tipoDoCurso;
	}

	public RelacionamentoCurso() {}

	public Long getId() {
		return id;
	}

	public Disciplina getDisciplina() {
		return disciplina;
	}

	public TipoCurso getTipoDoCurso() {
		return tipoDoCurso;
	}
}
