package br.com.ufabcplan.aluno;

public class AlunoResponse {

	private Long id;
	
	private String ra;
	
	public AlunoResponse(Aluno aluno) {
		this.id = aluno.getId();
		this.ra = aluno.getRa();
	}

	public Long getId() {
		return id;
	}

	public String getRa() {
		return ra;
	}
	
}
