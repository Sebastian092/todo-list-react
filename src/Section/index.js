
import {SectionBody} from "./styled"

const Section = ({ title, body, extraHeaderContent }) => (
 <SectionBody>
    <header className="section__header">
        <h2 className="section__title"> {title}</h2>
        {extraHeaderContent}
    </header>
    <div className="section__body">
        {body}
    </div>
 </SectionBody>
);

export default Section;