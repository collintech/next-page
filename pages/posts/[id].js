import React from 'react'
import Layout from '../../components/layout'
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css'


import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticPaths(params) {
    const paths = await getAllPostIds(params);
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
};

const Post = ({ postData }) => {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

export default Post