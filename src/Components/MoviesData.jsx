import React from 'react';
import Card from 'card';
import WithCard from './WithCard';

import { Link } from 'react-router';

function shuffleArray(array) {
let i = array.length - 1;
for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    }
    return array;
}

class RecommendedPosts extends React.Component {
    render() {
    const shuffledPosts = shuffleArray(this.props.posts);
    return (
    <ul>
        {shuffledPosts.map((post, idx) => {
        return (
            <li key={idx}>
            <p>{post.title}</p>
            <p>{post.text}</p>
            <p>{post.category}</p>
            <Link to={`/blog/post-1/:${post.id}`}>Weiter lesen</Link>
            </li>
        );
        })}
    </ul>
    );
}
}
RecommendedPosts.propTypes = {
  posts: React.PropTypes.array,
};






















export default MoviesData;