const perguntas = [
    {
      pergunta: "Qual é a capital da Finlândia?",
      respostas: [
        "Copenhague ",
        "Oslo",
        "Helsinque",
        "Estolcomo",
      ],
      correta: 2 // Helsinque
    },
    {
      pergunta: "Qual é a capital da França?",
      respostas: [
        "Londres",
        "Madrid",
        "Paris",
        "Roma",
      ],
      correta: 2 // Paris
    },
    {
      pergunta: "Qual é a capital do Japão?",
      respostas: [
        "Pequim",
        "Tóquio",
        "Seul",
        "Bangcoc",
      ],
      correta: 1 // Tóquio
    },
    {
      pergunta: "Qual é a capital da Rússia?",
      respostas: [
        "Moscou",
        "São Petersburgo",
        "Kiev",
        "Astana",
      ],
      correta: 0 // Moscou
    },
    {
      pergunta: "Qual é a capital da Argentina?",
      respostas: [
        "Buenos Aires",
        "Córdoba",
        "Rosário",
        "Mendoza",
      ],
      correta: 0 // Buenos Aires
    },
    {
      pergunta: "Qual é a capital da Austrália?",
      respostas: [
        "Sydney",
        "Melbourne",
        "Canberra",
        "Brisbane",
      ],
      correta: 2 // Canberra
    },
    {
      pergunta: "Qual é a capital do Canadá?",
      respostas: [
        "Toronto",
        "Montreal",
        "Ottawa",
        "Vancouver",
      ],
      correta: 2 // Ottawa
    },
    {
      pergunta: "Qual é a capital da Alemanha?",
      respostas: [
        "Berlim",
        "Hamburgo",
        "Munique",
        "Frankfurt",
      ],
      correta: 0 // Berlim
    },
    {
      pergunta: "Qual é a capital do Egito?",
      respostas: [
        "Alexandria",
        "Cairo",
        "Luxor",
        "Giza",
      ],
      correta: 1 // Cairo
    },
    {
      pergunta: "Qual é a capital do México?",
      respostas: [
        "Guadalajara",
        "Monterrey",
        "Puebla",
        "Cidade do México",
      ],
      correta: 3 // Cidade do México
    },
  ];
  
  //selecionando a div com ID-quiz
  const quiz = document.querySelector('#quiz')
  //selecionando a tag template do HTML
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  //loop ou laço de repetição 
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta //Clonando o H3 de forma rápida e inteligente
  
  
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    
    quizItem.querySelector('dl').appendChild(dt)
  }
  quizItem.querySelector('dl dt').remove()
  
    //Coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }  