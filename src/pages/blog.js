import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import Layout from "components/Layout";
import PostCard from "components/PostCard";

const BlogTitle = styled("h1")`
    margin-bottom: 1em;
`

const BlogGrid = styled("div")`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.5em;

    @media(max-width: 1050px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        grid-template-columns: 1fr;
        grid-gap: 2.5em;
    }
`

const Blog = ({ posts }) => (
    <>
        <Layout>
            <BlogTitle>
                Blog
            </BlogTitle>
            <BlogGrid>
                {posts.map((post, i) => (
                    <PostCard
                        key={i}
                        author={post.node.post_author}
                        category={post.node.post_category}
                        title={post.node.post_title}
                        date={post.node.post_date}
                        description={post.node.post_preview_description}
                        uid={post.node._meta.uid}
                    />
                ))}
            </BlogGrid>
        </Layout>
    </>
);

export default ({ data }) => {
    const posts = data.prismic.allPosts.edges;
    if (!posts) return null;

    return (
        <Blog posts={posts}/>
    )
}

Blog.propTypes = {
    posts: PropTypes.array.isRequired,
};


export const query = graphql`
    {
        prismic {
            allPosts(sortBy: post_date_DESC) {
                edges {
                    node {
                        post_title
                        post_date
                        post_category
                        post_preview_description
                        post_author
                        _meta {
                            uid
                        }
                    }
                }
            }
        }
    }
`

