let comments = JSON.parse(localStorage.getItem("comments") || "[]");

function addComment() {
    const nameInput = document.getElementById("userName");
    const imageInput = document.getElementById("profileImage");
    const commentInput = document.getElementById("commentInput");

    const name = nameInput.value.trim();
    const image = imageInput.value.trim();
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
        image: image,
        text: text
    });

    localStorage.setItem("comments", JSON.stringify(comments));

    nameInput.value = "";
    imageInput.value = "";
    commentInput.value = "";

    showComments();
}

function showComments() {
    const list = document.getElementById("commentList");

    list.innerHTML = "";

    comments.forEach(function(comment, index) {

        const div = document.createElement("div");
        div.className = "comment";

        if (comment.image) {
            const image = document.createElement("img");
            image.src = comment.image;
            image.alt = comment.name;
            image.width = 50;
            image.height = 50;

            div.appendChild(image);
        }

        const name = document.createElement("strong");
        name.textContent = comment.name;

        const text = document.createElement("p");
        text.textContent = comment.text;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";

        editButton.onclick = function() {
            const newText = prompt(
                "Edit your comment:",
                comment.text
            );

            if (newText !== null && newText.trim() !== "") {
                comments[index].text = newText.trim();

                localStorage.setItem(
                    "comments",
                    JSON.stringify(comments)
                );

                showComments();
            }
        };

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.onclick = function() {
            comments.splice(index, 1);

            localStorage.setItem(
                "comments",
                JSON.stringify(comments)
            );

            showComments();
        };

        div.appendChild(name);
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
