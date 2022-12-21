import React from 'react';
import styled from 'styled-components';
import TextCard from '../TextCard/TextCard';
import { useRef } from 'react';
import background from './Assets/BgImage.svg';
import emailjs from '@emailjs/browser';
import ContactButton from '../DownloadButton/ContactButton';

const SendMailWrapper = styled.section`
    display: flex;
    gap: var(--flex-gap);
    padding: var(--card-padding);
    margin: var(--page-padding);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(${background});
    min-height: 41.9375em;

    form{
        display: flex;
        flex-direction: column;
        gap: 1em;
        padding: var(--card-padding);
        background: rgba(255, 255, 255, 0.47);
        backdrop-filter: blur(90.5px);
        border-radius: 38px;
    }

    form button{
        padding: 0;
        border-radius: 9px;
    }

    .Button-Container{
        display: flex;
        justify-content: flex-end;
    }

    input, textarea{
        padding: 1em;
        color: #181433;
        outline: none;
        border: none;
        background: #FFFFFF;
        border-radius: 5px;
        font-family: Manrope;
        font-size: 16px;
        font-weight: 500;
        line-height: 26px;
        letter-spacing: -0.02em;
    }

    #Button-Text{
        padding: 0 2em;
        color: #FFFFFF;
        font-family: Montserrat;
        font-size: 22px;
        font-weight: 500;
        line-height: 26px;
        letter-spacing: -0.02em;
    }

    .Left-Flank, .Right-Flank{
        flex: 50%;
    }

    .Left-Flank h6{
        font-family: Montserrat;
        font-size: 50px;
        font-weight: 600;
        line-height: 55px;
        letter-spacing: -0.02em;
        color: #FFFFFF;
        margin-bottom: 0;
    }

    .Right-Flank{
        margin: auto;
    }

    .Left-Flank .Body-Text{
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 500;
        line-height: 35px;
        letter-spacing: -0.02em;
        color: #FFFFFF;
    }
`

const SendMail = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jrbrzdu', 'template_sbqmr08', form.current, 'AUo5qgD4VFRlM15Kw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <SendMailWrapper className='Mail-Box'>
            <div className='Left-Flank'>
                <TextCard DisplayIcon={'none'}
                    HeadText={'You want to book an appointment with us?'}
                    Body={'We consider a range of options for you. Using our understanding and knowledge of the current market, we look at different loans.'} />
            </div>
            <div className='Right-Flank'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' placeholder='Your Name' name='user_name' required></input>
                    <input type='email' placeholder='Your Email address' name='user_email' required></input>
                    <input type='tel' placeholder='Your Phone Number' name='user_phone_number' required></input>
                    <input type='text' placeholder='Subject' name='subject' ></input>
                    <textarea type='text' placeholder='Send us an email' name='message' rows="5" required></textarea>
                    <div className='Button-Container'>
                        <ContactButton Type={'submit'}
                            ButtonText={'Submit'}
                            Width={'fit-content'}
                            Display={'none'}
                            Background={'#007CB4'} />
                    </div>
                </form>
            </div>
        </SendMailWrapper>
    )
}

export default SendMail