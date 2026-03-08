/*
TODO (Header.jsx):
Create the entire Header component.

Requirements:
- Show the site title and a one-sentence description.
- Show summary numbers: totalPosts, totalLikes, totalDislikes.
*/


export default function Header({ totalPosts, totalLikes, totalDislikes }) {
  // TODO: Replace return null with your JSX
  <header className="header">
    <h1>GridBlog</h1>
    <p>A simple blogging platform built with React.</p>
    <div className="summary">
      <span>Total Posts: {totalPosts}</span>
      <span>Total Likes: {totalLikes}</span>
      <span>Total Dislikes: {totalDislikes}</span>
    </div>
  </header>;
  
}
