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

];

function generateTemplateRow(item){
    return `
    <tr>
    <td>${item.name}</td>
    <td>${item.traduction}</td>
    <td><img src="images/${item.name}.jpg" alt="${item.name}" height="150" /></td>
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