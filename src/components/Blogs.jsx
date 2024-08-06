// import { Link } from 'react-router-dom';
import './Blogs.css';

const blogsData = [
    {
        id: 1,
        title: 'Success Story A',
        author: 'Author A',
        date: '2023-07-10',
        description: 'A brief description of Success Story A.',
        image: 'blog1.jpg'
    },
    {
        id: 2,
        title: 'Update on Project B',
        author: 'Author B',
        date: '2023-08-20',
        description: 'A brief description of Update on Project B.',
        image: 'blog2.jpg'
    },
    {
        id: 3,
        title: 'Relevant News C',
        author: 'Author C',
        date: '2023-09-15',
        description: 'A brief description of Relevant News C.',
        image: 'blog3.jpg'
    }
];

const Blogs = () => {
    return (
        <div className="blogs-page">
            <div className="container py-5">
                <h2 className="text-center mb-4">Latest Blog Posts</h2>
                <div className="row">
                    {blogsData.map(blog => (
                        <div className="col-md-4 mb-4" key={blog.id}>
                            <div className="card blog-card">
                                <img src='https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?t=st=1722877103~exp=1722880703~hmac=7159b16f633e2edbbbf04dc24eef9a4718e9c97a086e8b3ed50dadbdc7b25055&w=1060' className="card-img-top" alt={blog.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{blog.title}</h5>
                                    <p className="card-text">{blog.description}</p>
                                    <p className="card-text"><small className="text-muted">By {blog.author} on {blog.date}</small></p>
                                    {/* <Link to={`/blogs/${blog.id}`} className="btn btn-outline-primary">Read More</Link> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;