console.log("aswesome notes")

// add new element
const newparagraph = document.createElement("p");
newparagraph.textContent = "irene likes dancing";
document.querySelector("body").appendChild(newparagraph);

const notes = [
    {
        title : "my next trip",
        body : "awesome spain it is",
    },
    {
        title : "attend book session",
        body : "london arts",
    },
    {
        title : "book i am reading",
        body : "fifty shades",
    },
    {
        title : "javascript conference",
        body : "amsterdam center, netherlands",
    },
    {
        title : "formula1",
        body : "qatar rally",
    },
];
notes.forEach(function(note){
    const p = document.createElement("p");
    p.textContent = `${note.title} -- ${note.body}`;
    document.querySelector("body").appendChild(p);
});

document
.querySelector("#createnotes")
.addEventListener("click",function(event){
    event.target.textContent = "the button was clicked";
});

document
.querySelector("#removenotes")
.addEventListener("click", function (event) {
    document.querySelectorAll("p").forEach(function(item){
        item.remove();
    });
});

