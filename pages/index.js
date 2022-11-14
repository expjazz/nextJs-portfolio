import Head from 'next/head';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import SideBar from '../components/SideBar/index';
import Scroll from '../components/Scroll';
import allProjects from '../components/projects';
import Project from '../components/portfolio/Project';
import Me from '../components/Me';
import Layout from '../components/Layout';
import Footer from '../components/SideBar/Footer';

const ProjButton = styled.a`
  margin: 0;
  padding: 0 !important;
  background-color: 'white' !important;
`;

export default function Home() {
  const sections = [
    { id: 'top', name: 'Intro', icon: 'fa-home' },
    { id: 'portfolio', name: 'See my projects', icon: 'fa-th' },
    { id: 'about', name: 'About Me', icon: 'fa-user' },
    { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
  ];
  const [projIndex, setProjIndex] = useState(0);
  const handleProjShow = index => {
    setProjIndex(index);
  };
  return (
    <Layout>
      <SideBar sections={sections} />
      <div id="main">
        <section id="top" className="one dark cover">
          <div className="container">
            <h2 className="alt colorT">
              Hi! I'm <strong>Expedito</strong>
              <br />a full-stack Developer.
            </h2>
            <p className="subTitleOne">
              Coding is bringing new ideas to life to make the world better one
              code line at a time. Here I showcase my technical contributions to
              this goal.
            </p>
            <footer>
              <Scroll type="id" element="portfolio">
                <a href="#portfolio" className="button green">
                  See my projects
                </a>
              </Scroll>
            </footer>
          </div>
        </section>

        <section id="portfolio" className="two">
          <div className="container">
            <header>
              <h2>See my projects s</h2>
            </header>

            <script
              dangerouslySetInnerHTML={{__html: `
                (function (w, d, s, o, f, js, fjs) {
                  w[o] =
                      w[o] ||
                      function () {
                          (w[o].q = w[o].q || []).push(arguments);
                      };
                  (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
                  js.id = o;
                  js.src = f;
                  js.async = 1;
                  fjs.parentNode.insertBefore(js, fjs);
              })(window, document, "script", "_hw", "https://two-dots-embedded-storefront.s3.amazonaws.com/widget.js");
              _hw("init", {
                  element: "mfp-store",
                  popupPosition: "right",
                  storefrontType: "slider",
                  partnerId: 19,
              });
              `}}
            />

            <div id="mfp-store"></div>
            <div className="row">
              {allProjects.map(proj => (
                <Project
                  key={proj.title}
                  id="current"
                  title={proj.title}
                  githubUrl={proj.githubUrl}
                  projectUrl={proj.projectUrl}
                  subtitle={proj.subtitle}
                  image={proj.image}
                  stack={proj.stack}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="three">
          <div className="container">
            <header>
              <h2 className="boldFont ">About Me</h2>
            </header>

            <a href="/#" className="image featured"></a>

            <p>
              I'm a musician/web developer that loves to bring new ideas to
              life. I have a solid and successful career playing jazz and
              instrumental music, with experience of playing in different
              countries and cities. <br /> After being in love with music for my
              whole life, I found another passion in web development. Much like
              in music, I can give life to all my creativity. <br />
              My leading technologies are React, NextJs, GraphQl with Apollo,
              MongoDB, Prisma, Ruby on Rails, and Sass. I'm a graduate from the
              prestigious Microverse Bootcamp and I pride myself on working as
              hard as I can.
            </p>
          </div>
          <div className="icons flex">
            <img
              src="https://camo.githubusercontent.com/fa3377f592d3a75ae934707e76fe4a2e6947e55e/68747470733a2f2f696d672e69636f6e73382e636f6d2f706c6173746963696e652f34382f3030303030302f72656163742e706e67"
              alt="react"
            />

            <img
              src="https://camo.githubusercontent.com/6146fae5e8f082c2c4ed5511ee36652af91c69f1/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f6772617068716c2e706e67"
              alt="graphql"
            />
            <img
              src="https://camo.githubusercontent.com/6b349988f28a2d77fd4d372f3aa58f4e786afc41/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f6a6176617363726970742e706e67"
              alt="javascript"
            />
            <img
              src="https://camo.githubusercontent.com/5b05ec0bed69d097e594b4657911509baea57d1b/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f6e6f64656a732e706e67"
              alt="node"
            />

            <img
              src="https://camo.githubusercontent.com/8047c55d98eaf34fcfeae45ff259216f65ed16fb/68747470733a2f2f6775696465732e727562796f6e7261696c732e6f72672f696d616765732f66617669636f6e2e69636f"
              alt="rails"
            />
          </div>
        </section>

        <section id="contact" className="four">
          <div className="container">
            <header>
              <h2 className="boldFont ">Contact</h2>
            </header>

            <p>Let's create something great.</p>

            <form method="post" data-netlify="true" action="#">
              <div className="row">
                <div className="col-6 col-12-mobile">
                  <label htmlFor="name">
                    <input type="text" name="name" placeholder="Name" />
                  </label>
                </div>
                <div className="col-6 col-12-mobile">
                  <label htmlFor="email">
                    <input type="text" name="email" placeholder="Email" />
                  </label>
                </div>
                <div className="col-12">
                  <label htmlFor="message">
                    <textarea name="message" placeholder="Message" />
                  </label>
                </div>
                <div className="col-12 ">
                  <input type="submit" value="Send Message" className="green" />
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
}
