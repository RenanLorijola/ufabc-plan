import { Subject } from 'types'

const todasMaterias: Subject[] = [
  {
    id: 1,
    name: 'Base Experimental das Ciências Naturais',
    teorical: 0,
    practical: 3,
    individual: 2,
    creditos: 3,
    type: 'BI'
  },
  {
    id: 2,
    name: 'Base Computacionais da Ciência',
    teorical: 0,
    practical: 2,
    individual: 2,
    creditos: 2,
    type: 'BI'
  },
  {
    id: 3,
    name: 'Bases Matemáticas',
    teorical: 4,
    practical: 0,
    individual: 5,
    creditos: 4,
    type: 'BI'
  },
  {
    id: 4,
    name: 'Bases Conceituais da Energia',
    teorical: 2,
    practical: 0,
    individual: 4,
    creditos: 2,
    type: 'BI'
  },
  {
    id: 5,
    name: 'Estrutura da Matéria',
    teorical: 3,
    practical: 0,
    individual: 4,
    creditos: 3,
    type: 'BI'
  },
  {
    id: 6,
    name: 'Evolução e diversificação da Vida na Terra',
    teorical: 3,
    practical: 0,
    individual: 4,
    creditos: 3,
    type: 'BI'
  },
  {
    id: 7,
    name: 'Redes de Computadores',
    teorical: 3,
    practical: 1,
    individual: 4,
    creditos: 3,
    type: 'CE'
  },
  {
    id: 8,
    name: 'Sistemas Operacionais',
    teorical: 3,
    practical: 1,
    individual: 4,
    creditos: 3,
    type: 'CE'
  },
  {
    id: 9,
    name: 'Liguagens Formais e Automatas',
    teorical: 0,
    practical: 3,
    individual: 2,
    creditos: 3,
    type: 'CE'
  },
  {
    id: 10,
    name: 'Fundamentos da Biotecnologia',
    teorical: 2,
    practical: 0,
    individual: 2,
    creditos: 2,
    type: 'livre'
  },
  {
    id: 11,
    name: 'Calculo Númerico',
    teorical: 4,
    practical: 0,
    individual: 4,
    creditos: 4,
    type: 'limitado'
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
