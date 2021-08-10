package br.com.ufabcplan.aluno;

public class AlunoNomeResponse {

	private String nome;

	public AlunoNomeResponse(Aluno aluno) {
		this.nome = aluno.getNome();
	}

	public String getNome() {
		return nome;
	}
}
