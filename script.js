let comments = JSON.parse(
    localStorage.getItem("comments") || "[]"
);

function addComment() {

    const nameInput = document.getElementById("userName");
    const commentInput = document.getElementById("commentInput");

    const name = nameInput.value.trim();
    const text = commentInput.value.trim();

    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    if (text === "") {
        alert("Please enter a comment!");
        return;
    }

    comments.push({
        name: name,
        text: text,
        likes: 0,
        time: new Date().toLocaleString()
    });

    saveComments();

    nameInput.value = "";
    commentInput.value = "";

    showComments();
}

function saveComments() {

    localStorage.setItem(
        "comments",
        JSON.stringify(comments)
    );

}

function showComments() {

    const list = document.getElementById("commentList");

    list.innerHTML = "";

    comments.forEach(function(comment, index) {

        if (typeof comment.likes !== "number") {
            comment.likes = 0;
        }

        const div = document.createElement("div");

        div.className = "comment";

        const avatar = document.createElement("div");

        avatar.className = "avatar";

        avatar.textContent =
            comment.name.charAt(0).toUpperCase();

        const name = document.createElement("strong");

        name.textContent = comment.name;

        const text = document.createElement("p");

        text.textContent = comment.text;

        const time = document.createElement("small");

        time.textContent = comment.time || "";

        const likeButton =
            document.createElement("button");

        likeButton.textContent =
            "❤️ " + comment.likes;

        likeButton.onclick = function() {

            comment.likes++;

            saveComments();

            showComments();

        };

        const editButton =
            document.createElement("button");

        editButton.textContent = "Edit";

        editButton.onclick = function() {

            const newText = prompt(
                "Edit your comment:",
                comment.text
            );

            if (
                newText !== null &&
                newText.trim() !== ""
            ) {

                comment.text =
                    newText.trim();

                saveComments();

                showComments();

            }

        };

        const deleteButton =
            document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.onclick = function() {

            comments.splice(index, 1);

            saveComments();

            showComments();

        };

        div.appendChild(avatar);
        div.appendChild(name);
        div.appendChild(text);
        div.appendChild(time);
        div.appendChild(likeButton);
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

window.addEventListener(
    "load",
    showComments
);
