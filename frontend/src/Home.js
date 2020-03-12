import React, { useEffect } from 'react';
import PostCard from './PostCard';
import { useSelector, useDispatch } from 'react-redux';
import './Home.css'
import { sortPosts } from './action'


function Home() {
    const dispatch = useDispatch();
    const posts = useSelector(st => st.posts);

    useEffect(() => {
        dispatch(sortPosts([...posts]))
    }, []);

    const postList = posts.map(post => <PostCard key={post.id} post={post} />);

    return (
        <div>
            <h5 className="home">"Welcome to Microblog, our innovative site for communicating on the information superhighway." - famous person </h5>
            {postList}
        </div>
    )
};

export default Home;