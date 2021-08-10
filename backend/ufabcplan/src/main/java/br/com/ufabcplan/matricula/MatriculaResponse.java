package br.com.ufabcplan.matricula;

public class MatriculaResponse {

    private Long id;

    MatriculaResponse(Matricula matricula) {
        this.id = matricula.getId();
    }

    public Long getId() {
        return id;
    }
}
