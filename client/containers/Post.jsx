import React, { Component } from 'react';
import { connect } from 'react-redux';
// Remember our thunk this is where we will need to make use of it
import { postsFetchData } from '../actions/posts.js';
// We gonna use lodash to map over our post object
import _ from 'lodash'

class Post extends Component {
    constructor(props) {
        super(props);
        // Bind our render post to function so we can use it in the render method 
        this.renderPost = this.renderPost.bind(this)
    }

    // Fetch posts when component is mounted
    componentDidMount() {
        const API_URL = 'http://localhost:3000/api/post/?list';
        // I am setting some delay to simulate a real world request
        setTimeout(() => { this.props.fetchPost(API_URL); }, 1000);
    }
    // Function to render our post
    renderPost() {
        return _.map(this.props.posts, post => {
            // Check if there is an image to be displayed
            const img = post.image ? post.image.filename : '';
            // Get the html for our post ingredients
            function createMarkupForBriefContent() {
                if (post.content.brief) {
                    return {
                        __html: post.content.brief,
                    };
                } else {
                    return;
                }
            };
            // Get the html for our post cooking instructions
            function createMarkupForExtendedContent() {
                if (post.content.extended) {
                    return {
                        __html: post.content.extended,
                    };
                } else {
                    return;
                }
            };


            // Make sure we show only published posts
            if (post.state = "published") {
                return (
                    <div key={post._id}>
                        <h1>{post.title}</h1>
                        <h3>{post.author}</h3>
                        <img style={{ width: '300px', height: '300px' }} src={img} />
                        <h2>Brief</h2>
                        {/* 
          In react we cant set HTML directly we need to use dangerouslySetInnerHTML.
          */}
                        <div dangerouslySetInnerHTML={createMarkupForBriefContent()} />
                        <h2> Extended</h2>
                        {/* 
          Same as above
          */}
                        <div dangerouslySetInnerHTML={createMarkupForExtendedContent()} />
                    </div>
                );
            }
        });
    }
    render() {
        // If data is still loading 
        if (this.props.loading) {
            return (
                <div>
                    <h1>LOADING...</h1>
                </div>
            );
        }
        // Show post once data is loaded
        return (
            <div>
                {this.renderPost()}
            </div>
        );
    };
};

function mapStateToProps(state, ownProps) {
    // Things return here are showing in props for Recepie
    return {
        posts: state.posts,
        loading: state.loadPosts,
    };
}

// anything returned from here will end up in the props
const mapDispatchToProps = dispatch => ({
    // Our thunk will be mapped to this.props.fetchPost
    fetchPost: (url) => dispatch(postsFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);