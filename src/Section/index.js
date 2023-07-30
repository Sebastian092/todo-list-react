
import {SectionBody, SectionComponents} from "./styled"

const Section = ({ title, body, extraHeaderContent }) => (
 <SectionBody>
    <SectionComponents>
        <h2> {title}</h2>
        {extraHeaderContent}
        {body}
    </SectionComponents>
  
 </SectionBody>
);

export default Section;