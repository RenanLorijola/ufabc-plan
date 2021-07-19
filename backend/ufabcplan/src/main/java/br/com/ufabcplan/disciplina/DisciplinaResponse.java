package br.com.ufabcplan.disciplina;

public class DisciplinaResponse {
	
	private String nome;
	private Integer teoria;
	private Integer pratica;
	private Integer individual;
	private Integer creditos;
	
	public DisciplinaResponse(Disciplina disciplina) {
		this.nome = disciplina.getNome();
		this.teoria = disciplina.getTeoria();
		this.pratica = disciplina.getPratica();
		this.individual = disciplina.getIndividual();
		this.creditos = disciplina.getCreditos();
	}

	public String getNome() {
		return nome;
	}

	public Integer getTeoria() {
		return teoria;
	}

	public Integer getPratica() {
		return pratica;
	}

	public Integer getIndividual() {
		return individual;
	}

	public Integer getCreditos() {
		return creditos;
	}

}
