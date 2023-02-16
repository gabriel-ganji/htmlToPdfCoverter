class Processor {

    static Process(data) {
        const splitedData = data.split("\r\n");
        let rows = [];
        
        splitedData.forEach(row => {
            let newrow = row.split(",");
            rows.push(newrow);
        });

        return rows;
    }

}

module.exports = Processor;