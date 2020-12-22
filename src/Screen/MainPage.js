import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Col,
  Dropdown,
  FormControl,
  InputGroup,
  Pagination,
  Row,
} from "react-bootstrap";
import CharacterArea from "../components/CharacterArea";
//Main Screen
const MainPage = () => {
  const [active, setActive] = useState(1);
  const [search, setSearch] = useState("");
  const [catSelect,setCategory]=useState("");
  const items = [];
  for (let number = 1; number <= 6; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setActive(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  const [datas, setData] = useState([]);
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const { data } = await axios.get(
          "https://www.breakingbadapi.com/api/characters"
        );
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAll();
  }, []);

  const mainPageItem = () => {
    return datas
      .filter((dd) => (dd.name.toLowerCase().includes(search.toLowerCase()) && dd.category.toLowerCase().includes(catSelect.toLowerCase())))
      .filter((dat, index) => index >=(active-1) * 10 && index <= (active-1) * 10 + 9)
      .map((filterData) => <CharacterArea data={filterData} />);
  };
  return (
    <div  className="main">
    <></>
    <br/>
      <Row className="m-auto py-2" style={{positon:"fixed",zIndex:"4",width:"100%"}}>
        <Col md={9}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search the Character"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">Button</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col>
          <Dropdown className="f-right">
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              {(catSelect==="") ? "Default":catSelect}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item   onClick={()=>setCategory("Breaking Bad")}>Breaking Bad</Dropdown.Item>
              <Dropdown.Item   onClick={()=>setCategory("Better Call Saul")}>Better Call Saul</Dropdown.Item>
              <Dropdown.Item   onClick={()=>setCategory("")}>Default</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <Row className="text-align py-3" >{mainPageItem()}</Row>

      <Pagination style={{ justifyContent: "center" }} size="lg" >
        {items}
      </Pagination>
    </div>
  );
};

export default MainPage;
