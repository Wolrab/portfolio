import { Card } from "react-bootstrap"
import project1 from "./res/project1.jpg"

function Portfolio() {
    return(
        <Card>
            <Card.Img src={project1} variant='top'/>
            <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Body>
                    Here is Project 1
                </Card.Body>
            </Card.Body>
        </Card>
    )
}

export default Portfolio