package br.com.ufabcplan.curso.cursoce;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import br.com.ufabcplan.curso.Curso;
import br.com.ufabcplan.curso.cursobi.CursoBI;

@Entity
public class CursoCE extends Curso {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@OneToOne
	private CursoBI cursoBiID;

	public CursoCE(String nome, CursoBI cursoBiID) {
		super(nome);
		this.cursoBiID = cursoBiID;
	}

	@Deprecated
	public CursoCE() {}

	public Long getId() {
		return id;
	}

	public CursoBI getCursoBiID() {
		return cursoBiID;
	}
	
}
