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
    comment.textContent = commentText;

    commentList.appendChild(comment);

    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(commentText);
    localStorage.setItem("comments", JSON.stringify(comments));

    input.value = "";
}

function loadComments() {
    const commentList = document.getElementById("commentList");
    const comments = JSON.parse(localStorage.getItem("comments")) || [];

    comments.forEach(function(text) {
        const comment = document.createElement("div");
        comment.className = "comment";
        comment.textContent = text;
        commentList.appendChild(comment);
    });
}

window.onload = loadComments;
