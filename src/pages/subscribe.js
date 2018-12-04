import React, { Component } from 'react'
import Styled from 'styled-components'
import { graphql } from 'gatsby'

import { HomePageHero, HomePageTryptych, SideNav } from '../components'
import { ProductList } from '../components/molecules'
import { MainLayout } from '../components/layouts'
import { HomePageButton } from '../components/atoms'

const Container = Styled.div`
	
animation: fadein 1s; 
  .sideNav{
    position:sticky
  };

  @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

  #image-container{
  padding: 10px;
	background: #dbdfe5;
	-webkit-flex: 1; /* Safari */
	-ms-flex: 1; /* IE 10 */
	flex: 1; /* Standard syntax */
    background-color: orange;
  }
  
  #sub-info-container{
  padding: 10px;
	-webkit-flex: 1; /* Safari */
	-ms-flex: 1; /* IE 10 */
	flex: 1; /* Standard syntax */

    height: 962px;
    background-color: #FBE5E9;
  }

  #sub-info-text{
    padding-left: 79px;
    padding-top: 50px;
    width: 563px;
  }

  p{
  color: #47525E;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 33px;
  text-align: left;
}
h1{
  color: #E20031;
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  text-align: left;
}
.center-text{
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}
  .lead{
    font-size:1.2rem
    font-weight: bold;
  }

.flex-container{
	width: 100%;
	min-height: 300px;
	margin: 0 auto;
	display: -webkit-flex; /* Safari */		
	display: flex; /* Standard syntax */
}

img{
  width: 640px;
  height: 962px;
}



`
class Subscribe extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Container>
        <MainLayout>
          <div className="flex-container">
            <img src="https://i.redd.it/bptzx7ur4uj11.jpg" alt="image" />

            <div id="sub-info-container">
              <div id="sub-info-text">
                <h1>Subscribe</h1>
                <p className="lead">
                  Ready to always have a fresh look? Of course you are. Here's
                  how it works:
                </p>
                <div className="center-text">
                  <p>
                    For $10/ month you'll get a pair of earrings of your choice
                    delivered to your door. <br /> <br /> We'll notify you each
                    month when your next pair is available. If you forget to
                    pick, we'll send you a suprise pair you're sure to like ;){' '}
                  </p>
                  <br />
                  <HomePageButton />

                  <br />
                  <p>
                    (Members also get free shipping, access to secret sales, and
                    other special stuff...shhh)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </Container>
    )
  }
}

export default Subscribe
