// Automates table insertion

var tableData = data;
var tbody = d3.select("tbody");

data.forEach((UFOsighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOsighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


// Listens for click of "Filter Table" button and logs the value that was input into the field

var table, tr, td, i, datetime, button;
table = document.getElementById("ufo-table");
tr = table.getElementsByTagName("tr");
button = d3.select("#filter-btn");

button.on("click", function () {
    d3.event.preventDefault();
    var form_input = d3.select("#datetime");
    var input_value = form_input.property("value");
    console.log(input_value);


    // Matches input to datetime within table and filters out non-matching rows
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            datetime = td.textContent || td.innerText;
            if (datetime.indexOf(input_value) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
});