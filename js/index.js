let BASE_URI = "";

const base = [
    {name: "person",traduction: "pessoa", category: ["geral","50+"]},
    {name: "people",traduction: "pessoas", category: ["geral","50+"]},
    {name: "child",traduction: "criança", category: ["geral","50+"]},
    {name: "children",traduction: "crianças", category: ["geral","50+"]},
    {name: "hand",traduction: "mão", category: ["geral","50+"]},
    {name: "great",traduction: "ótimo/grande", category: ["geral","50+"]},
    {name: "little",traduction: "pequeno", category: ["geral","50+"]},
    {name: "wide",traduction: "largo", category: ["geral","50+"]},

    {name: "actually",traduction: "na verdade", category: ["geral","50+"]},
    {name: "be",traduction: "ser/estar", category: ["geral","50+"]},
    {name: "become",traduction: "tornar-se", category: ["geral","50+"]},
    {name: "best",traduction: "melhor", category: ["geral","50+"]},
    {name: "craftsmanship",traduction: "artesão", category: ["geral","50+"]},
    {name: "does",traduction: "faz", category: ["geral","50+"]},
    {name: "done",traduction: "feito", category: ["geral","50+"]},
    {name: "drink",traduction: "beber", category: ["geral","50+"]},
    {name: "eat",traduction: "comer", category: ["geral","50+"]},
    {name: "foreword",traduction: "prefácil", category: ["geral","50+"]},
    {name: "forget",traduction: "esquecer", category: ["geral","50+"]},
    {name: "get",traduction: "conseguir", category: ["geral","50+"]},
    {name: "greatest",traduction: "maior", category: ["geral","50+"]},
    {name: "handbook",traduction: "manual", category: ["geral","50+"]},
    {name: "has",traduction: "tem", category: ["geral","50+"]},
    {name: "help",traduction: "socorro", category: ["geral","50+"]},
    {name: "hit",traduction: "acertar", category: ["geral","50+"]},
    {name: "how",traduction: "como", category: ["geral","50+"]},
    {name: "improve",traduction: "melhorar", category: ["geral","50+"]},
    {name: "know",traduction: "conhecer", category: ["geral","50+"]},
    {name: "might",traduction: "poder", category: ["geral","50+"]},
    {name: "mom",traduction: "mãe", category: ["geral","50+"]},
    {name: "our",traduction: "nossa", category: ["geral","50+"]},
    {name: "own",traduction: "próprio", category: ["geral","50+"]},
    {name: "place",traduction: "lugar", category: ["geral","50+"]},
    {name: "purchase",traduction: "comprar", category: ["geral","50+"]},
    {name: "single",traduction: "único", category: ["geral","50+"]},
    {name: "skinny",traduction: "magro", category: ["geral","50+"]},
    {name: "the",traduction: "a/o/as/os", category: ["geral","50+"]},
    {name: "thing",traduction: "coisa", category: ["geral","50+"]},
    {name: "think",traduction: "pensar", category: ["geral","50+"]},
    {name: "thought",traduction: "pensamento", category: ["geral","50+"]},
    {name: "watching",traduction: "assistindo", category: ["geral","50+"]},
    {name: "water",traduction: "água", category: ["geral","50+"]},
    {name: "what",traduction: "o que?", category: ["geral","50+"]},

    
    

    


];

function generateTemplateRow(item){
    return `
    <tr>
    <td>${item.name}</td>
    <td>${item.traduction}</td>
    <td><img src="images/${item.name}.jpg" alt="${item.name}" width="300" /></td>
    <td>
      <audio controls="controls">
        <source src="audios/${item.name}.m4a" type="audio/aac" />
      </audio>
    </td>
    <td>${item.category}</td>
  </tr>
    `;
}

let fullTemplate = "";

base.forEach(item =>{
    fullTemplate += generateTemplateRow(item);
});

let body = document.getElementById("content");
body.innerHTML = fullTemplate;