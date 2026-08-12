let comments = JSON.parse(localStorage.getItem("comments") || "[]");

function addComment() {
    const input = document.getElementById("commentInput");
    const userNameInput = document.getElementById("userName");

    const text = input.value.trim();
    const userName = userNameInput.value.trim();

    if (userName === "") {
        alert("Please enter your name!");
        return;
    }

    if (text === "") {
        alert("Please enter a comment!");
        return;
    }

    comments.push({
        name: userName,
        text: text
    });

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

    comments.forEach(function(comment, index) {
        const div = document.createElement("div");
        div.className = "comment";

        const name = document.createElement("strong");
        name.textContent = comment.name;

        const text = document.createElement("span");
        text.textContent = comment.text;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";

        editButton.onclick = function() {
            const newText = prompt("Edit your comment:", comment.text);

            if (newText !== null && newText.trim() !== "") {
                comments[index].text = newText.trim();
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

        div.appendChild(name);
        div.appendChild(document.createElement("br"));
        div.appendChild(text);
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
