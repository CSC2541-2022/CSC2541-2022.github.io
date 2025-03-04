import { Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap'
import { bottomTooltip } from '../helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'next-themes'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import Image from "next/image";

function quercusLogo(dark) {
    if (dark) {
        return (
            <img
            height='32px'
            width='32px'
            src="images/quercus-blue-200.png"
            onMouseOver={e => (e.currentTarget.src = "images/quercus-blue-100.png")}
            onMouseOut={e => (e.currentTarget.src = "images/quercus-blue-200.png")}
            />
        )
    }
    return (
        <img
        className='iconImg'
        height='32px'
        width='32px'
        src="images/quercus-blue-500.png"
        onMouseOver={e => (e.currentTarget.src = "images/quercus-blue-200.png")}
        onMouseOut={e => (e.currentTarget.src = "images/quercus-blue-500.png")}
        />
    )
}

export default function CourseOverview() {
    const { theme, _ } = useTheme();
    const dark = theme === 'dark' ? true : false;
    return (
        <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css"/>
        <script src="https://kit.fontawesome.com/9d05fccfe0.js" crossOrigin="anonymous"></script>

        {/*<Card style={{ width: '100%', border: "2px solid"}}>*/}
        {/*<Card.Body id="card">*/}
        <Row>
            <Col>
                <div>
                    <h3>The Essentials</h3>
            <b>Instructor: </b>
            <a href="http://www.cs.toronto.edu/~rahulgk/" target="_blank">Dr. Rahul Krishnan</a>
            </div>
            <div>
                <b>Time: </b> Mondays 3:00PM - 5:00PM.
            </div>
            <div>
                <b>Location: </b> <a href="https://map.utoronto.ca/?id=1809#!m/494515" target="_blank">RW 140</a>
            </div>
            <div>
                <b>Office Hours:</b>
                <ul>
                    <li><b>Rahul: </b> Mondays, 11:00AM - 12:00PM, <a href="https://map.utoronto.ca/?id=1809#!m/494469" target="_blank"> PT 286</a>.</li>
                    <li><b>Vahid: </b> Wednesdays, 1:30PM - 2:30PM, <a href="https://map.utoronto.ca/?id=1809#!m/494469" target="_blank"> PT 286</a>. </li>{/*7:00PM - 8:00PM, <a href="https://q.utoronto.ca/courses/239200/discussion_topics/1357692" target="_blank">on Zoom</a>.</li>*/}
                    {/*<li><b>Farnam: </b> Thursdays, 11:00AM - 1:00PM, <a href="https://calendly.com/frnm-mansouri/farnam-s-csc-2541-office-hours" target="_blank">by appointment</a>.</li>*/}
                </ul>
                 <Row>
        <Col></Col>
        <Col className='d-flex justify-content-center'>
            {bottomTooltip(<a href="https://piazza.com/utoronto.ca/fall2022/csc2541" target="_blank">
            <i className="ai ai-piazza ai-2x"></i>
            </a>, "Piazza")}
        </Col>
        <Col className='d-flex justify-content-center'>
            {bottomTooltip(<a href="https://q.utoronto.ca/courses/270281" target="_blank">
            {quercusLogo(dark)}
        </a>, "Quercus")}
        </Col>
        <Col></Col>
        </Row>
            </div>
            </Col>
            <Col>
                <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                    {theme === 'dark' ? <Image src={"/logo_dark.png"} width={"600"} height={"272"} /> : <Image src={"/logo.png"} width={"600"} height={"272"}  />}
                </div>
                <div style={{fontSize:"11px", justifyContent: "right"}}>"Towards causal representation learning"., Schölkopf et al. Proceedings of the IEEE 2021</div>
            </Col>
        </Row>


        {/*<div>*/}
        {/*    <b> Booking Presentations Practice:</b>*/}
        {/*    <ul>*/}
        {/*        <li><b>Michael: </b> Tuesdays, 9:00AM - 11:00AM, <a href="https://calendly.com/michaelcooper-uoft/michael-s-csc-2541-presentation-practice-hours?month=2021-10" target="_blank">by appointment</a>.</li>*/}
        {/*        <li><b>Farnam: </b> Tuesdays, 11:00AM - 1:00PM, <a href="https://calendly.com/frnm-mansouri/farnam-s-csc2541-presentation-practice-hours?month=2021-10" target="_blank">by appointment</a>.</li>*/}
        {/*    </ul>*/}
        {/*</div>*/}
        {/*    /!* Icons for various course features *!/*/}
        {/*<Row>*/}
        {/*<Col></Col>*/}
        {/*<Col className='d-flex justify-content-center'>*/}
        {/*    {bottomTooltip(<a href="https://piazza.com/class/kt80bprbcjk64q" target="_blank">*/}
        {/*    <i className="ai ai-piazza ai-2x"></i>*/}
        {/*    </a>, "Piazza")}*/}
        {/*</Col>*/}
        {/*<Col className='d-flex justify-content-center'>*/}
        {/*    {bottomTooltip(<a href="https://q.utoronto.ca/courses/239200" target="_blank">*/}
        {/*    {quercusLogo(dark)}*/}
        {/*</a>, "Quercus")}*/}
        {/*</Col>*/}
        {/*<Col></Col>*/}
        {/*</Row>*/}
        {/*</Card.Body>*/}
        {/*</Card>*/}
        
        </>
    );

}
