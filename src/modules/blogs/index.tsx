import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import { blogs } from '../../common/blogs'



function Blogs() {
    const navigate = useNavigate()
    console.log(blogs, '=============' ,blogs?.map((el, i) => {
                    return (
                        <div key={i} onClick={() => {
                            navigate('/blogs/' + el.slug)
                        }}>

                            {/* <NavLink key={i} to={'/blogs/' + el.slug}> */}
                            <h4>
                                {el.title}
                            </h4>
                            <p>
                                {el.description}
                            </p>
                            {/* </NavLink> */}
                        </div>
                    )
                }));
    
    return (
        <div>
            {
                blogs?.map((el, i) => {
                    return (
                        <div key={i} onClick={() => {
                            navigate('/blogs/' + el.slug)
                        }}>

                            {/* <NavLink key={i} to={'/blogs/' + el.slug}> */}
                            <h4>
                                {el.title}
                            </h4>
                            <p>
                                {el.description}
                            </p>
                            {/* </NavLink> */}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Blogs