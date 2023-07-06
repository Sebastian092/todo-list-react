
import {SectionBody, SectionHeader} from "./styled"

const Section = ({ title, body, extraHeaderContent }) => (
 <SectionBody>
    <SectionHeader>
        <h2> {title}</h2>
        {extraHeaderContent}
    </SectionHeader>
    <div>
        {body}
    </div>
 </SectionBody>
);

export default Section;