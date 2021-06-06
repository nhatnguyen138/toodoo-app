import MetaTag from '../layouts/MetaTag'
import Menu from '../layouts/Menu'

export default function AboutPage() {
    return (
        <div id="AboutContainer">
            <MetaTag section="About" />
            <Menu />
            <div id="Main">
                <div className="Title">
                    About
                </div>
                <div className="Content">
                    <br />
                    <p>TooDoo App is the first pseudo-project that I make to push onto GitHub for the purpose of promoting my persue of web design.</p>

                    <p>GitHub never had a place in my heart before. Mainly because I didn't have a habit to save my codes on the internet (I just deleted all of my pseudo-codes after use), or perhaps the reason could relate to the history of me singlehandedly developing the entire group project by my own multiple times. Alright, enough humble braggin'. Recently, realizing that it is beneficial for my career to publish my work online, I finally decided to make attempt to fill up the space that I have been missing out on GitHub, with the first baby step being this pseudo-project that I designed, developed and deployed by myself.</p>

                    <p>Although it might look boring and simple (and sound repetitive too), the product is the results of my learning and improvement over the years.</p>
                    
                    <br />
                    <h6><strong>ReactJS (+TypeScript)</strong></h6>

                    <p>The more I learn, the more I enjoy working with React. I will not say that it's the best framework out there, but it was so easy for me to pick up when I wanted to learn front-end development. Personally, I think I would still need a bit more industrial experience in order to have adequate professionalism in the codes, yet I consider myself an OK React developer (as long as I don't have to touch React class components, GOD I hate it!).</p>

                    <p>On the other hand, TypeScript is a cherry on the cake. I've just picked this up recently after I felt confident enough of my React skill. Though I never had a chance to take part in a project having a scope that required using TypeScript, it is regardless essential to pick up for my career. With TypeScript's surpringly strict rules, my coding consistency has been improved quite a lot.</p>
                    
                    <br />
                    <h6><strong>NodeJS</strong></h6>

                    <p>I can't really say that I'm good at doing NodeJS since it is just a framework that I use to code React onto, yet with all the deployment, libraries, builds and other shenanigans I've gone through along the way, I believe I have quite some knowledge dealing with Node.</p>
                    
                    <br />
                    <h6><strong>CSS and/or SASS</strong></h6>

                    <p>It's funny that I have a strange enjoyment of adjusting every pixel in a web page. I'm probably sure that I'm diagnosed with OCD; hence, I got hooked learning CSS, and later SASS. From simple element formatting to all-device responsive layouts to animations, you name it. I really had a fun time trying everything out with CSS and SASS, and I'm planning to have some repositories dedicated to CSS and/or SASS in the future.</p>
                    
                    <br />
                    <h6><strong>MongoDB</strong></h6>

                    <p>To be honest, I used to learn back-end because of my horrific experience learning SQL in uni, so yes, I suck at this. While I will have to get onto SQL eventually, I pick up MongoDB as a jumpstart. I have quite some time working with GraphQL as well; however, mongoDB is considered more common, and with the scope of this pseudo-project I try not to complicate things.</p>

                    <p>Overall, it's a fun time making this. I will still update the code whenever I have some spare time, but it wouldn't be too much. After all, it is just a demo...</p>

                    <br />
                </div>
            </div>
        </div>
    )
}
