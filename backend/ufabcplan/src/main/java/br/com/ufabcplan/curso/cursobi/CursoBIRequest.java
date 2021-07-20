package br.com.ufabcplan.curso.cursobi;

import com.fasterxml.jackson.annotation.JsonCreator;

public class CursoBIRequest {

	private String nome;

	@JsonCreator
	public CursoBIRequest(String nome) {
		this.nome = nome;
	}

	public String getNome() {
		return nome;
	}
	
	public CursoBI toModel() {
		return new CursoBI(nome);
	}
}
