import React, { useEffect, useState } from "react";
import { Alert, Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import axios from "axios";
const CharacterDetail = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];
  const [datas, setData] = useState({});
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    const fetchOne = async () => {
      try {
        const { data } = await axios.get(
          "https://www.breakingbadapi.com/api/characters"
        );
        const filteredValue = data.find((da) => da.char_id === Number(id));
        //console.log(filteredValue)
        setData(filteredValue);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOne();
  }, []);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const { data } = await axios.get(
          `https://www.breakingbadapi.com/api/quote?author=${datas.name}`
        );
        setQuotes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuote();
  }, [datas]);

  const {img,name,birthday,occupation,status,nickname,portrayed}=datas;
  const headings=["Name","Birth","Occupation","Status","Nickname","Actor"]
  const headingData=[name,birthday,occupation,status,nickname,portrayed]
  return (
    <div className="details">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img
              src={img}
              style={{ objectFit: "contain" }}
            ></Card.Img>
          </Card>
        </Col>
        <Col md={6} className="text-align">
          <Card style={{width:"27rem",top:"2%",background:"center",border:"none"}}>
            <Card.Body>
            {headingData.map((val,index)=>(<Row>
                    <Col md={4}><Card.Title className="f-left">{headings[index]}:</Card.Title></Col>
                    <Col md={8} ><p className="f-right">{headingData[index]}</p></Col>
                </Row>))}
                
            </Card.Body>
          </Card>
          <Container style={{marginTop:"10%"}}>
      <h1>QUOTES</h1>
      <hr/>
      <br/>
      {quotes.map((qu, index) => (
        <Card style={{background:"center",border:"none",margin:"10px 0px"}} >
          <Alert.Heading> {qu.quote}</Alert.Heading>
          <p>
            {qu.author} Quote:{index + 1}
          </p>
        </Card>
      ))}
      </Container>
        </Col>
      </Row>
    </div>
  );
};

export default CharacterDetail;
