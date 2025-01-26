import Typewriter, { PARAGRAPH_SPEED, PRIMARY_CONTENT_DELAY } from "../../components/typewriter/Typewriter";
import './Resume.css';

export default function Resume() {
    return (
        <>
            <h1><Typewriter text="Resume" /></h1>
            <h3><Typewriter text="Currently working @ codecentric as a Fullstack Software Consultant =)"/></h3>
            <div className="resume-container">
            <h2><Typewriter text="Experience"/></h2>
                <div className="resume-item">
                    <h3><u><Typewriter text="Mass IoT Messaging Management @ codecentric during 01/2024 until 12/2024" speed={PARAGRAPH_SPEED} delay={PRIMARY_CONTENT_DELAY} /></u></h3>
                    <ul>
                        <li>
                            <Typewriter text="As member of a platform team, managed and developed on a complex, big scale Azure Cloud messaging software for an agro-tech customer."
                                speed={PARAGRAPH_SPEED}
                                delay={PRIMARY_CONTENT_DELAY} />
                        </li>
                        <li>
                            <Typewriter text="Designed and developed multiple new message processing services and frontends."
                                speed={PARAGRAPH_SPEED}
                                delay={PRIMARY_CONTENT_DELAY} />
                        </li>
                        <li>
                            <Typewriter text="Improved existing CI/CD pipelines & implemented automated testing and deployments in different projects."
                                speed={PARAGRAPH_SPEED}
                                delay={PRIMARY_CONTENT_DELAY} />
                        </li>
                        <li>
                            <Typewriter text="Worked with Testcontainers in order to emulate complex testing environments."
                                speed={PARAGRAPH_SPEED}
                                delay={PRIMARY_CONTENT_DELAY} />
                        </li>
                        <li>
                            <Typewriter text="Reverse engineered undocumented software and brought it up to a good qualitative state through thorough Unit, Integration & E2E testing."
                                speed={PARAGRAPH_SPEED}
                                delay={PRIMARY_CONTENT_DELAY} />
                        </li>
                    </ul>
                </div>
                <div className="resume-item">
                    <h3><u><Typewriter text="Cloud Software Development @ DEVK during 02/2023 until 12/2023" speed={PARAGRAPH_SPEED} delay={PRIMARY_CONTENT_DELAY} /></u></h3>

                    <ul>
                        <li>
                            <Typewriter text="Developed the first implementation of a fully cloud GO based application within the company."
                                speed={PARAGRAPH_SPEED}
                                delay={PRIMARY_CONTENT_DELAY} />
                        </li>
                        <li>
                            <Typewriter text="Implemented CI/CD pipeline based on Gitlab on older projects."
                                speed={PARAGRAPH_SPEED}
                                delay={PRIMARY_CONTENT_DELAY} />
                        </li>
                        <li>
                            <Typewriter text="Refactored and reverse-engineered existing, non-documented software written in older Java versions."
                                speed={PARAGRAPH_SPEED}
                                delay={PRIMARY_CONTENT_DELAY} />
                        </li>
                        <li>
                            <Typewriter text="Wrote and automated multiple types of tests in the for older applications."
                                speed={PARAGRAPH_SPEED}
                                delay={PRIMARY_CONTENT_DELAY} />
                        </li>
                    </ul>
                </div>
                <div className="resume-item">
                    <h3><u><Typewriter text="Software and Process Modernization @ group9 during 07/2022 until 02/2023" speed={PARAGRAPH_SPEED} delay={PRIMARY_CONTENT_DELAY} /></u></h3>
                    <ul>
                        <li>
                            <Typewriter text="As a member of a taskforce, modernized and implemented DevOps for a set of core & publicly accessible applications."
                                speed={PARAGRAPH_SPEED}
                                delay={PRIMARY_CONTENT_DELAY} />
                        </li>
                        <li>
                            <Typewriter text="Reverse engineered and documented old Java software, performed a full dependency update & consequent refactoring."
                                speed={PARAGRAPH_SPEED}
                                delay={PRIMARY_CONTENT_DELAY} />
                        </li>
                        <li>
                            <Typewriter text="Introduced CI/CD and automated Selenium/Cucumber testing, removing the need for manual tests which were the norm."
                                speed={PARAGRAPH_SPEED}
                                delay={PRIMARY_CONTENT_DELAY} />
                        </li>
                    </ul>
                </div>
                <div className="resume-item">
                    <h3><u><Typewriter text="Software Dev. for the Management of Retirement and Orphan Pensions @ group9 during 06/2021 until 06/2022" speed={PARAGRAPH_SPEED} delay={PRIMARY_CONTENT_DELAY} /></u></h3>
                    <ul>
                        <li>
                            <Typewriter text="As a backend developer, worked on a Java based complex automated pension management system used by the largest pension funds in the Netherlands."
                                speed={PARAGRAPH_SPEED}
                                delay={PRIMARY_CONTENT_DELAY} />
                        </li>
                        <li>
                            <Typewriter text="Developed new features in order to keep pace with legislation developments and improved existing ones, while also refactoring and testing old code."
                                speed={PARAGRAPH_SPEED}
                                delay={PRIMARY_CONTENT_DELAY} />
                        </li>
                        <li>
                            <Typewriter text="Participated in eventstorming and implementing features in a full DDD environment."
                                speed={PARAGRAPH_SPEED}
                                delay={PRIMARY_CONTENT_DELAY} />
                        </li>
                    </ul>
                </div>
                <div className="resume-item">
                    <h3><u><Typewriter text="Factory Line Management System @ CGI Nederland during 09/2020 until 06/2021" speed={PARAGRAPH_SPEED} delay={PRIMARY_CONTENT_DELAY} /></u></h3>
                    <ul>
                        <li>
                            <Typewriter text="Worked on the development of large in-house factory management software, which was used in chip factories around the world. "
                                speed={PARAGRAPH_SPEED}
                                delay={PRIMARY_CONTENT_DELAY} />
                        </li>
                        <li>
                            <Typewriter text="Played a significant role refactoring and redesigning the frontend."
                                speed={PARAGRAPH_SPEED}
                                delay={PRIMARY_CONTENT_DELAY} />
                        </li>
                        <li>
                            <Typewriter text="Set up a CI/CD pipeline in the Atlassian stack (Bamboo) for the project."
                                speed={PARAGRAPH_SPEED}
                                delay={PRIMARY_CONTENT_DELAY} />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}