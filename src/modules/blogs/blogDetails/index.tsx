import React from 'react'
import { blogs } from '../../../common/blogs'
import { useParams } from 'react-router'

function BlogDetails() {
    // to fetch data from dynamic url
    const params = useParams()
    console.log(params);

    // blogs.filter((el) => el.slug === )
    return (
        <div>
            {
                blogs?.find(el => el.slug === params.slug)?.title
            }
            {[4,5,6,7,7,5,4,34,5,6,7,5]}
        </div>
    )
}

export default BlogDetails