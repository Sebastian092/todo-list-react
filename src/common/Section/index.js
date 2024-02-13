import {SectionBody, } from "./styled"

const Section = ({ title, body, extraHeaderContent }) => (
 <SectionBody>
    <>
        <h2> {title}</h2>
        {extraHeaderContent}
        {body}
    </>
  
 </SectionBody>
);

export default Section;