package br.com.ufabcplan.curso.cursoce;

import javax.persistence.EntityManager;

import br.com.ufabcplan.curso.cursobi.CursoBI;

public class CursoCERequest {

	private String nome;
	
	private Long cursoBI_id;

	public CursoCERequest(String nome, Long cursoBI_id) {
		this.nome = nome;
		this.cursoBI_id = cursoBI_id;
	}

	public String getNome() {
		return nome;
	}
	
	public Long getCursoBI_id() {
		return cursoBI_id;
	}

	public CursoCE toModel(EntityManager manager) {
		CursoBI cursoBI = manager.find(CursoBI.class, cursoBI_id);
		
		return new CursoCE(nome.toString(), cursoBI);
	}
}
