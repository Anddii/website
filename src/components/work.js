import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';


// <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//   </Card.Body>
// </Card>

const Work = () => {

  let data = useStaticQuery(graphql`
    query {
      site {
        id
      }
      allMarkdownRemark(filter: {frontmatter: {slug: {regex: "/work/"}}}, sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              date
              text
            }
          }
        }
      }
    }
    `);

  data = data.allMarkdownRemark.edges

  return (
    <Container style={{ marginBottom: '35px' }}>
      <Row>
        <Col>
          <h2 style={{ marginTop: '35px', marginBottom: '35px' }} class="text-dark">Work</h2>
        </Col>
      </Row>
      <Row style={{paddingLeft: '15px', paddingRight: '15px'}}>
        {data &&
          data.map(({ node }, i) => {
            const workData = node.frontmatter;
            console.log(i.toString())
            return (
              <Col xl={12} md={12} style={{padding: "0px"}}>
                <Card>  
                  <Card.Body>
                    <h5>
                      {workData.title}
                    </h5>
                    {workData.text}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
      <Row>

      </Row>
    </Container >
  )
}

export default Work