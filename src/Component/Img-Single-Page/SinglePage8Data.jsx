import React from 'react'
import img from "../pics/sk8.jpg"
import SingleSidbar from "./SingleSidbar"
import img1 from "../pics/side1.jpg"
import img2 from "../pics/side2.jpg"
import img3 from "../pics/side3.jpg"
import img4 from "../pics/side4.jpg"
import img5 from "../pics/side5.jpg"

const SinglePage8Data = () => {
     return (
          <>
                 <div className="single-article-page">
               <div className="single-article-page-image">
               <h1>What's next for the web browser?</h1>
               <img src={img} alt=""/>
               </div>
               <div className="article-content">
               <div className="single-article-page-container">
               <p>January 2020 saw the release of the first Microsoft Edge browser to be powered by Google's Chromium engine, which joined Chrome, Samsung Internet and Opera in the list of Chromium-powered browsers. According to Statcounter, this means 70 per cent of users are now using Google-powered browsers.</p><p>But what does that mean for the future of the web browser? Nico Turca explores what's happening in the browser space, what it means for developers and users, and how diversity can be promoted. For more information on web browsers, see our roundup of the best web browsers. Need some great resources? Check out this list of hot web design tools or the best web hosting services right now.</p><p>&nbsp;</p>
               <h3>Is Google's dominance a bad thing?</h3>
               <figure className="image"><img src={img1} alt="internet"/>
               <figcaption>Discussions over monoculture have been going on ever since early Internet Explorer browsers (Image credit: Microsoft)
               </figcaption>
               </figure>
               <p>Browser 'monoculture' has been a topic of heated debate within the developer community, ever since the days of Internet Explorer's dominance in the early 2000s. The argument goes that if usage of a browser becomes so prevalent, developers stop coding for any other browsers and over time standards erode and the dominant company can create its own ecosystem, locking users into their products and opening the doors to potentially harmful abuses of its position.</p><p>&nbsp;</p><p>Supporters of the monoculture say that having only one engine frees up developers from maintaining different engines across a range of browsers, all with their quirks and idiosyncrasies, to focus on new feature sets that add value to users and improve people's browsing experience. They make the case for faster innovation and increased investment in product development.</p>
               <figure className="image"><img src={img2} alt=""/>
               <figcaption>Google's dominance could cause problems (Image credit: Google)
               </figcaption>
               </figure>
               <p>I look at that 70 per cent and growing user base and I feel that more Chromium-powered browsers in the world means we have a single point of failure – if a Chromium-based engine goes wrong at base – or worse still gets compromised by hostile forces – there will be issues across more of the web. When bolstered by concerns about Google's commitment to privacy, monetisation and data selling, we could see a browser landscape where Google holds a monopoly over browser engines – and the touch points within them – that a lot of users use to access the web.</p><p>&nbsp;</p><p>Many developers believe in diversity, fair competition and the forces for good across the web: a future where no single provider is entirely dominate and where users have a healthy choice of tools to do the job.</p><p>&nbsp;</p><h3>What can developers do to help promote diversity?</h3><p>To avoid driving us towards a monopoly, designers, developers and tech-savvy people need to take an impartial look at what's happening in the browser space and what this means for the people who use it. Community-led change can educate people about what's happening in this space. We have a legacy of effecting change based on our traditional stance. A stance that can be described as non-conformist, subversive and sceptical of poor practices. This has been the norm for nearly two decades. Take a couple of recent examples where critique from developers made big tech rethink their choices.</p><p>&nbsp;</p><p>In 2019 the Chrome team were challenged by the community when they announced that their engine would support a new html tag: '<strong>&lt;std-toast&gt;</strong>' – a notification tag that jumps from the bottom of the screen – the naming of which raised questions around clarity.</p><p>&nbsp;</p><p>The fact that the introduction of this tag wasn't discussed with the parties involved (and impacted) was seen as Google abusing its power to bypass best practice W3C standards process. This sparked a reaction from the people behind the standardisation of the web and the development community, and resulted in &lt;std-toast&gt; not being used across other browser engines.</p>
               <figure className="image"><img src={img3} alt=""/>
               <figcaption>Apple had a data capture rethink (Image credit: Apple)
               </figcaption>
               </figure>
               <p>Mozilla, its developers and community hold a different vision for the web. They're more focused on an ad-free future, where monetisation of data isn't at the heart of business models. Their work in this area helped Apple – in light of its brand standing that is rooted in privacy – rethink the amount of data Safari was capturing about users. This reduces the amount of data that can be sold to target ads to people based on browsing behaviour.</p><p>&nbsp;</p><p>Microsoft's Edge team recently made changes to the Chromium engine, which means users will soon be able to move multiple tabs to a new window. It's a small step but a positive one that comes from the benefits of open- source projects. This shows that browser developers do have the ability to create change for the better of people using the web together.</p><p>&nbsp;</p><h3>More Chronium-powered browsers: The opportunities and issues</h3><p>So what are the opportunities? Having outlined what developers can and are doing to challenge monopolies, it's also important to explore the problems and the increased usage opportunities that Google's Chromium engine presents.<br/>Google as a brand has helped to further the conversation around accessibility. Firstly, it holds the space in which the conversation about accessibility typically happens – it invests a lot of money in talking about it globally. Secondly, a Chromium engine powers Opera, which is the main assistive browser. Thirdly, Microsoft and Google working together using a Chromium engine could improve accessibility support across browsers.</p>
               <figure className="image"><img src={img4} alt=""/>
               <figcaption>Edge users can now experience a richer web (Image credit: Microsoft)
               </figcaption>
               </figure>
               <p>Chromium-powered browsers also mean more people can enjoy richer web-based experiences – this now extends to Edge users. This is because Chromium, unlike the older Microsoft engine, allows for progressive web applications and scalable components – core features of a modern browsing experience – to be part of the browsing experience of more people.</p><p>&nbsp;</p><p>So what are the potential issues? There's a number of problems connected to Google's size and power. Chrome has historically had the support of developers due to the tooling facilities that enable exploration, iterative development and even the powering of unique applications like Brave.</p><p>&nbsp;</p><p>That said, Firefox's tool set is expanding quickly and differently from Chrome's performance-focused feature set. Firefox's approach has recently focused on CSS layout inspection and it led the effort of supporting the full CSS grid specification. As a result, we've seen big names in the web community publicly stating their move away from Chrome to take full advantage of such features.</p><p>&nbsp;</p><p>Google's attitude could be at times described as avoiding the conversation about basic web standards. Changes made have ignored the normal approval and consideration loop on multiple occasions. In some ways, its size has led to the company setting these standards across the web. This means potentially harmful or exploitative changes could go live, without proper checks conducted by a third party.</p>
               <figure className="image">
               <img src={img5} alt="" />
               <figcaption>Firefox's toolset is expanding quickly (Image credit: Mozilla Firefox)
               </figcaption>
               </figure>
               <p>More people are aware of generally exploitative practices; however, they still cannot interrogate the technology in a way that would be meaningful without help from people like us.</p><p>The increased adoption of a Chromium-based engine gives Google more control over future browser development and the direction of the web. This means development is conducted on the terms of what Google most finds appropriate.</p><p>&nbsp;</p><p>Also, with more Chromium browsers around, people may fear for their privacy. Although the link between the Chromium-powered browsers and Google exploiting data isn't cause and effect, greater use could make for increased targeted advertising whilst increasing the scope for the exploitation of privacy concerns. However, with current versions of Edge, download privacy settings are enabled as default. The question is, how will Google react? For example, could more aggressive messaging on plugin downloads from Edge become the norm?</p><p>&nbsp;</p><p>These issues don't even touch on reports of Microsoft using dark UX patterns and advertising techniques to encourage users at start-up to move away from Firefox, towards its new Chromium-powered engine.</p><p>&nbsp;</p><h3>Duty of care</h3><p>There is a need for developers to be good stewards of the internet. We are the people with the know-how of the techniques and practices tech companies use. We can unpick the rationale and motivation behind their decisions. With that in mind, we need to use our voices to share our concerns when we see movements like Microsoft adopting a Chromium-powered engine.</p><p>&nbsp;</p><p>Developers have a duty to educate users, when this will help to shape the browser landscape. We need to act in this way if we want to see a diverse future and not a monopoly. Whether that's switching to a different browser based on the data usage policy of the vendor, or publicly voicing dissent about vendors' practices – we all have a part to play in making the internet – and the browsers we use to access it – better. This can and will help to maintain diversity in the face of monopoly.</p><p>&nbsp;</p>
               <p><i>This content originally appeared in net magazine and creativebloq.</i></p>
               <i>Published: 22:12:27 - 21/12/2020</i>
               </div>
               <SingleSidbar/>
               </div>
               </div>
          </>
     )
}

export default SinglePage8Data
