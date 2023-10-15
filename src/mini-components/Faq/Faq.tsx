import { useState } from 'react';
import './Faq.scss';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Faq = () => {
    const [show] = useState(true);

    const [questions] = useState([
        {
            id:1,
            question: 'How many participants can join a ClearLink video conference?',
            answers: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
        }, 
        {
            id:2,
            question: 'Can I use ClearLink on multiple devices?',
            answers: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
        }, 
        {
            id:3,
            question: 'Is ClearLink compatible with other video conferencing platforms?',
            answers: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
        }, 
        {
            id:4,
            question: 'How does ClearLink ensure the security of my video conferences?',
            answers: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
        }, 
        {
            id:5,
            question: 'Do I need to download any software to use ClearLink?',
            answers: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
        }, 
        {
            id:6,
            question: 'What kind of customer support does ClearLink provide?',
            answers: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
        }
    ])
    
  return (
    <div className="faq">
        <div className="faqLeft">
            <p className="faqLeft__text">Support</p>

            <p className="faqLeft__header">FAQs</p>

            <div className="faqLeft__body">
                <p>Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            </div>
        </div>

        <div className="faqRight">
            <div className="faq__Rightcontainer">
            { questions.map(question => (
                <Accordion key={question.id} 
                >
                    <AccordionSummary
                    expandIcon={show ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
                    aria-controls="panel1a-content"  
                    id="panel1a-header"
                    sx={{
                        // boxShadow: "none",
                        // background: "red"
                    }}
                    >
                    <Typography 
                        className='faq__question'
                    >
                        {question.question}
                    </Typography>
                    </AccordionSummary>

                    <AccordionDetails 
                        className='faq__accordionDetails'
                    >
                    <Typography
                        className="faq__answers"
                    >
                        {question.answers}
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            )) }
            
            </div>
        </div>
    </div>
  )
}

export default Faq