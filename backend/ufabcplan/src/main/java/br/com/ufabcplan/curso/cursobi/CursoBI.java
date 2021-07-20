package br.com.ufabcplan.curso.cursobi;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import br.com.ufabcplan.curso.Curso;

@Entity
public class CursoBI extends Curso {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	public CursoBI(String nome) {
		super(nome);
	}
	
	public CursoBI() {}

	public Long getId() {
		return id;
	}
	
}
