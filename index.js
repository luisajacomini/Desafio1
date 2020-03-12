const alunosDaEscola = [
    {
      nome:`Henrique`,
      notas:[],
      cursos:[],
      faltas:5
    },
    {
          nome:`Edson`,
          notas:[],
          cursos:[],
          faltas:2
    },
    {
        nome:`Bruno`,
        notas:[10,9.8,9.6],
        cursos:[],
        faltas:0
    },
    {
        nome:`Guilherme`,
        notas:[10,9.8,9.6],
        cursos:[
            {
                nomeDoCurso:`Full Stack`,
                dataMatricula:new Date
            }],
        faltas:0
    },
    {
        nome:`Carlos`,
        notas:[],
        cursos:[],
        faltas:0
    },
    {
        nome:`Lucca`,
        notas:[10,9.8,9.6],
        cursos:[
            {
                nomeDoCurso:`UX`,
                dataMatricula:new Date
            }],
        faltas:0
    }
    ];



//funcao adicionar aluno

const adicionarAluno = nome => {
  alunosDaEscola.push(joao);
  console.log(alunosDaEscola.nome + ` foi adicionado ao array`)
  console.log(alunosDaEscola)
  
}

let joao = {
  nome:`João`,
  notas:[7, 8, 8, 9],
  cursos:[
      {
          nomeDoCurso:`UX`,
          dataMatricula:new Date
      }],
  faltas:0
}

adicionarAluno();



//funcao listar alunos

//modo A - usando slice

const listarAlunos = () => {
    let lista = alunosDaEscola.slice();
    console.log(lista);
}
listarAlunos();

//modo B - usando map

const listarAlunos = alunosDaEscola.map(alunos => {
    return alunos
})
console.log(listarAlunos);

//modo C - usando forEach - apenas os nomes

alunosDaEscola.forEach(function(aluno){
    console.log(aluno.nome);
})



//funcao buscar aluno pelo nome

const buscarAluno = (aluno, alunosDaEscola) => {
    let corte = alunosDaEscola.filter(nomeAluno => {
      return nomeAluno.nome.includes(aluno);
    });
    return corte;
  };
  
console.log(buscarAluno(`Lucca`, alunosDaEscola));



//funcao matricular aluno

const matricularAluno = aluno => {
    if (aluno.nomeDoCurso) {
      console.log(aluno.nome + ` está matriculado`);
    } else {
      aluno.cursos = `nomeDoCurso`;
      aluno.cursos.push(`UX`);
      let date = new Date();
      console.log(aluno.nome + ` foi matriculado` + date);
    }
    return aluno;
  };
matricularAluno();



//funcao aplicar falta

const aplicarFalta = aluno => {
    if(aluno.nomeDoCurso){
    console.log(`Aplicando falta em ` + aluno.nome);
    alunosDaEscola.faltas.push(`1`);
    return aluno;
    } else {
      console.log(`Aluno não matriculado`)
    }
}
aplicarFalta();



//funcao aplicar nota

const aplicarNota = aluno => {
  if(aluno.nomeDoCurso){
  console.log(`Aplicando nota em ` + aluno.nome);
  alunosDaEscola.notas.push(`10`);
  return aluno;
  } else {
    console.log(`Aluno não matriculado`)
  }
}
aplicarNota();



//funcao aprovar aluno

// modo A 

const aprovarAluno = (aluno, nota) => {
  let media = alunosDaEscola.notas.reduce(somar, 0)/notas.length;
  function somar(total, notas){
    return total + notas
  };
  if (media >= 7 && aluno.faltas < 4){
  console.log(`Você foi aprovado`);
  } else if (media >= 3 && aluno.faltas < 4) {
      console.log(`Você está de recuperação`)
  } else {
    console.log(`Você foi reprovado`)
  }
}
aprovarAluno();

//modo B - incompleto, usando filter

const aprovarAluno = alunosDaEscola.filter(function (alunos, nota){
  let media = (nota1 + nota2 + nota3 + nota4)/4;
  return media >= 7 && alunos.faltas < 3;
});
console.log(alunos.nome + ` você foi aprovado!`)

