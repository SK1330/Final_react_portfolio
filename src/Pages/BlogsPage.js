import React from 'react'
import blogs from '../Data/blogs'
import styled from 'styled-components'
import Title from '../Components/Title'
import MainLayout from '../Styles/Layouts'
import InnerLayout from '../Styles/Layout2'

function BlogsPage() {
  return (
    <MainLayout>
      <BlogsStyled>
        <Title title={'Blogs'} titlespan={'Blogs'} />
        <InnerLayout className={'blog'}>
          {

            blogs.map((blog) => {
              return <div key={blog.id} className={'blog-item'}>
                <div className="image">
                  <img src={blog.image} alt="" />
                </div>
                <div className="title">
                  <a href={blog.link}>
                    {blog.title}
                  </a>
                </div>
              </div>
            })
          }
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  )
}


const BlogsStyled = styled.div`
        .blog{
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          @media screen and (max-width: 770px) {
          grid-template-columns: repeat(1, 1fr);
          }
          .blog-item{
            padding: 1rem;
            background-color: var( --background-dark-color-2);
          }
          .image{
            width: 100%;
            /* height: 90%; */
            img{
              width: 100%;
              height: 90%;
            }
          }

          .title{
            padding: 1rem 0 ;
            a{
              font-size: 1.3rem;
              color: var(--white-color);
              cursor: pointer;
              transition: all .4s ease-in-out;
              &:hover{
                color: var(--primary-color);
              }
            }
          }
        }
`;
export default BlogsPage