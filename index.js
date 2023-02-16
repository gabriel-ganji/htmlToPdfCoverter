const fs = require("fs");

// fs.readFile("./gabriel.ganji", {encoding: "utf-8"}, (erro, dados) => {
    
//     if(erro) {
//         console.log("Ocorreu uma falha durante a leitura");
//     } else {
//         console.log(dados);
//     }

// });

// fs.writeFile("./gabriel.ganji", "Novo conteúdo do arquivo!", (err) => {
//     if(err) {
//         console.log("Erro durante a salvamento...")
//     }
// })

// setTimeout(() => {
//     fs.readFile("./gabriel.ganji", {encoding: "utf-8"}, (erro, dados) => {
    
//         if(erro) {
//             console.log("Ocorreu uma falha durante a leitura");
//         } else {
//             console.log(dados);
//         }
    
//     })
// }, 2000);
function modifyUser(name, course, category) {
    
    fs.readFile("./user.json", {encoding: "utf-8"}, (erro, dados) => {
        if(erro){
            console.log("Um erro aconteceu!")
        } else {
            let data = JSON.parse(dados);
            data.name = name;
            data.course = course;
            data.category = category

            fs.writeFile("./user.json", JSON.stringify(data), (erro) => {
                console.log()
                if(erro) {
                    console.log("Erro aconteceu durante a escrita!");
                } else {
                    console.log("Escrito!")
                }
            })

            console.log(data);
        }
    });

}

modifyUser("Johnson", "Airplane-pilot", "Air-force");
