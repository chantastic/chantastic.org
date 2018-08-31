import React from 'react'

function OutboundA(props) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function OutboundTalkCard({ title, event, date, tags = [], ...props }) {
  function Tag({ style, ...props }) {
    return (
      <span
        style={{
          backgroundColor: '#eee',
          borderRadius: '.5em',
          display: 'inline-block',
          padding: '.25em .5em',
          marginLeft: '1em',
          fontSize: 'smaller',
          lineHeight: '1em',
          ...style,
        }}
        {...props}
      />
    )
  }

  return (
    <div>
      <div>
        <OutboundA {...props}>{title}</OutboundA>
      </div>
      <div>
        <strong>{event}</strong>
        <span>, {date}</span>
      </div>
      {tags.length > 0 && (
        <span>
          {tags.map((tag, i) => (
            <Tag style={i === 0 && { marginLeft: 0 }}>{tag}</Tag>
          ))}
        </span>
      )}
    </div>
  )
}

export default function() {
  return (
    <div>
      <p>Web designer-developer and maker of toy design systems</p>

      <section>
        <h2>Resources</h2>

        <ul style={{ listStyleType: 'none' }}>
          <li>
            <a target="_blank" href="http://reactcheatsheet.com/">
              React Cheat Sheet
            </a>
          </li>
          <li>
            <a target="_blank" href="http://reactpatterns.com/">
              React Patterns
            </a>
          </li>
          <li>
            <a target="_blank" href="http://learnreact.com">
              Learn React
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/chantastic/practical-bem"
            >
              Practical BEM
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Podcasts</h2>

        <ul style={{ listStyleType: 'none' }}>
          <li>
            <OutboundA href="https://reactpodcast.com">React Podcast</OutboundA>
            <span> — React stuff</span>
          </li>
          <li>
            <OutboundA href="http://birdcallreview.com">
              Bird Call Review
            </OutboundA>
            <span> — Nonsense and frivolity</span>
          </li>
          <li>
            <OutboundA href="http://briefs.fm/chantastic">briefs.fm</OutboundA>
            <span> — 3 minute confessions</span>
          </li>
        </ul>
      </section>

      <section>
        <h2>Talks</h2>

        <ul style={{ listStyleType: 'none' }}>
          <li>
            <OutboundTalkCard
              title="Hot Garbage: Clean Code is Dead"
              event="React Rally"
              date="Aug 2018"
              href="https://www.youtube.com/watch?v=-NP_upexPFg&t"
              tags={['Communication', 'Architecture', 'Design']}
            />
          </li>
          <li>
            <OutboundTalkCard
              title="Back to React"
              event="React Rally"
              date="Aug 2017"
              href="https://www.youtube.com/watch?v=T9-Mb_axNgA"
              tags={['Communication', 'Architecture', 'Design', 'React']}
            />
          </li>
          <li>
            <OutboundTalkCard
              title="Component Patterns in React"
              event="Fullstack Talks"
              date="Feb 2017"
              href="https://www.youtube.com/watch?v=YaZg8wg39QQ"
              tags={['React', 'Patterns']}
            />
          </li>
          <li>
            <OutboundTalkCard
              title="Lightning Talk: Minions CSS Framework"
              event="Fullstack Talks"
              href="https://www.youtube.com/watch?v=tMg6krAVtXY"
              date="Nov 2016"
              tags={['CSS', 'Design']}
            />
          </li>

          <li>
            <OutboundTalkCard
              title="Style Components"
              event="Fullstack Talks"
              href="https://www.youtube.com/watch?v=gNeavlJ7lNY&t"
              date="Aug 2016"
              tags={['CSS', 'Design']}
            />
          </li>
          <li>
            <OutboundTalkCard
              title="Styling React Components"
              event="Nodevember"
              href="https://www.youtube.com/watch?v=0aBv8dsZs84"
              date="Dec 2015"
              tags={['CSS', 'Design']}
            />
          </li>
          <li>
            <OutboundTalkCard
              title="Intro to minions.css"
              event="Nodevember"
              href="https://www.youtube.com/watch?v=QQYj_kBCtxc"
              date="Dec 2015"
              tags={['CSS', 'Design']}
            />
          </li>
          <li>
            <OutboundTalkCard
              title="Inline Styles: themes, media queries, contexts, &amp; when it's best to use CSS at React Europe"
              event="React Europe"
              href="https://www.youtube.com/watch?v=ERB1TJBn32c"
              date="July 2015"
              tags={['React', 'Style', 'CSS', 'Design']}
            />
          </li>
          <li>
            <OutboundTalkCard
              title="React.js on Rails at RailsConf"
              event="RailsConf"
              href="https://www.youtube.com/watch?v=kTSsZrub5iE"
              date="May 2015"
              tags={['React', 'Style', 'CSS', 'Design']}
            />
          </li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>

        <ul style={{ listStyleType: 'none' }}>
          <li>
            <a href="https://chantastic.org/btn.css">btn.css</a>
          </li>
          <li>
            <a href="https://chantastic.org/point.css">point.css</a>
          </li>
          <li>
            <a href="https://chantastic.org/minions.css">minions.css</a>
          </li>
          <li>
            <a href="https://chantastic.org/css4-to-css3">CSS4 to CSS3</a> (
            <a href="https://github.com/chantastic/css4-to-css3">source</a>)
          </li>
        </ul>
      </section>

      <section>
        <h2>Notes</h2>

        <ul style={{ listStyleType: 'none' }}>
          <li>
            <OutboundA href="http://chantastic.io/2016-reactjs-conf">
              2016 React.js Conf
            </OutboundA>
          </li>
          <li>
            <OutboundA href="http://chantastic.io/2015-react-europe">
              2015 React Europe
            </OutboundA>
          </li>
          <li>
            <OutboundA href="http://chantastic.io/2015-reactjs-conf">
              2015 React.js Conf
            </OutboundA>
          </li>
          <li>
            <OutboundA href="http://chantastic.io/jsconf2014">
              2014 JSConf
            </OutboundA>
          </li>
          <li>
            <OutboundA href="http://chantastic.io/emberconf2014">
              2014 EmberConf
            </OutboundA>
          </li>
        </ul>
      </section>

      <section>
        <h2>Gear</h2>

        <ul style={{ listStyleType: 'none' }}>
          <li>
            <a href="https://chantastic.org/gear/drawing">drawing</a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>

        <ul style={{ listStyleType: 'none' }}>
          <li>
            <a href="https://twitter.com/chantastic">twitter</a>
          </li>
          <li>
            <a href="https://github.com/chantastic">github</a>
          </li>
          <li>
            <a href="https://github.com/chantastic">instagram</a>
          </li>
          <li>
            <a href="https://medium.com/@chantastic">medium</a>
          </li>
        </ul>
      </section>
    </div>
  )
}
