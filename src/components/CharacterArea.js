import React from 'react'
import { Card, Col, Row, Tab, Tabs } from 'react-bootstrap'
import { Link} from 'react-router-dom';

const CharacterArea = ({data}) => {
    const {name,img,occupation,status,birthday,category,char_id}=data;

    return (
        <Col md={4} sm={6} xs={12}>
          <Card style={{ width: "20rem",border:"none",background:"center"}}>
            <Card.Header style={{fontSize:"20px",color:"#ddd",fontWeight:"400"}}>{name}</Card.Header>
            <Card.Body>
            <Link to={"/details/"+char_id}><Card.Img src={img} className="hoverArrow"></Card.Img></Link>
              {/* //occupation dob status name */}
              <hr/>
              <Tabs defaultActiveKey="status" id="uncontrolled-tab-example" style={{border:"none"}}>
                <Tab eventKey="occupation" title="Occupation" style={{color:"black"}}>
                <br/>
                  <h3>{occupation}</h3>
                </Tab>
                <Tab eventKey="status" title="Status">
                <br/>
                  <h3>{status}</h3>
                </Tab>
                <Tab eventKey="birthday" title="Birthday">
                <br/>
                  <h3>{birthday}</h3>
                </Tab>
              </Tabs>
            </Card.Body>
            <Card.Footer>{category}</Card.Footer>
          </Card>
        </Col>
    

    )
}

export default CharacterArea
