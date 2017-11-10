
import React, { Component } from 'react';
import Canvas from '../../../../js/components/interface/3dCanvas/Canvas';
import ControlPanel from '../../../../js/components/interface/controlPanel/controlpanel';
import IconButton from '../../../../js/components/controls/iconButton/IconButton';
var Utils = require('../../Utils');

const styles = {

    hidden:{
        display: 'none'
    },

    modal:{
        position: 'absolute !important',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: '999',
        height: '100%',
        width: '100%',
        top:0
      },

      foregroundControls:{
        position: 'absolute',
        left: '37px',
        top: '20px'
      }
  
  };
  
export default class NetPyNEInstantiated extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            model: props.model,
            controlPanelHidden:true
        };

        this.plotFigure = this.plotFigure.bind(this);
    }

    plotFigure(pythonFigureMethod, plotName) {
        var that = this;
        //TODO Call a Python method to read HOC objects created by NetPyNE which will convert them to a geppetto model
        //using PyGeppetto and send back the JSON serialization
        //TODO Maybe create a top level Model or Project sync
    
        Utils.sendPythonMessage(pythonFigureMethod, [])
          .then(response => {
            G.addWidget(1).then(w=>{
                w.setName(plotName);
                w.$el.append(response);
                var svg =$(w.$el).find("svg")[0];
                svg.removeAttribute('width');
                svg.removeAttribute('height');
                svg.setAttribute('width','100%');
                svg.setAttribute('height','98%');

            });
          });
    
      }

    componentDidMount(){
        this.refs.canvas.displayAllInstances();
    }

    render() {
        var that=this;
        return (
            <div id="instantiatedContainer" style={{height:'100%', width:'100%'}}>
                <Canvas
                    id="CanvasContainer"
                    name={"Canvas"}
                    componentType={'Canvas'}
                    ref={"canvas"}
                    style={{height:'100%', width:'100%'}}
                />
                <div id="controlpanel" style={{top:0}}>
                    <ControlPanel icon={"styles.Modal"} > 
                    </ControlPanel>
                </div>
                <IconButton style={{position:'absolute',left:35,top:10}} onClick={()=>{$('#controlpanel').show();}} icon={"fa-list"} />
                <IconButton style={{position:'absolute',left:85,top:10}} onClick={()=>{that.plotFigure('getNetPyNE2DNetPlot','2D Net Plot')}} icon={"fa-bar-chart"} />
                <IconButton style={{position:'absolute',left:125,top:10}} onClick={()=>{that.plotFigure('getNetPyNERasterPlot','Raster Plot')}} icon={"fa-bar-chart"} />
            </div>

        );
    }
}
