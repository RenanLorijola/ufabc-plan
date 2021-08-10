package br.com.ufabcplan.matricula.quadrimestre;

import br.com.ufabcplan.disciplina.DisciplinaDetalheResponse;

import java.util.List;
import java.util.stream.Collectors;

public class QuadrimestreTodosResponse {
    private Long id;
    private List<DisciplinaDetalheResponse> disciplinas;

    public QuadrimestreTodosResponse(Quadrimestre quadrimestre) {
        this.id = quadrimestre.getId();
        this.disciplinas = quadrimestre.getDisciplinas().stream().map(disciplina -> new DisciplinaDetalheResponse(disciplina)).collect(Collectors.toList());
    }

    public Long getId() {
        return id;
    }

    public List<DisciplinaDetalheResponse> getDisciplinas() {
        return disciplinas;
    }
}
