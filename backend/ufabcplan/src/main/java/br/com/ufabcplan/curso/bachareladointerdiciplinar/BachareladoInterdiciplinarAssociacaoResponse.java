package br.com.ufabcplan.curso.bachareladointerdiciplinar;

import br.com.ufabcplan.curso.relacionamento.disciplina_bachareladointerdiciplinar.DisciplinaBachareladoInterdiciplinar;

public class BachareladoInterdiciplinarAssociacaoResponse {

    private Long id;

    BachareladoInterdiciplinarAssociacaoResponse(DisciplinaBachareladoInterdiciplinar disciplinaBachareladoInterdiciplinar) {
        this.id = disciplinaBachareladoInterdiciplinar.getId();
    }

    public Long getId() {
        return id;
    }
}
