import React from 'react';
import PostCard from './PostCard';


function Home({ posts }) {

    const postList = posts.map(post => <PostCard key={post.id} post={post} />);

    return (
        <div>
            <h5>"Welcome to Microblog, our innovative site for communicating on the information superhighway." - famous person </h5>
            {postList}
        </div>
    )
};

export default Home;