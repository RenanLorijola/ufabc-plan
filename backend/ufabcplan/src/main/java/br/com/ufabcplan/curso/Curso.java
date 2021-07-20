package br.com.ufabcplan.curso;

import javax.persistence.MappedSuperclass;
import javax.validation.constraints.NotBlank;

@MappedSuperclass
public abstract class Curso {
	
	@NotBlank
	private String nome;

	public Curso(String nome) {
		this.nome = nome;
	}
	
	public Curso() {}

	public String getNome() {
		return nome;
	}

}
