import React from 'react'
import MainLayout from '../Styles/Layouts'
import InnerLayout from '../Styles/Layout2'
import styled from 'styled-components'
import Title from '../Components/Title'
import PrimaryButton from '../Components/PrimaryButton'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import LocationOnIcon  from '@material-ui/icons/LocationOn'
import ContactItem from '../Components/ContactItem'



  const phone = <PhoneIcon/>
  const email = <EmailIcon/>
  const loaction = <LocationOnIcon/>  



function ContactPage() {
  return (
    <MainLayout>
      <ContactPageStyled>

        <Title title={'Contact Me'} titlespan={'Contact Me'} />
        <InnerLayout className='contact-section'>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form action="" className='form'>
              <div className="form-feild">
                <label htmlFor="name" >Enter Your Name</label>
                <input type="text" id='name' />
              </div>
              <div className="form-feild">
                <label htmlFor="email" >Enter Your Email</label>
                <input type="email" id='email' />
              </div>
              <div className="form-feild">
                <label htmlFor="subject" >Enter Your Subject</label>
                <input type="text" id='subject' />
              </div>
              <div className="text-area form-feild">
                <label htmlFor="textarea">Enter Your Message</label>
                <textarea name="textarea" id="textarea" cols="30" rows="5"></textarea>
              </div>
              <div className="form-feild">
                <PrimaryButton title={'Send Email'}/>
              </div>
            </form>
          </div>
          <div className="right-content">
            < ContactItem icon={phone} title={'Phone'} contact1= {'9730095776'}  />
            < ContactItem icon={email} title={'Email'} contact1= {'skavhar111@gmail.com'}  />
            < ContactItem icon={loaction} title={'Address'} contact1= {'Pune, Maharashtra'}  />

          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  )
}

const ContactPageStyled = styled.section`
          .contact-section{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 2rem;
            @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(1, 1fr);
          
        }
            .right-content{
              display: grid;
              grid-template-columns: repeat(1, 1fr);
              @media screen and (max-width:500px) {
                width: 100%;
              }
             
            }
            .contact-title{
              h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
              }
            }
            .form{
              width: 100%;
              @media screen and (max-width: 510px) {
                width: 100%;      
               }
              .form-feild{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: .4rem .5rem;
                    color: inherit;
                }
                input{
                  border: 1px solid var(--border-color);
                  outline: none;
                  background: transparent;
                  height: 50px;
                  padding: 0 15px;
                  width: 100%;
                  color: inherit;
                }
                textarea{
                  background: transparent;
                  border: 1px solid var(--border-color);
                  outline: none;
                  color: inherit;
                  width: 100%;
                  padding: .8rem 1rem;
                }
              }
            }
          }

`;

export default ContactPage;