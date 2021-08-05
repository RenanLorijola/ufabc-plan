package br.com.ufabcplan.curso.bachareladointerdiciplinar;

import javax.persistence.*;

import br.com.ufabcplan.curso.Curso;
import br.com.ufabcplan.curso.relacionamento.disciplina_bachareladointerdiciplinar.DisciplinaBachareladoInterdiciplinar;

@Entity
public class BachareladoInterdiciplinar extends Curso {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@OneToOne(mappedBy = "bachareladoInterdiciplinar")
	private DisciplinaBachareladoInterdiciplinar cursoBIRelacionado;

	public BachareladoInterdiciplinar(String nome, String codigo, Integer livre, Integer limitada, Integer obrigatoria) {
		super(nome, codigo, livre, limitada, obrigatoria);
	}

	public BachareladoInterdiciplinar() {}

	public Long getId() {
		return id;
	}

	public DisciplinaBachareladoInterdiciplinar getCursoBIRelacionado() {
		return cursoBIRelacionado;
	}
}
