import { Card, Row, Container, Col } from "react-bootstrap"
import './Portfolio.scss'

function Project({title, body, link}) {
    return (
    <Card>
        <Card.Title>{title}</Card.Title>
        <Card.Body>
            <Card.Text>{body}</Card.Text>
            <Card.Link href={link}>Source</Card.Link>
        </Card.Body>
    </Card>
    )
}

function Portfolio() {
    const xs=6
    const m=6
    const l=6

    return (
    <Container className='project-container'>
    <Row>
        <Col xs={xs} m={m} l={l}>
            <Project 
                title="This website!"
                body="Personal webpage made from a combination of react and 
                bootstrap. New features coming soon!"
                link="https://github.com/Wolrab/portfolio"/>
        </Col>
        
        <Col xs={xs} m={m} l={l}>
            <Project 
                title="Tex2Speech"
                body="Senior project for college. A speech synthesis application
                hosted on the web made for parsing scientific documents."
                link="https://github.com/hutchresearch/latex2speech"/>
        </Col>
    </Row>
    <Row>
        <Col xs={xs} m={m} l={l}>
            <Project 
                title="Android Satellite Viewer"
                body="An app which tracks the position of the globe's satellites in
                realtime. Efficiently uses the mapbox API for good looking rendering."
                link="https://github.com/Wolrab/night-sky-satellite-viewer"/>
        </Col>

        <Col xs={xs} m={m} l={l}>
            <Project 
                title="Fluke-Net"
                body="A neural network which identifies individual whale tails given noisy
                and inconsistent data. Utilizes many cutting-edge techniques for increasing
                accuracy."
                link="https://github.com/Wolrab/Fluke-Net"/>
        </Col>
    </Row>
    </Container>
    )
}

export default Portfolio