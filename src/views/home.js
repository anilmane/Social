import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Venerated Shy Eland</title>
        <meta property="og:title" content="Venerated Shy Eland" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">
              See the real impact of social media on students&apos; learning
              outcomes.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Learn More</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">#effects</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">#home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Impact</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Effects</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">#impact</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">
              Learn how social media impacts students&apos; concentration.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">
              Discover the effects of short attention spans on academic
              performance.
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">#solutions</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Solutions</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Explore strategies to help students improve focus despite social
              media distractions.
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Get Involved</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Secondary action</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Main action</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">
              Medium length hero headline goes here
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">Limited Attention Span</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Short Concentration Time</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">Impact on Learning</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Social Media Distractions</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              How Social Media Affects Student Focus
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Reduced Academic Performance</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">
              Take Control of Your Concentration
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Don&apos;t let social media distractions affect your ability to
              focus. Learn how to manage your time effectively and improve your
              concentration.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Start Now</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              The rapid consumption of information on social media may hinder
              students&apos; ability to retain and recall information
              effectively over time.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Social media platforms constantly compete for students&apos;
              attention, leading to decreased focus on their academic tasks.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">Reduced Attention Span</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">Increased Distraction</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Frequent exposure to short, attention-grabbing content on social
              media can contribute to a decline in students&apos; ability to
              concentrate for extended periods.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Impact on Memory Retention</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$29.99/month</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Sign up now</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Sign up now</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Weekly progress tracking</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">
              Live Q&amp;A sessions with instructors
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">or $299 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Sign up now</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">All features from Plan 2</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">
              Interactive quizzes and assignments
            </span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">
              Personalized feedback on assignments
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">All features from Plan 1</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$19.99/month</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">or $499 yearly</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">Certificate of completion</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">or $200 yearly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Access to all course materials</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Priority email support</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text181">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text182">$9.99/month</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text183">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              Understand the impact of short attention spans on students due to
              excessive use of social media.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              Organize offline events and activities to help students engage in
              real-world interactions and reduce screen time.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">
              Implement Time Management Techniques
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Encourage students to practice time management skills to improve
              focus and productivity.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">Recognize the Issue</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">Promote Offline Activities</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              Provide resources and information on maintaining a healthy balance
              between online and offline activities for overall well-being.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Educate on Digital Well-being</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">Parent</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">High School Teacher</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">John Doe</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">Emily Johnson</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              As a parent, I have seen how my child struggles to concentrate on
              homework or study for exams because of the constant notifications
              and updates from social media platforms. It&apos;s concerning to
              see the impact on their education.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">Jane Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">School Counselor</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">Michael Brown</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              I have noticed a significant decline in my students&apos; ability
              to focus for extended periods of time due to the constant
              distractions from social media. Short attention spans have become
              a real challenge in the classroom.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">College Student</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">
              The impact of social media on students&apos; concentration is
              undeniable. It&apos;s affecting their academic performance and
              overall learning experience.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              I find it hard to focus on my studies when I&apos;m constantly
              checking my phone for social media updates. It&apos;s a constant
              battle to stay focused and productive amidst all the distractions.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              In my role as a school counselor, I have observed a trend of
              decreased attention spans among students, which I believe is
              largely influenced by their excessive use of social media.
              It&apos;s crucial for educators and parents to address this issue.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text207">
              For any inquiries or feedback, feel free to reach out to us via
              email.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Contact Us</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text209">
              You can also contact us by phone during our business hours.
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Email: contact@website.com</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Phone: 123-456-7890</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text212">Cookie Policy</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text213">Privacy Policy</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text214">About Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text215">/terms</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text216">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">/cookies</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">/privacy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
