package br.com.ufabcplan.curso.cursoespecifico;

public class CursoEspecificoResponse {

    private Long id;
    private String nome;

    public CursoEspecificoResponse(CursoEspecifico cursoEspecifico) {
        this.id = cursoEspecifico.getId();
        this.nome = cursoEspecifico.getNome();
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }
}
