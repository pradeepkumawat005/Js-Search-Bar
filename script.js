let storeArray = [
    'HTML',
    'CSS',
    'EASY Tutorial',
    'JavaScript',
    'Where to learn coding online',
    'Where to learn web design'
];

const resultBox = document.querySelector(".result_Box");
const inputBox = document.getElementById("input_Box");

inputBox.onkeyup = function(){
    let results = [];
    let input = inputBox.value;

    if(input.length){
        results = storeArray.filter((keyword) =>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(results); // Call the display function with the filtered result
};

function display(results){
    const content = results.map((list) =>{
        return "<li>" + list + "</li>";
    })

    resultBox.innerHTML = "<ul>"+ content.join("") + "</ul>"; // Join the content array into a string
}
