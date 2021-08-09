import { Subject } from 'types'

const todasMaterias: Subject[] = [
  {
    id: 1,
    name: 'Base Experimental das Ciências Naturais1',
    teorical: 0,
    practical: 3,
    individual: 2,
    creditos: 3,
    type: 'BI'
  },
  {
    id: 2,
    name: 'Base Computacionais da Ciência1',
    teorical: 0,
    practical: 2,
    individual: 2,
    creditos: 2,
    type: 'CE'
  },
  {
    id: 3,
    name: 'Base Experimental das Ciências Naturais2',
    teorical: 0,
    practical: 3,
    individual: 2,
    creditos: 3,
    type: 'BI'
  },
  {
    id: 4,
    name: 'Base Computacionais da Ciência2',
    teorical: 0,
    practical: 2,
    individual: 2,
    creditos: 2,
    type: 'livre'
  },
  {
    id: 5,
    name: 'Base Experimental das Ciências Naturais3',
    teorical: 0,
    practical: 3,
    individual: 2,
    creditos: 3,
    type: 'BI'
  },
  {
    id: 6,
    name: 'Base Computacionais da Ciência3',
    teorical: 0,
    practical: 2,
    individual: 2,
    creditos: 2,
    type: 'CE'
  },
  {
    id: 7,
    name: 'Base Experimental das Ciências Naturais4',
    teorical: 0,
    practical: 3,
    individual: 2,
    creditos: 3,
    type: 'limitado'
  },
  {
    id: 8,
    name: 'Base Computacionais da Ciência4',
    teorical: 0,
    practical: 2,
    individual: 2,
    creditos: 2,
    type: 'limitado'
  },
  {
    id: 9,
    name: 'Base Experimental das Ciências Naturais5',
    teorical: 0,
    practical: 3,
    individual: 2,
    creditos: 3,
    type: 'BI'
  },
  {
    id: 10,
    name: 'Base Computacionais da Ciência5',
    teorical: 0,
    practical: 2,
    individual: 2,
    creditos: 2,
    type: 'BI'
  }
]

const disciplinasCursadas: Subject[][] = [[]]

const curso = {
  nome: 'BCC',
  sigla: 'BCC',
  obrigatorias: 70,
  obrigatoriasBI: 90,
  limitadas: 30,
  livres: 12
}

const matricula = {
  disciplinas: disciplinasCursadas,
  livres: 0,
  limitadas: 0,
  obrigatoriasBI: 0,
  obrigatoriasCE: 0,
  cursoCE: 'BCC',
  cursoBI: 'BC&T'
}

const aluno = {
  nome: 'Renan'
}

export { matricula, curso, aluno, todasMaterias }
