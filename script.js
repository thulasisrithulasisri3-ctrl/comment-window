let comments = JSON.parse(localStorage.getItem("comments")) || [];

function addComment() {
    const input = document.getElementById("commentInput");
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a comment!");
        return;
    }

    comments.push(text);
    localStorage.setItem("comments", JSON.stringify(comments));

    input.value = "";
    showComments();
}

function showComments() {
    const list = document.getElementById("commentList");
    list.innerHTML = "";

    comments.forEach(function(text, index) {
        const div = document.createElement("div");
        div.className = "comment";

        const span = document.createElement("span");
        span.textContent = text;

        const button = document.createElement("button");
        const editButton = document.createElement("button");
editButton.textContent = "Edit";

editButton.onclick = function() {
    const newText = prompt("Edit your comment:", text);

    if (newText !== null && newText.trim() !== "") {
        comments[index] = newText.trim();
        localStorage.setItem("comments", JSON.stringify(comments));
        showComments();
    }
};
        button.textContent = "Delete";

        button.onclick = function() {
            comments.splice(index, 1);
            localStorage.setItem("comments", JSON.stringify(comments));
            showComments();
        };

        div.appendChild(span);
        div.appendChild(button);
        list.appendChild(div);
    });
}

window.onload = showComments;
