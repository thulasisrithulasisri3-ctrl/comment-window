alert("NEW SCRIPT LOADED");

let comments = JSON.parse(localStorage.getItem("comments") || "[]");

function addComment() {
    const name = document.getElementById("userName").value.trim();
    const text = document.getElementById("commentInput").value.trim();

    if (!name || !text) {
        alert("Enter name and comment!");
        return;
    }

    comments.push({
        name: name,
        text: text,
        likes: 0
    });

    localStorage.setItem("comments", JSON.stringify(comments));

    document.getElementById("userName").value = "";
    document.getElementById("commentInput").value = "";

    showComments();
}

function showComments() {
    const list = document.getElementById("commentList");
    list.innerHTML = "";

    comments.forEach(function(comment, index) {
        const div = document.createElement("div");

        div.innerHTML =
            "<div class='avatar'>" +
            comment.name.charAt(0).toUpperCase() +
            "</div>" +
            "<strong>" + comment.name + "</strong>" +
            "<p>" + comment.text + "</p>" +
            "<button onclick='likeComment(" + index + ")'>❤️ " +
            comment.likes +
            "</button>" +
            "<button onclick='editComment(" + index + ")'>Edit</button>" +
            "<button onclick='deleteComment(" + index + ")'>Delete</button>";

        list.appendChild(div);
    });
}

function likeComment(index) {
    comments[index].likes++;
    localStorage.setItem("comments", JSON.stringify(comments));
    showComments();
}

function editComment(index) {
    const newText = prompt("Edit your comment:", comments[index].text);

    if (newText && newText.trim()) {
        comments[index].text = newText.trim();
        localStorage.setItem("comments", JSON.stringify(comments));
        showComments();
    }
}

function deleteComment(index) {
    comments.splice(index, 1);
    localStorage.setItem("comments", JSON.stringify(comments));
    showComments();
}

function clearComments() {
    comments = [];
    localStorage.removeItem("comments");
    showComments();
}

window.addEventListener("load", showComments);

            
