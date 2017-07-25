import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import Card, { CardHeader, CardText } from 'material-ui/Card';


const styles = {
  populationCard: {
    fontSize: 24,
    margin: 10,
    width:120,
    height:100,
    padding: 0,
    float:'left',
    borderStyle: 'dashed',
    borderColor: '#808080',
    color: '#808080',
    cursor: 'pointer'
  },
  plus: {
    padding: 0,
    fontSize: 60,
    textAlign: 'center',
    color: '#808080'
  }
};

export default class NetPyNENewPopulation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (

        <Card style={styles.populationCard}>zDepth={2}
          <CardText style={styles.plus}>
          +
          </CardText>
        </Card>
        
    );
  }
}
