import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import Card, { CardHeader, CardText } from 'material-ui/Card';
import NetPyNEPopulations from './NetPyNEPopulations';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },

  tabContainer:{
      padding:10,
      height:460,
      overflow: 'auto'
  },
  
  card:{
      clear:'both'
  }
};

export default class NetPyNETabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'define',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      > 
        <Tab label="Define your network" value="define">
          <NetPyNEPopulations/>
          <Card style={styles.card}>
            <CardHeader
              title="Cell rules"
              subtitle="Define here the rules to generate the cells in your network"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
          </Card>
          <Card style={styles.card}>
            <CardHeader
              title="Synapses"
              subtitle="Define here the rules to generate the synapses in your network"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
          </Card>
          <Card style={styles.card}>
            <CardHeader
              title="Connections"
              subtitle="Define here the connectivity rules in your network"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
          </Card>
          <Card style={styles.card}>
            <CardHeader
              title="Settings"
              subtitle="General settings"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
          </Card>
        </Tab>
        <Tab label="Explore your network" value="explore">
          <div>
            <h2 style={styles.headline}>Geppetto exploration</h2>
          </div>
        </Tab>
        <Tab label="Simulate and analyse" value="simulate">
          <div>
            <h2 style={styles.headline}>Geppetto simulation</h2>
          </div>
        </Tab>
      </Tabs>
    );
  }
}
