package br.com.ufabcplan.disciplina;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
public class Disciplina {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	private String nome;
	
	@NotNull
	private Integer teoria;
	
	@NotNull
	private Integer pratica;
	
	@NotNull
	private Integer individual;
	
	@NotNull
	private Integer creditos;
	
	public Disciplina(String nome, Integer teoria, Integer pratica, Integer individual) {
		this.nome = nome;
		this.teoria = teoria;
		this.pratica = pratica;
		this.individual = individual;
		this.creditos = pratica + teoria;
	}
	
	public Disciplina() {}
	
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
