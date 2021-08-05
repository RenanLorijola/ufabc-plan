package br.com.ufabcplan.curso.cursoespecifico;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import br.com.ufabcplan.curso.Curso;
import br.com.ufabcplan.curso.bachareladointerdiciplinar.BachareladoInterdiciplinar;

@Entity
public class CursoEspecifico extends Curso {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@OneToOne
	private BachareladoInterdiciplinar bachareladoInterdiciplinar;
	public CursoEspecifico(String nome, String codigo, Integer livre, Integer limitada, Integer obrigatoria, BachareladoInterdiciplinar bachareladoInterdiciplinar) {
		super(nome, codigo, livre, limitada, obrigatoria);
		this.bachareladoInterdiciplinar = bachareladoInterdiciplinar;
	}

	@Deprecated
	public CursoEspecifico() {}

	public Long getId() {
		return id;
	}

	public BachareladoInterdiciplinar getBachareladoInterdiciplinar() {
		return bachareladoInterdiciplinar;
	}
	
}
