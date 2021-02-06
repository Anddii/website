import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const PersonalProjects = () => {

    let data = useStaticQuery(graphql`
    query {
        site {
          id
        }
        allMarkdownRemark(filter: {frontmatter: {slug: {regex: "/personalProjects/"}}}, sort: {fields: frontmatter___date, order: DESC}) {
          edges {
            node {
              id
              frontmatter {
                title
                slug
                date
                tags
                featuredImage
                text
                link
              }
            }
          }
        }
      }
      
    `);

    data = data.allMarkdownRemark.edges

    return (
        <Container>
            <Row>
                <Col>
                    <h2 class="text-dark" style={{ marginTop: '35px', marginBottom: '35px'  }}>Personal Projects</h2>
                </Col>
            </Row>
            <Row>
                {data &&
                    data.map(({ node }, i) => {
                        const profData = node.frontmatter;
                        console.log(profData)
                        return (
                            <Col style={{marginBottom: '25px' }} xl={4} md={12}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Body>
                                        <Card.Title>{profData.title}</Card.Title>
                                        {profData.tags &&
                                          profData.tags.map((tag) => {
                                            return(
                                              <Badge style={{marginRight: '5px', marginBottom: '5px'}} variant="primary">{tag}</Badge>
                                              )
                                          })
                                        }
                                        <p>{profData.text}</p>
                                        <Card.Link className='text-info' href={profData.link[0]}>{profData.link[1]}</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
            </Row>
        </Container >
    )
}

export default PersonalProjects