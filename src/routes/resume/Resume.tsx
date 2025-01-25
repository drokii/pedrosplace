import Typewriter, { PARAGRAPH_SPEED } from "../../components/typewriter/Typewriter";

export default function Resume() {
    return (
        <>
            <h1><Typewriter text="Resume" /></h1>
            <h3><u><Typewriter text="Mass IoT Messaging Management @ codecentric during 01/2024 until 12/2024" speed={PARAGRAPH_SPEED} /></u></h3>
            <ul>
                <ul>
                    <li>
                        <Typewriter text="As member of a platform team, managed and developed on a complex, big scale messaging software for an agro-tech costumer" speed={PARAGRAPH_SPEED} />
                    </li>
                    <li>
                        <Typewriter text="Designed and developed multiple new message processing services and frontends." speed={PARAGRAPH_SPEED} />
                    </li>
                    <li>
                        <Typewriter text="Improved existing CI/CD pipelines & implemented automated testing and deployments in different projects." speed={PARAGRAPH_SPEED} />
                    </li>
                    <li>
                        <Typewriter text="Worked with Testcontainers in order to emulate complex testing environments." speed={PARAGRAPH_SPEED} />
                    </li>
                    <li>
                        <Typewriter text="Reverse engineered undocumented software and brought it up to a good qualitative state through thorough Unit, Integration & E2E testing." speed={PARAGRAPH_SPEED} />
                    </li>
                </ul>
            </ul>
            <h3><u><Typewriter text="Cloud Software Development @ DEVK during 02/2023 until 12/2023" speed={PARAGRAPH_SPEED} /></u></h3>
            <ul>
                <ul>
                    <li>
                        <Typewriter text="Developed the first implementation of a fully cloud based application within the company." speed={PARAGRAPH_SPEED} />
                    </li>
                    <li>
                        <Typewriter text="Implemented CI/CD pipeline based on Gitlab on older projects" speed={PARAGRAPH_SPEED} />
                    </li>
                    <li>
                        <Typewriter text="Refactored and reverse-engineered existing, non-documented software written in older Java versions." speed={PARAGRAPH_SPEED} />
                    </li>
                    <li>
                        <Typewriter text="Wrote and automated multiple types of tests in the for older applications." speed={PARAGRAPH_SPEED} />
                    </li>
                </ul>
            </ul>
        </>
    )
}