import React from 'react';
import PostCard from './PostCard';
import { useSelector } from 'react-redux';



function Home() {
    const posts = useSelector(st=>st);

    const postList = posts.map(post => <PostCard key={post.id} post={post} />);

    return (
        <div>
            <h5>"Welcome to Microblog, our innovative site for communicating on the information superhighway." - famous person </h5>
            {postList}
        </div>
    )
};

export default Home;