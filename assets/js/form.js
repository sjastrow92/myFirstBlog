const form = document.querySelector("form");

const handleSubmit = function (event) {
  event.preventDefault();

  const userName = document.querySelector("#userName").value.trim();
  const title = document.querySelector("#title").value.trim();
  const content = document.querySelector("#content").value.trim();

  if (!userName || !title || !content) {
    const error = document.querySelector("#error");
    error.textContent = "Please complete all fields";
    return;
  }

  const blogPost = {
    userName: userName,
    title: title,
    content: content,
  };

  // read local storage
  let blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  // store variables in an array
  blogPosts.push(blogPost);

  // store in local storage
  localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

  // Calling the function to redirect to page 2
  redirectToBlog();
};

// create function to take user from index to blog
function redirectToBlog() {
  // Redirecting to page 2
  window.location.href = "blog.html";
}

// handle submit
// Adding an event listener to the form submission
form.addEventListener("submit", handleSubmit);
