let comments = JSON.parse(localStorage.getItem("comments") || "[]");

function addComment() {
    const input = document.getElementById("commentInput");
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a comment!");
        return;
    }

    comments.push(text);
    saveComments();

    input.value = "";
    showComments();
}

function saveComments() {
    localStorage.setItem("comments", JSON.stringify(comments));
}

function showComments() {
    const list = document.getElementById("commentList");
    list.innerHTML = "";

    comments.forEach(function(text, index) {
        const div = document.createElement("div");
        div.className = "comment";

        const span = document.createElement("span");
        span.textContent = text;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";

        editButton.onclick = function() {
            const newText = prompt("Edit your comment:", comments[index]);

            if (newText !== null && newText.trim() !== "") {
                comments[index] = newText.trim();
                saveComments();
                showComments();
            }
        };

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.onclick = function() {
            comments.splice(index, 1);
            saveComments();
            showComments();
        };

        div.appendChild(span);
        div.appendChild(editButton);
        div.appendChild(deleteButton);

        list.appendChild(div);
    });
}

function clearComments() {
    comments = [];
    localStorage.removeItem("comments");
    showComments();
}

window.addEventListener("load", showComments);
