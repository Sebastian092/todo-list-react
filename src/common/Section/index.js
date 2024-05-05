import { SectionBody, Header } from "./styled"

const Section = ({ title, body, extraHeaderContent }) => (
    <SectionBody>
        <>
            <Header>
                <h2>{title}</h2>
                {extraHeaderContent}
            </Header>
            {body}
        </>
    </SectionBody>
);

export default Section;