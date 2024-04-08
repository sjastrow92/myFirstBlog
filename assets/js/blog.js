// render blog list
// create funciton for entries
function renderBlogEntries() {
  const blogPosts = JSON.parse(localStorage.getItem("blogPosts"));
  const blogEntriesContainer = document.getElementById("blog-entries");

  // function for blog posts to appear as individual posts
  if (blogPosts) {
    blogPosts.forEach(function (blogPost) {
      var blogEntryDiv = document.createElement("div");
      blogEntryDiv.classList.add("blog-entry");

      const userName = blogPost.userName;
      const title = blogPost.title;
      const content = blogPost.content;

      const usernameHeader = document.createElement("h2");
      usernameHeader.textContent = "UserName: " + userName;

      const titleHeader = document.createElement("h3");
      titleHeader.textContent = "Title: " + title;

      const contentParagraph = document.createElement("p");
      contentParagraph.textContent = content;

      blogEntryDiv.appendChild(usernameHeader);
      blogEntryDiv.appendChild(titleHeader);
      blogEntryDiv.appendChild(contentParagraph);
      // append alements to container
      blogEntriesContainer.appendChild(blogEntryDiv);
    });
  }
}

window.onload = renderBlogEntries();
// gets back button working
document.getElementById("backButton").addEventListener("click", function () {
  window.location.href = "index.html"; // Assuming your form page is named index.html
});
