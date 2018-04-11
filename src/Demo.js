import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Appmount from "./Appmount";
import './App.css';

function Demo(props){
	
	function showdata() {
	  var parsedData = JSON.parse(props.productlist);
	  let description = parsedData[0];
      console.log(description);
	}


	return (
		<Grid>
        <Row>
            <Col xs={6} md={4}>
                {<p className="para">{props.showdata}</p>}
            </Col>
            <Col xs={6} md={4}>
                {<p className="para">hello</p>}
            </Col>
            <Col xsHidden md={4} >
                {<p className="para">hello</p>}
            </Col>
        </Row>

        <Row>
            <Col xs={6} md={4}>
                {<p className="para">hello</p>}
            </Col>
            <Col xs={6} md={4}>
                {<p className="para">hello</p>}
            </Col>
            <Col xsHidden md={4} >
                {<p className="para">hello</p>}
            </Col>
        </Row>

        <Row>
             <Col xs={6} md={4}>
                {<p className="para">hello</p>}
            </Col>
            <Col xs={6} md={4}>
                {<p className="para">hello</p>}
            </Col>
            <Col xsHidden md={4} >
                {<p className="para">hello</p>}
            </Col>
        </Row>
    </Grid>
	);
}

export default Demo;
