import _ from 'lodash'
import React from 'react'
import FacebookIcon from 'react-icons/lib/fa/facebook'
import GithubIcon from 'react-icons/lib/fa/github'
import LinkedinIcon from 'react-icons/lib/fa/linkedin'
import MediumIcon from 'react-icons/lib/fa/medium'
import WebsiteIcon from 'react-icons/lib/fa/chain'

import AUN from './speakers/aun.jpg'
import BABE from './speakers/babe.jpg'
import BENZ from './speakers/benz.jpg'
import CAL from './speakers/cal.jpg'
import CHRIS from './speakers/chris.jpg'
import HAM from './speakers/ham.jpg'
import HOLLY from './speakers/holly.jpg'
import KEYA from './speakers/keya.jpg'
import NOTSU from './speakers/notsu.jpg'
import PHOOM from './speakers/phoom.jpg'
import VEHA from './speakers/veha.jpg'
import WIN from './speakers/win.png'
import Section from './Section'
import { Colors, Fonts, fontSize, beat } from '../design'

const SPEAKERS = [
  // GUCODE TEAM,
  {
    name: 'Keya Desai',
    photo: KEYA,
    from: 'Lead Consultant Developer @ThoughtWorks',
    links: {
      github: 'https://github.com/keyadesai',
      website: 'https://keyadesai.com',
    },
  },
  {
    name: 'Manatsawin Hanmongkolchai',
    photo: WIN,
    from: 'Junior Architect @Wongnai',
    links: {
      github: 'https://github.com/whs',
      facebook: 'https://www.facebook.com/whs.in.th',
    },
  },
  {
    name: 'Phoomparin Mano',
    photo: PHOOM,
    from: 'Developer @iTAX',
    links: {
      github: 'https://github.com/phoomparin',
      website: 'https://phoom.in.th',
    },
  },
  {
    name: 'Jessada Trirongkit',
    photo: AUN,
    from: 'Software Engineer @Oozou',
    links: {
      github: 'https://github.com/dekdekbaloo',
      facebook: 'https://www.facebook.com/JessaAun',
    },
  },
  {
    name: 'Veha Suwatphisankij',
    photo: VEHA,
    from: 'Full Stack Engineer @AppSmiths Thailand ',
    links: {
      github: 'https://github.com/vehas',
      facebook: 'https://www.facebook.com/vehas',
    },
  },
  {
    name: 'Christopher Ng',
    photo: BABE,
    from: 'Mobile Developer @EventPop',
    links: {
      github: 'https://github.com/babedev',
      facebook: 'https://www.facebook.com/babedev',
    },
  },
  {
    name: 'Komkanit Sujautra',
    photo: CAL,
    from: 'Intern @Jitta',
    links: {
      github: 'https://github.com/komcal',
      facebook: 'https://www.facebook.com/komcal',
    },
  },
  {
    name: 'Rujira Aksornsin',
    photo: HOLLY,
    from: 'Frontend Web Lead @ AppMan',
    links: {
      linkedin: 'https://www.linkedin.com/in/rujira-aksornsin-632b5224',
      medium: 'https://medium.com/@HollyJira',
    },
  },
  {
    name: 'Chakrit Likitkhajorn',
    photo: CHRIS,
    from: 'Vice President @Taskworld',
    links: {
      github: 'https://github.com/chrisza4',
      facebook: 'https://www.facebook.com/chakrit.likitkhajorn',
    },
  },
  {
    name: 'Pichet Itngam',
    photo: NOTSU,
    from: 'Head of R&D @Dek-D',
    links: {},
  },
  {
    name: 'Pallop Chaoputhipuchong',
    photo: HAM,
    from: 'Software Engineer @Jitta',
    links: {
      github: 'https://github.com/vannizer',
      facebook: 'https://www.facebook.com/pallop.chao',
    },
  },
  {
    name: 'Tananan Tangthanachaikul',
    photo: BENZ,
    from: 'Full-stack Developer @TakeMeTour',
    links: {
      github: 'https://github.com/MicroBenz',
      facebook: 'https://www.facebook.com/MicroBenz',
    },
  },
]

export class SpeakersSection extends React.Component {
  getIcon = type => {
    switch (type) {
      case 'facebook':
        return FacebookIcon
      case 'github':
        return GithubIcon
      case 'linkedin':
        return LinkedinIcon
      case 'medium':
        return MediumIcon
      default:
        return WebsiteIcon
    }
  }

  renderLinks = links => (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        width: beat(2),
        '>*': {
          marginLeft: beat(0.25),
          marginBottom: beat(0.25),
        },
      }}
    >
      {_.map(links, (link, type) => {
        const Icon = this.getIcon(type)
        return (
          <a href={link}>
            <Icon key={link} />
          </a>
        )
      })}
    </div>
  )

  renderSpeakerPhoto = photo => (
    <div
      css={{
        width: beat(4),
        background: `
          linear-gradient(rgba(0, 88, 255, 0.5), rgba(0, 216, 255, 0.75)),
          url(${photo}) no-repeat center
        `,
        backgroundSize: 'cover',
        backgroundBlendMode: 'hard-light',
        borderTopLeftRadius: beat(0.25),
        borderBottomRightRadius: beat(0.25),
        boxShadow: `${beat(0.75)} ${beat(0.5)} 0 1px ${Colors.grey900}`,
      }}
    />
  )

  renderSpeakerInfo = (name, from) => (
    <div
      css={{
        position: 'absolute',
        left: 0,
        bottom: beat(0.25),
        width: beat(6),
        fontFamily: Fonts.display,
        lineHeight: 1.2,
        mixBlendMode: 'difference',
      }}
    >
      <div css={{ fontSize: fontSize(0), fontWeight: 600 }}>{name}</div>
      <div css={{ fontSize: fontSize(-5) }}>{from}</div>
    </div>
  )

  renderSpeaker = speaker => (
    <div
      key={speaker.name}
      css={{
        position: 'relative',
        height: beat(6),
        width: beat(6.5),
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'right',
        '&:nth-child(3n-1)': {
          marginTop: beat(2),
        },
        '&:nth-child(3n-2)': {
          marginTop: beat(4),
        },
        transition: 'all ease 0.2s',
        '&:hover': {
          width: beat(12),
          textAlign: 'left',
        },
      }}
    >
      {this.renderSpeakerPhoto(speaker.photo)}
      {this.renderSpeakerInfo(speaker.name, speaker.from)}
      {this.renderLinks(speaker.links)}
    </div>
  )

  render () {
    return (
      <Section
        title="Speakers"
        cssExtension={{
          background: `linear-gradient(${Colors.grey800}, ${Colors.grey900})`,
        }}
      >
        <div
          css={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: beat(25),
          }}
        >
          {SPEAKERS.map(speaker => this.renderSpeaker(speaker))}
        </div>
      </Section>
    )
  }
}
