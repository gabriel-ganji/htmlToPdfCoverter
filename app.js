let Reader = require("./Reader");
let Processor = require("./Processor");
let Table = require("./Table");
let HtmlParser = require("./htmlParser");
let Writer = require("./Writer");
let PDFWriter = require("./PDFWriter");

let leitor = new Reader();
let escritor = new Writer();

async function main() {
    
    let data = await leitor.Read("./users.csv");
    let dadosProcessados = Processor.Process(data);

    let users = new Table(dadosProcessados);

    var html = await HtmlParser.Parse(users);

    escritor.Write(`${Date.now()}.html`, html);
    PDFWriter.WritePDF((Date.now() + ".PDF"), html);

    
    console.log(html);

}

main();