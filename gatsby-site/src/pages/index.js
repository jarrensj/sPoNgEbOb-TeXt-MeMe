import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

export default class IndexPage extends React.Component {
  state = {
    input: "",
    output: ""
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    var spongebobText = spongebob(this.state.input);
    this.setState({
      output: spongebobText
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>eNtEr TeXt BeLoW</h1>
        <form onSubmit={this.handleSubmit}>
        <input
            type="text"
            name="input"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <button type="submit">suBmIt</button>
       </form>
       { this.state.output ? <h2>yOuR tRaNsFoRmEd TeXt</h2> : null }
       {this.state.output}
       <br />
       <br />
      </Layout>
    )
  }

}

const isLetter = char => {
  return char.toLowerCase() != char.toUpperCase();
}

const spongebob = text => {
  let newText = '';
  let uppercase = false;
  for(let i = 0; i < text.length; ++i) {
    if(isLetter(text.charAt(i))) {
      if(!uppercase) {
        newText += text.charAt(i).toLowerCase();
        uppercase = true;
      }
      else {
        newText += text.charAt(i).toUpperCase();
        uppercase = false;
      }
    }
    else {
      newText += text.charAt(i);
    }
  }
  return newText;
}
