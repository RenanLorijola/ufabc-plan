package br.com.ufabcplan.aluno;

import javax.validation.constraints.NotBlank;

public class AlunoRequest {
	
	@NotBlank
	private String ra;
	
	@NotBlank
	private String nome;
	
	@NotBlank
	private String senha;
	
	public AlunoRequest(@NotBlank String ra, @NotBlank String nome, @NotBlank String senha) {
		this.ra = ra;
		this.nome = nome;
		this.senha = senha;
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
	
	public Aluno paraEntidade() {
		return new Aluno(ra, nome, senha);
	}
	
}
