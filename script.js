function addComment() {
    const input = document.getElementById("commentInput");
    const commentList = document.getElementById("commentList");

    const commentText = input.value.trim();

    if (commentText === "") {
        alert("Please enter a comment!");
        return;
    }

    const comment = document.createElement("div");
    comment.className = "comment";

    const text = document.createElement("span");
    text.textContent = commentText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function () {
        comment.remove();
    };

    comment.appendChild(text);
    comment.appendChild(deleteButton);
    commentList.appendChild(comment);

    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(commentText);
    localStorage.setItem("comments", JSON.stringify(comments));

    input.value = "";
}

function loadComments() {
    const commentList = document.getElementById("commentList");
    const comments = JSON.parse(localStorage.getItem("comments")) || [];

    comments.forEach(function (text) {
        const comment = document.createElement("div");
        comment.className = "comment";

        const commentText = document.createElement("span");
        commentText.textContent = text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.onclick = function () {
            comment.remove();
        };

        comment.appendChild(commentText);
        comment.appendChild(deleteButton);
        commentList.appendChild(comment);
    });
}

window.onload = loadComments;
