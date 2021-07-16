package br.com.ufabcplan.aluno;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotBlank;

import br.com.ufabcplan.matricula.Matricula;

@Entity
public class Aluno {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@Column(name = "RA", unique = true, nullable = false, length = 20)
	private String ra;
	
	@NotBlank
	@Column(name = "nome", unique = false, nullable = false, length = 50)
	private String nome;
	
	@NotBlank
	@Column(nullable = false, length = 77)
	private String senha;
	
	@OneToOne(mappedBy = "aluno")
	private Matricula matricula;

	public Aluno(String ra, String nome, String senha) {
		this.ra = ra;
		this.senha = senha;
		this.nome = nome;
	}
	
	public Aluno() {}

	public Long getId() {
		return id;
	}

	public String getRa() {
		return ra;
	}

	public String getNome() {
		return nome;
	}

	public String getSenha() {
		return senha;
	}

	public Matricula getMatricula() {
		return matricula;
	}
	
}