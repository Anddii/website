import React, { useState } from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'

import {isMobile} from 'react-device-detect';


const professionalCardStyle = {
  justifyContent: "center",
  borderRadius: "5px"
}
const professionalCardMobileStyle = {
  justifyContent: "center",
  justifyContent: "center",
  padding: '0px',
  marginBottom: '-15px',
}

const professionalProjectsStyle = {
  margin: '0px',
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const ProfessionalProjects = () => {

  let data = useStaticQuery(graphql`
    query MyQuery {
        site {
          id
        }
        allMarkdownRemark(filter: {frontmatter: {slug: {regex: "/professionalProjects/"}}}, sort: {fields: frontmatter___date, order: DESC}) {
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
              }
            }
          }
        }
      }
      
    `);

  data = data.allMarkdownRemark.edges


  const professionalProjectsCard = (profData, i) => {
    return (
      <Row style={professionalCardStyle}>
        <Col style={professionalProjectsStyle} xl={5} md={5}>
          {i % 2 == 0 &&
            <img style={{ borderRadius: "3px", marginLeft: "auto", marginRight: "auto", maxWidth: 100 + '%' }} src={profData.featuredImage}></img>
          }
          {i % 2 == 1 &&
            professionalProject(profData, i)
          }
        </Col>
        <Col style={professionalProjectsStyle} xl={5} md={5}>
          {i % 2 == 1 &&
            <img style={{ borderRadius: "3px", marginLeft: "auto", marginRight: "auto", maxWidth: 100 + '%' }} src={profData.featuredImage}></img>
          }
          {i % 2 == 0 &&
            professionalProject(profData, i)
          }
        </Col>
      </Row>
    )
  }
  const professionalProjectsCardMobile = (profData, i) => {
    return (
      <Row style={professionalCardMobileStyle}>
        <Col style={professionalProjectsStyle} xl={9} md={4}>
          <img style={{ borderRadius: "3px", marginRight: 0, maxWidth: 100 + '%' }} src={profData.featuredImage}></img>
        </Col>
        <Col style={professionalProjectsStyle} xl={6} md={4}>
          {
            professionalProject(profData, i)
          }
        </Col>
      </Row>
    )
  }

  const professionalProject = (profData, i) => {
    let style2 = {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: '400px',
      marginBottom: '0px'
    }
    if (i % 2 == 1 && !isMobile) {
      style2 = {
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: '400px'
      }
    }

    return (
      <div style={style2}>
        <h5 class="text-dark">{profData.title}</h5>
        {profData.tags &&
          profData.tags.map((tag) => {
            return (
              <Badge style={{ marginRight: '5px', marginBottom: '5px' }} variant="primary">{tag}</Badge>
            )
          })
        }
        <p class="text-dark">{profData.text}</p>
      </div>
    )
  }

  return (
    <Container>

      <Row>
        <Col style={{ marginTop: '35px', marginBottom: '35px' }}>
          <h2 class="text-dark">Featured Projects</h2>
        </Col>
      </Row>
      {data &&
        data.map(({ node }, i) => {
          const profData = node.frontmatter;
          if (!isMobile) {
            return (
              <div>
                {professionalProjectsCard(profData, i)}
                <hr></hr>
              </div>
            );
          }
          else {
            return (
              <div>
                {professionalProjectsCardMobile(profData, i)}
                <hr></hr>
              </div>
            )
          }
        })}
    </Container >
  )
}

export default ProfessionalProjects