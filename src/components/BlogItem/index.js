// Write your JS code here
import './index.css'

const BlogList = props => {
  const {itemDetails} = props
  const {id, title, description, publishedDate} = itemDetails
  return (
    <li className="blog-list-item">
      <div className="title-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}
export default BlogList
