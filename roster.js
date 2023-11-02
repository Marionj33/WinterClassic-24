

addEventListener("DOMContentLoaded", pullData);
const output = document.querySelector(".helloWorld");
const url = "https://docs.google.com/spreadsheets/d/";
const ssid = "1U77s024DhwUNFac-uN931z5_9V6KOjm55qZobMiOgLM";
const query1 = `/gviz/tq?`;

const endpoint1 = `${url}${ssid}${query1}`;

//Fetch + Await & Async
async function pullData() {
    try {
        const res = await fetch(endpoint1); //connect to google sheets
        //console.log(endpoint1);

        if (res.status === 404) { //return error if status is bad
            alert("404 Error");
            return;
        }

        //else go through with pulling data
        const data = await res.text();
        const temp = data.substring(47).slice(0,-2);
        const json = await JSON.parse(temp);

        const rows = json.table.rows;

        //console.log(json);

        //Pass data to each column/row
        rows.forEach((row) => {
            const trNew = document.createElement("tr");
       

            const temp1 = row.c;
            console.log(temp1);

            
            output.append(trNew);
            
    
            temp1.forEach((cell) => {
        
                console.log(cell.v);
                
                const newtd = document.createElement("td");
           
                newtd.textContent += cell.v;
                trNew.append(newtd);
            });
        });

        
    } catch (error) {
        console.log(error);
    }
    
}