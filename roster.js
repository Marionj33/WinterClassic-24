

addEventListener("DOMContentLoaded", pullData);
const output = document.querySelector(".participatingRoster");
const output2 = document.querySelector(".eventRoster");
const url = "https://docs.google.com/spreadsheets/d/";
const ssid = "1U77s024DhwUNFac-uN931z5_9V6KOjm55qZobMiOgLM";
//const ssid = "1kcZc074uoxWVa1gi6K8hS8S7jSv5rTFkT9wyVhzlXG8";
const query1 = `/gviz/tq?`;

const endpoint1 = `${url}${ssid}${query1}`;


function reorder() {
    //PUSH MAYBEs TO BOTTOM OF TABLE
    //console.log(output2);
    //console.log(output2);

    //Loop through each row for FIRST TABLE
    for (let j = 0; j < output.rows.length; j++) {
        console.log(output);
        // Check the background color of each row
            console.log(output.rows[j].style.backgroundColor);
            let backgroundColor = output.rows[j].style.backgroundColor;
            //console.log(backgroundColor);
    
            // If the background color is yellow
            if (backgroundColor === "rgb(25, 40, 87)") {
                // Detach the row from its current position
                
                let removedRow = output.rows[j];

                // Append the row to the end of the table
                output.appendChild(removedRow);
            }
        };


    //Loop through each row for SECOND TABLE
    for (let j = 0; j < output2.rows.length; j++) {
        console.log(output2);
        // Check the background color of each row
            console.log(output2.rows[j].style.backgroundColor);
            let backgroundColor = output2.rows[j].style.backgroundColor;
            //console.log(backgroundColor);
    
            // If the background color is yellow
            if (backgroundColor === "rgb(25, 40, 87)") {
                // Detach the row from its current position
                
                let removedRow = output2.rows[j];

                // Append the row to the end of the table
                output2.appendChild(removedRow);
            }
        };
}




//Fetch + Await & Async
async function pullData() {
    //console.log(output2);

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
       
            //console.log(row);
            //console.log(row.c[4].v);
            const temp1 = row.c;
            //console.log(temp1.length);


            // output.append(trNew);


            //PARTICIPATING IN TOURNEY ROSTER
            if (row.c[3].v === "Y" && row.c[4].v === "Y") {
                output.append(trNew);
                //Loop through each object and pull each data cell
                for(let i = 0; i < temp1.length - 3; i++) {
                    const newtd = document.createElement("td");
           
                    //console.log(temp1[i]);
                    newtd.textContent += temp1[i].v;
                    newtd.classList.add("tableFont")
                    trNew.append(newtd);
                }

            
            //STANDBY TO TOURNEY     
            } else if (row.c[4].v === "Standby") {
                output.append(trNew);
                //Loop through each object and pull each data cell
                for(let i = 0; i < temp1.length - 3; i++) {
                    const newtd = document.createElement("td");
                                   
                    //console.log(temp1[i]);
                    newtd.textContent += temp1[i].v;
                    newtd.classList.add("tableFont")
                    newtd.classList.add("tableMaybe")
                    let backgroundColor = trNew.style.backgroundColor="#192857";
                    let opacity = trNew.style.opacity="1";
                    //console.log(newtd);
                    trNew.append(newtd);
                    //console.log(trNew.style.backgroundColor);
        
                }
            
            //COMING TO PARTY ROSTER    
            } else if (row.c[3].v === "Y" && row.c[4].v === "N") {
                output2.append(trNew);
                //Loop through each object and pull each data cell
                for(let i = 0; i < temp1.length - 4; i++) {
                    const newtd = document.createElement("td");
                           
                    //console.log(temp1[i]);
                    newtd.textContent += temp1[i].v;
                    newtd.classList.add("tableFont")
                    trNew.append(newtd);
                }

            //MAYBE COMING TO PARTY     
            } else if (row.c[3].v === "Maybe") {
                output2.append(trNew);
                //Loop through each object and pull each data cell
                for(let i = 0; i < temp1.length - 4; i++) {
                    const newtd = document.createElement("td");
                           
                    //console.log(temp1[i]);
                    newtd.textContent += temp1[i].v;
                    newtd.classList.add("tableFont")
                    newtd.classList.add("tableMaybe")
                    let backgroundColor = trNew.style.backgroundColor="#192857";
                    let opacity = trNew.style.opacity="1";
                    //console.log(newtd);
                    trNew.append(newtd);
                    //console.log(trNew.style.backgroundColor);

                }
            }

    });

        reorder();

    } catch (error) {
        console.log(error);
    }
    
}


