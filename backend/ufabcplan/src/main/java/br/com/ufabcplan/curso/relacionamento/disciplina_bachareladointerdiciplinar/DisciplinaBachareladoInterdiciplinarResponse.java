package br.com.ufabcplan.curso.relacionamento.disciplina_bachareladointerdiciplinar;

import java.util.Locale;

import br.com.ufabcplan.disciplina.Disciplina;

public class DisciplinaBachareladoInterdiciplinarResponse implements Comparable<DisciplinaBachareladoInterdiciplinarResponse> {
    private Long id;
    private String nome;
    private Integer teoria;
    private Integer pratica;
    private Integer individual;
    private Integer creditos;
    private String tipo;

    public DisciplinaBachareladoInterdiciplinarResponse(DisciplinaBachareladoInterdiciplinar cursos) {
        this.id = cursos.getDisciplina().getId();
        this.nome = cursos.getDisciplina().getNome();
        this.teoria = cursos.getDisciplina().getTeoria();
        this.pratica = cursos.getDisciplina().getPratica();
        this.individual = cursos.getDisciplina().getIndividual();
        this.creditos = cursos.getDisciplina().getCreditos();
        if(cursos.getTipoDoCurso().toString().toLowerCase(Locale.ROOT).equals("obrigatoria")) {
            this.tipo = "BI";
        } else {
            this.tipo = cursos.getTipoDoCurso().toString().toLowerCase(Locale.ROOT);
        }
    }

    public DisciplinaBachareladoInterdiciplinarResponse(Disciplina disciplina) {
        this.id = disciplina.getId();
        this.nome = disciplina.getNome();
        this.teoria = disciplina.getTeoria();
        this.pratica = disciplina.getPratica();
        this.individual = disciplina.getIndividual();
        this.creditos = disciplina.getCreditos();
        this.tipo = "livre";
    }

    public Long getId() {
        return id;
    }

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

    public String getTipo() {
        return tipo;
    }

    @Override
    public int compareTo(DisciplinaBachareladoInterdiciplinarResponse disciplina) {
        if (this.id > disciplina.getId()) {
            return 1;
        } if (this.id < disciplina.id) {
            return -1;
        }
        return 0;
    }
}