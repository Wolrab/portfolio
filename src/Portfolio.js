import { useState } from 'react'
import { Button, Card, Row, Container, Col, Modal, Stack } from "react-bootstrap"
import { Document, Page, pdfjs} from "react-pdf"
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

function ProjectDisplay() {
    const {xs, m, l} = {xs: 6, m: 6, l: 6}

    return (
    <>
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
    </>
    )
}

function ResumeDisplay({resumePath}) {
    pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [page, setPage] = useState(null)
    const [show, setShow] = useState(false)
    
    const showResume = () => setShow(true)
    const hideResume = () => setShow(false)
    
    const documentLoadSuccess = ({pages}) => {
        setPage(1)
    }

    const documentLoadError = (error) => {
        // TODO: Show dialog
    }

    return (
    <>
      <Stack direction="horizontal" gap={2}>
        <Button variant="primary" onClick={showResume} className='ms-auto'>
        Show
        </Button>
        <a href="/Developer_Resume.pdf">Download</a>
        <div className='ms-auto'/>
      </Stack>

      <Modal show={show} onHide={hideResume} size='lg' fullscreen='lg-down'>
        <Modal.Header closeButton>
          <Modal.Title>Developer Resume 2022</Modal.Title>
        </Modal.Header>
        <Modal.Body align="center">
          <Document 
              file={resumePath} 
              onLoadSuccess={documentLoadSuccess}
              onLoadError={documentLoadError}>
            <Page pageNumber={page} width={700}/>
          </Document>
        </Modal.Body>
      </Modal>
    </>
    )
}

function Portfolio() {
    return (
    <div className='project-container'>
      <h2 align="center">Projects</h2>
      <ProjectDisplay/>
      <h2 align="center">Resume</h2>
      <ResumeDisplay resumePath="./Developer_Resume.pdf"/>
    </div>
    )
}

export default Portfolio