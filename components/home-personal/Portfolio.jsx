'use client';
import React, { useEffect } from 'react';

function Portfolio() {
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.cards .card-item');
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: 'center center',
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: '50% ' + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: 'none',
        animation: scaleDown,
        toggleActions: 'restart none none reverse',
      });
    });
  }
  useEffect(() => {
    Playing();

    // Clean up function
    return () => {
      // Dispose GSAP ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <section className="work-card section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5"></span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                Featured <span className="fw-200">Services.</span> 
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              {/* <a
                href="/portfolio-grid"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a> */}
              {/* <span className="icon ti-arrow-top-right"></span> */}
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    {/* <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Figma
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Web Design
                      </a>
                    </div> */}
                    <h4>AI Recruitment Tool Box</h4>
                  </div>
                  <div>
                  <p>
                        <h6>Comprehensive AI Hiring Software Suite</h6> <br /> <br />

                        Optimize your recruitment workflow with advanced AI-powered applicant tracking, resume parsing, and candidate management tools designed for faster, smarter hiring.
Keywords: AI recruitment software, applicant tracking system, AI hiring tools, automated recruitment solutions

                    </p>
                    <a href="#" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/Ai-Rec.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    {/* <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Figma
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Web Design
                      </a>
                    </div> */}
                    <h4>Client Capture Engine</h4>
                  </div>
                  <div>
                    <p>
                        <h6>AI-Driven Lead Generation & Client Acquisition</h6> <br /> <br />

                        Automate your client outreach with intelligent lead scoring, personalized AI chatbots, and data-driven engagement strategies to convert prospects into loyal customers.
Keywords: AI lead generation, client acquisition automation, AI sales funnel, personalized outreach AI


                    </p>
                    <a href="#" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/ClientCapture.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    {/* <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Figma
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Web Design
                      </a>
                    </div> */}
                    <h4>Candidate Conversion Engine</h4>
                  </div>
                  <div>
                  <p>
                        <h6>AI-Powered Candidate Engagement & Conversion</h6> <br /> <br />

                        Increase candidate response rates and streamline interview scheduling using AI chatbots, automated follow-ups, and personalized communication workflows.
Keywords: candidate engagement AI, AI recruitment automation, interview scheduling AI, candidate conversion tools



                    </p>
                    <a href="#" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/CandidateConversionEngine.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    {/* <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Figma
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Web Design
                      </a>
                    </div> */}
                    <h4>A.I. Recruitment Blueprint</h4>
                  </div>
                  <div>
                  <p>
                        <h6>Step-by-Step AI Hiring Strategy & Framework</h6> <br /> <br />

                        Leverage a proven AI recruitment roadmap to attract, assess, and hire top talent efficiently, reducing time-to-fill and improving quality of hire.
Keywords: AI recruitment strategy, hiring blueprint AI, talent acquisition AI framework, AI hiring process




                    </p>
                    <a href="#" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/BluePrint.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    {/* <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Figma
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Web Design
                      </a>
                    </div> */}
                    <h4>Master Ops Plan</h4>
                  </div>
                  <div>
                  <p>
                        <h6>AI-Enhanced Recruitment Operations & Workflow Optimization</h6> <br />

                        Streamline recruitment team operations with AI-powered analytics, workload automation, and performance tracking to boost productivity and reduce costs.
Keywords: recruitment operations AI, AI workflow automation, recruitment analytics, hiring team productivity AI




                    </p>
                    <a href="#" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/Master.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-bottom mt-100">
        <div className="main-bg d-flex align-items-center">
          <h6 className="fz-14 fw-400">
            More than <span className="fw-600"> 200+ companies</span>
            trusted us worldwide
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
